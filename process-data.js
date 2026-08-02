/* ==========================================================================
   process-data.js
   Single source of truth for the Hiring Process rail.
   -> To add/reorder a step: edit the array below — the "num" field is
      shown as the step badge, so keep it in sync with array order.
   ========================================================================== */

export const PROCESS_STEPS = [
  {
    num: "01",
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 13a8 8 0 0116 0v4a2 2 0 01-2 2h-1v-6h3M4 13v6h3v-6H4M4 13a8 8 0 0116 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: "Phone screen with recruiter",
    body: "A quick call to align on the role and your background."
  },
  {
    num: "02",
    icon: `<svg viewBox="0 0 24 24" fill="none"><circle cx="8.5" cy="9" r="3" stroke="currentColor" stroke-width="1.6"/><circle cx="16" cy="10.5" r="2.4" stroke="currentColor" stroke-width="1.6"/><path d="M3 19c0-2.8 2.5-5 5.5-5s5.5 2.2 5.5 5M14.5 15.2c2.5.2 4.5 2 4.5 3.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
    title: "Two-round interview",
    body: "Meet both the Vietnam and Australia teams you'd work with."
  },
  {
    num: "03",
    icon: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.6"/><path d="M12 7v10M14.8 9.6c0-1.1-1.2-2-2.8-2s-2.8.9-2.8 2 1.2 1.8 2.8 2 2.8.9 2.8 2-1.2 2-2.8 2-2.8-.9-2.8-2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
    title: "Offer",
    body: "Compensation, start date, and everything you need to decide."
  },
  {
    num: "04",
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2.5c2.6 1.8 4.2 4.8 4.2 8.7 0 2.4-.6 4.4-1.4 6l-2.8 3.3-2.8-3.3c-.8-1.6-1.4-3.6-1.4-6 0-3.9 1.6-6.9 4.2-8.7z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="10.5" r="1.8" stroke="currentColor" stroke-width="1.6"/><path d="M9 18.5l-2.2 3M15 18.5l2.2 3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
    title: "Onboarding",
    body: "Kickoff, gear, and ramp-up with your new team."
  }
];
