/* ==========================================================================
   perks.js
   Renders the Culture & Benefits grid from perks-data.js. To add a perk,
   edit that file only — this module just maps data to markup.
   ========================================================================== */

import { PERKS } from '../perks-data.js';

function perkCardHTML(perk) {
  return `
    <div class="perk-card">
      <div class="icon">${perk.icon}</div>
      <h4>${perk.title}</h4>
      <p>${perk.body}</p>
    </div>`;
}

export function initPerks() {
  const grid = document.getElementById('perksGrid');
  grid.innerHTML = PERKS.map(perkCardHTML).join('');
}
