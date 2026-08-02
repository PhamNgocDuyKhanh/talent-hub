/* ==========================================================================
   back-to-top.js
   ========================================================================== */

export function initBackToTop() {
  const topBtn = document.getElementById('topBtn');

  window.addEventListener('scroll', () => {
    topBtn.classList.toggle('show', window.scrollY > 400);
  });

  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
