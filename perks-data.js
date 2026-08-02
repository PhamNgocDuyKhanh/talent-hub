/* ==========================================================================
   perks-data.js
   Single source of truth for the Culture & Benefits grid.
   -> To add a perk: copy an object below and fill in the fields.
   -> "icon" is raw inline SVG markup (stroke-based, 24x24 viewBox, matches
      the rest of the site's icon style: stroke-width 1.4–1.6, currentColor).
   ========================================================================== */

export const PERKS = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
    title: "13th-month bonus",
    body: "Plus a referral bonus program."
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
    title: "14 annual leave days",
    body: "Flexible scheduling, Mon–Fri, no overtime."
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 6.5 5.5 5.5 0 0121.5 12c-2.5 4.5-9.5 9-9.5 9z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
    title: "Premium health insurance",
    body: "Coverage for you and your family, plus annual check-ups."
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 19V5a2 2 0 012-2h9l5 5v11a2 2 0 01-2 2H6a2 2 0 01-2-2z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M8 12h8M8 16h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
    title: "Hybrid working model",
    body: "A modern office when you want it, flexibility when you need it."
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`,
    title: "Recognition awards",
    body: "For teams and individuals who go above and beyond."
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2l9 4.5-9 4.5-9-4.5L12 2zM3 6.5V17l9 4.5 9-4.5V6.5" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
    title: "Sponsored learning",
    body: "English classes, Udemy/PluralSight, and certification programs."
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="12" rx="1.5" stroke="currentColor" stroke-width="1.6"/><path d="M9 20h6M12 16v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
    title: "MacBook M1 Pro",
    body: "A feel-like-home workplace and the gear to match."
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M12 3a15 15 0 010 18M3 12h18" stroke="currentColor" stroke-width="1.6"/></svg>`,
    title: "Global opportunities",
    body: "Work with partner teams across Australia and beyond."
  }
];
