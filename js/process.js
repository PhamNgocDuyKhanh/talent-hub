/* ==========================================================================
   process.js
   Renders the Hiring Process rail from process-data.js. To add/reorder a
   step, edit that file only — this module just maps data to markup.
   ========================================================================== */

import { PROCESS_STEPS } from '../process-data.js';

function processStepHTML(step) {
  return `
    <div class="process-step">
      <div class="process-icon-mask">
        <div class="process-icon">
          ${step.icon}
          <span class="process-num">${step.num}</span>
        </div>
      </div>
      <h4>${step.title}</h4>
      <p>${step.body}</p>
    </div>`;
}

export function initProcess() {
  const rail = document.getElementById('processRail');
  rail.innerHTML = PROCESS_STEPS.map(processStepHTML).join('');
}
