/* ==========================================================================
   drawer.js
   Dynamic job-detail slide-over panel. Populated from JOBS at click time,
   so the markup lives in one place (jobs-data.js) instead of one <section>
   per job.

   "qualifications" / "successMetrics" / "whyUs" are optional per job —
   optionalListSection() renders nothing when a job doesn't have one, so
   short-form jobs and full-JD jobs both work off the same template.

   Footer renders two mailto-templated actions per job:
   - Apply Now      -> pre-filled application email
   - Refer a Talent -> pre-filled referral email
   Both address RECRUITER_EMAIL below. Bracketed placeholders like
   [Candidate Name] / [Your Name] are left in the draft intentionally —
   there's no backend to know who's applying, so the applicant fills
   those in before hitting send.

   DEEP LINKING
   Opening a job pushes "#job=<id>" onto the URL via history.pushState
   (no page jump — pushState never scrolls). Closing it strips the hash
   via history.replaceState. A popstate listener keeps the drawer in
   sync with the browser's back/forward buttons, and on first load we
   check the incoming hash and open straight to that job if it's valid
   (silently ignored if the id doesn't exist — e.g. a deleted role).
   The header's Copy Link button just copies window.location.href,
   which always reflects whichever job is currently open.
   ========================================================================== */

import { JOBS } from '../jobs-data.js';

const RECRUITER_EMAIL = "khanh.phamngocduy@cbtw.tech";
const COPIED_FEEDBACK_MS = 2000;

let drawer, drawerOverlay, drawerBody, drawerFooter;

function optionalListSection(title, items) {
  if (!items || !items.length) return '';
  return `
    <div class="drawer-section">
      <h4>${title}</h4>
      <ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>`;
}

function buildMailtoUrl(subject, body) {
  return `mailto:${RECRUITER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function applyMailtoUrl(job) {
  const subject = `Application for ${job.title} - [Candidate Name]`;
  const body =
    `Hi Khanh,\n\n` +
    `I am writing to apply for the ${job.title} position.\n\n` +
    `My LinkedIn/Portfolio: [Insert Link]\n\n` +
    `[Optional brief note...]\n\n` +
    `Best regards,\n[Your Name]`;
  return buildMailtoUrl(subject, body);
}

function referMailtoUrl(job) {
  const subject = `Referral for ${job.title} - Referring [Friend's Name]`;
  const body =
    `Hi Khanh,\n\n` +
    `I would like to refer a friend for the ${job.title} position.\n\n` +
    `Friend's Name: \n` +
    `Friend's LinkedIn/Portfolio: \n\n` +
    `Why they are a great fit:\n[Short note]\n\n` +
    `Best regards,\n[Your Name]`;
  return buildMailtoUrl(subject, body);
}

/* ---- URL hash helpers -------------------------------------------------- */
function parseJobIdFromHash() {
  const match = window.location.hash.match(/^#job=(.+)$/);
  return match ? decodeURIComponent(match[1]) : null;
}

function pushJobHash(id) {
  history.pushState({ jobId: id }, '', `#job=${encodeURIComponent(id)}`);
}

function clearJobHash() {
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }
}

/* ---- Copy link button --------------------------------------------------- */
const ICON_LINK = `<svg viewBox="0 0 24 24" fill="none"><path d="M9 15l6-6M8 13l-1.6 1.6a3.6 3.6 0 005.1 5.1L13 18M16 11l1.6-1.6a3.6 3.6 0 00-5.1-5.1L11 6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const ICON_CHECK = `<svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function copyLinkButtonHTML() {
  return `
    <button type="button" class="copy-link-btn" aria-label="Copy link to this job">
      <span class="copy-icon-link">${ICON_LINK}</span>
      <span class="copy-icon-check">${ICON_CHECK}</span>
      <span class="copy-tooltip">Copied!</span>
    </button>`;
}

async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  // Fallback for contexts where the async Clipboard API is unavailable
  // (older browsers, or a sandboxed iframe without clipboard-write permission).
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

function handleCopyLinkClick(btn) {
  copyToClipboard(window.location.href).then(() => {
    btn.classList.add('copied');
    clearTimeout(btn._copiedTimer);
    btn._copiedTimer = setTimeout(() => btn.classList.remove('copied'), COPIED_FEEDBACK_MS);
  }).catch(() => {
    // Clipboard write failed (permissions, unsupported context, etc.) — fail quietly.
  });
}

/* ---- Drawer open/close --------------------------------------------------- */
export function openDrawer(id, { pushHistory = true } = {}) {
  const job = JOBS.find(j => j.id === id);
  if (!job) return;

  drawerBody.innerHTML = `
    <div class="drawer-title-row">
      <h2>${job.title}</h2>
      ${copyLinkButtonHTML()}
    </div>
    <div class="drawer-company">${job.company} · ${job.location}</div>
    <div class="tag-row">
      <span class="tag">${job.department}</span>
      <span class="tag tag-loc">${job.location}</span>
      <span class="tag">${job.type}</span>
    </div>
    <div class="drawer-section">
      <h4>About the role</h4>
      <p>${job.blurb}</p>
    </div>
    <div class="drawer-section">
      <h4>What you'll do</h4>
      <ul>${job.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
    </div>
    ${optionalListSection("Qualifications", job.qualifications)}
    ${optionalListSection("How success will be measured", job.successMetrics)}
    ${optionalListSection("Why us?", job.whyUs)}
  `;

  drawerFooter.innerHTML = `
    <a class="btn btn-primary" href="${applyMailtoUrl(job)}">Apply Now →</a>
    <a class="btn btn-ghost" href="${referMailtoUrl(job)}">Refer a Talent</a>
  `;

  drawer.classList.add('open');
  drawerOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  if (pushHistory) pushJobHash(id);
}

export function closeDrawer({ pushHistory = true } = {}) {
  drawer.classList.remove('open');
  drawerOverlay.classList.remove('open');
  document.body.style.overflow = '';

  if (pushHistory) clearJobHash();
}

export function initDrawer() {
  drawer = document.getElementById('jobDrawer');
  drawerOverlay = document.getElementById('drawerOverlay');
  drawerBody = document.getElementById('drawerBody');
  drawerFooter = document.getElementById('drawerFooter');

  document.getElementById('drawerCloseBtn').addEventListener('click', () => closeDrawer());
  drawerOverlay.addEventListener('click', () => closeDrawer());

  // Delegated listener: drawerBody's innerHTML is replaced on every job,
  // but drawerBody itself never is, so one listener here covers every
  // job's copy-link button without re-binding per render.
  drawerBody.addEventListener('click', (e) => {
    const btn = e.target.closest('.copy-link-btn');
    if (btn) handleCopyLinkClick(btn);
  });

  // Deep link: open straight to the job named in an incoming #job=... URL.
  // Invalid/deleted ids are ignored gracefully — no drawer, no error.
  const initialId = parseJobIdFromHash();
  if (initialId && JOBS.some(j => j.id === initialId)) {
    openDrawer(initialId, { pushHistory: false });
  }

  // Keep the drawer in sync with browser back/forward navigation.
  window.addEventListener('popstate', () => {
    const id = parseJobIdFromHash();
    if (id && JOBS.some(j => j.id === id)) {
      openDrawer(id, { pushHistory: false });
    } else {
      closeDrawer({ pushHistory: false });
    }
  });
}
