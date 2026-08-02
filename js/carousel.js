/* ==========================================================================
   carousel.js
   Page-based sliding carousel (moves --per-view slides at a time).
   Supports: Prev/Next buttons, dot indicators, mouse/touch drag-to-swipe,
   arrow-key navigation, and responsive re-layout on resize.
   ========================================================================== */

export function initCarousel() {
  const carousel = document.getElementById('teamCarousel');
  const viewport = document.getElementById('carouselViewport');
  const track = document.getElementById('carouselTrack');
  const slides = Array.from(track.children);
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const dotsWrap = document.getElementById('carouselDots');

  let perView = 1;
  let pageStep = 0;      // px to translate per page (viewport width + 1 gap)
  let currentPage = 0;
  let totalPages = 1;

  function readGapPx() {
    return parseFloat(getComputedStyle(carousel).getPropertyValue('--gap')) || 16;
  }
  function readPerView() {
    return parseInt(getComputedStyle(carousel).getPropertyValue('--per-view'), 10) || 1;
  }

  function layout() {
    perView = readPerView();
    const gap = readGapPx();
    const viewportWidth = viewport.clientWidth;
    const slideWidth = (viewportWidth - gap * (perView - 1)) / perView;

    slides.forEach(slide => { slide.style.width = `${slideWidth}px`; });

    pageStep = viewportWidth + gap;
    totalPages = Math.max(1, Math.ceil(slides.length / perView));
    currentPage = Math.min(currentPage, totalPages - 1);

    buildDots();
    goToPage(currentPage, false);
  }

  function buildDots() {
    dotsWrap.innerHTML = '';
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Go to photo page ${i + 1}`);
      dot.addEventListener('click', () => goToPage(i));
      dotsWrap.appendChild(dot);
    }
  }

  function updateUI() {
    Array.from(dotsWrap.children).forEach((dot, i) => {
      dot.classList.toggle('active', i === currentPage);
      dot.setAttribute('aria-selected', i === currentPage ? 'true' : 'false');
    });
// With infinite loop, buttons don't need to be permanently disabled at edges
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }

  function goToPage(page, animate = true) {
    // --- LOOP LOGIC START ---
    if (page < 0) {
      currentPage = totalPages - 1; // Wrap from first to last page
    } else if (page >= totalPages) {
      currentPage = 0;             // Wrap from last to first page
    } else {
      currentPage = page;
    }
    // --- LOOP LOGIC END ---

    if (!animate) track.classList.add('no-transition');
    track.style.transform = `translateX(-${currentPage * pageStep}px)`;
    if (!animate) {
      track.offsetHeight; // force reflow before re-enabling transitions
      track.classList.remove('no-transition');
    }
    updateUI();
  }

  prevBtn.addEventListener('click', () => goToPage(currentPage - 1));
  nextBtn.addEventListener('click', () => goToPage(currentPage + 1));

  carousel.setAttribute('tabindex', '0');
  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goToPage(currentPage - 1);
    if (e.key === 'ArrowRight') goToPage(currentPage + 1);
  });

  // --- Drag / swipe (mouse + touch via Pointer Events) ---
  let isDragging = false;
  let dragStartX = 0;
  let dragDeltaX = 0;
  let baseOffset = 0;

  viewport.addEventListener('pointerdown', (e) => {
    isDragging = true;
    dragStartX = e.clientX;
    dragDeltaX = 0;
    baseOffset = currentPage * pageStep;
    track.classList.add('no-transition');
    viewport.setPointerCapture(e.pointerId);
  });

  viewport.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    dragDeltaX = e.clientX - dragStartX;
    track.style.transform = `translateX(${-baseOffset + dragDeltaX}px)`;
  });

  function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    track.classList.remove('no-transition');

    const threshold = pageStep * 0.18; // how far you must drag to change page
    if (dragDeltaX < -threshold) {
      goToPage(currentPage + 1);
    } else if (dragDeltaX > threshold) {
      goToPage(currentPage - 1);
    } else {
      goToPage(currentPage); // snap back
    }
    dragDeltaX = 0;
  }

  viewport.addEventListener('pointerup', endDrag);
  viewport.addEventListener('pointercancel', endDrag);
  viewport.addEventListener('pointerleave', () => { if (isDragging) endDrag(); });

  // --- Responsive re-layout ---
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(layout, 150);
  });

  layout();
}
