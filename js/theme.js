/* ==========================================================================
   theme.js
   Dark/light mode. Defaults to the visitor's OS preference, then lets
   them override it via the header toggle.

   On your live GitHub Pages site (i.e. NOT inside Claude's artifact
   preview) you can make the choice persist across visits by swapping
   the two "memory" functions below for localStorage calls — see the
   comments next to them.
   ========================================================================== */

const root = document.documentElement;
let themeMemory = null; // in-memory fallback (per page-load)

function getStoredTheme() {
  // return localStorage.getItem('cbtw-theme');   // <- use this on your real deployment
  return themeMemory;
}

function storeTheme(value) {
  // localStorage.setItem('cbtw-theme', value);   // <- use this on your real deployment
  themeMemory = value;
}

export function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  storeTheme(theme);
}

export function initTheme() {
  const saved = getStoredTheme();
  if (saved) {
    applyTheme(saved);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  document.getElementById('themeToggle').addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}
