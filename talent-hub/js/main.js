/* ==========================================================================
   main.js
   Entry point. Loaded as <script type="module"> — every feature below
   lives in its own module scope, so nothing here leaks onto window.
   To add a new section: write its module the same way (an initX()
   export), import it below, and call it.
   ========================================================================== */

import { initTheme } from './theme.js';
import { initJobs } from './jobs.js';
import { initDrawer, closeDrawer } from './drawer.js';
import { initQuickApply, closeQuickApply } from './quick-apply.js';
import { initPerks } from './perks.js';
import { initProcess } from './process.js';
import { initCarousel } from './carousel.js';
import { initBackToTop } from './back-to-top.js';

initTheme();
initDrawer();
initQuickApply();
initJobs();
initPerks();
initProcess();
initCarousel();
initBackToTop();

// Escape closes whichever overlay is open (drawer and/or quick-apply modal).
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeDrawer();
    closeQuickApply();
  }
});
