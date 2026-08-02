/* ==========================================================================
   quick-apply.js
   Formspree-ready "general application" modal, with a mailto fallback.
   Set FORMSPREE_ENDPOINT to your form URL (https://formspree.io/f/xxxx)
   to post entries directly to your inbox. Leave it blank to fall back
   to a pre-filled mailto instead.
   ========================================================================== */

const FORMSPREE_ENDPOINT = ""; // e.g. "https://formspree.io/f/abcdwxyz"
const RECRUITER_EMAIL = "khanh.phamngocduy@cbtw.tech";

let quickApplyOverlay, quickApplyForm, quickApplyRoleField, quickApplySuccessMsg;

export function openQuickApply(roleTitle) {
  quickApplyRoleField.value = roleTitle || 'General Application';
  quickApplyOverlay.classList.add('open');
}

export function closeQuickApply() {
  quickApplyOverlay.classList.remove('open');
  // Reset so the next time this opens, it's always the fresh form —
  // not whatever success/error state was left over from last time.
  quickApplyForm.hidden = false;
  quickApplySuccessMsg.hidden = true;
  quickApplyForm.reset();
}

export function initQuickApply() {
  quickApplyOverlay = document.getElementById('quickApplyOverlay');
  quickApplyForm = document.getElementById('quickApplyForm');
  quickApplyRoleField = document.getElementById('qaRole');
  quickApplySuccessMsg = document.getElementById('qaSuccessMsg');

  document.getElementById('quickApplyBtn').addEventListener('click', () => openQuickApply());
  document.getElementById('qaCloseBtn').addEventListener('click', closeQuickApply);
  quickApplyOverlay.addEventListener('click', (e) => {
    if (e.target === quickApplyOverlay) closeQuickApply();
  });

  quickApplyForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('qaName').value;
    const email = document.getElementById('qaEmail').value;
    const role = quickApplyRoleField.value;
    const message = document.getElementById('qaMessage').value;

    if (FORMSPREE_ENDPOINT) {
      try {
        await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(quickApplyForm)
        });
        quickApplyForm.hidden = true;
        quickApplySuccessMsg.hidden = false;
      } catch (err) {
        alert("Something went wrong sending your application — please try the email option instead.");
      }
    } else {
      const subject = encodeURIComponent(`Application for ${role}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nRole: ${role}\n\n${message}`);
      window.open(`mailto:${RECRUITER_EMAIL}?subject=${subject}&body=${body}`);
      closeQuickApply();
    }
  });
}
