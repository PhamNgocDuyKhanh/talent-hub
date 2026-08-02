/* ==========================================================================
   jobs.js
   Renders the job grid from JOBS and wires up search + department filter.
   ========================================================================== */

import { JOBS } from '../jobs-data.js';
import { openDrawer } from './drawer.js';

let jobsGrid, jobsCount, searchInput, chips;
let activeDept = 'All';
let searchQuery = '';

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function jobCardHTML(job) {
  return `
    <button class="job-card" data-id="${job.id}">
      <div class="job-top">
        <div>
          <h3>${job.title}</h3>
          <div class="company">${job.company}</div>
        </div>
        <svg class="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="tag-row">
        <span class="tag">${job.department}</span>
        <span class="tag tag-loc">${job.location}</span>
        <span class="tag">${job.type}</span>
      </div>
    </button>`;
}

function renderJobs() {
  const q = searchQuery.trim().toLowerCase();
  const filtered = JOBS.filter(job => {
    const matchesDept = activeDept === 'All' || job.department === activeDept;
    const haystack = `${job.title} ${job.company} ${job.department} ${job.location}`.toLowerCase();
    const matchesQuery = q === '' || haystack.includes(q);
    return matchesDept && matchesQuery;
  });

  jobsCount.textContent = `${filtered.length} role${filtered.length !== 1 ? 's' : ''} shown · ${JOBS.length} total`;

  jobsGrid.innerHTML = filtered.length
    ? filtered.map(jobCardHTML).join('')
    : `<div class="no-results">No roles match "${escapeHtml(searchQuery)}". Try another team or clear the search.</div>`;
}

// Keeps the hero's "X open roles / Y partner companies" numbers honest —
// computed from JOBS itself so they can never drift out of sync the way a
// hardcoded HTML number would as roles get added or removed.
function updateHeroStats() {
  const statRoles = document.getElementById('statRoles');
  const statCompanies = document.getElementById('statCompanies');
  if (statRoles) statRoles.textContent = JOBS.length;
  if (statCompanies) statCompanies.textContent = new Set(JOBS.map(j => j.company)).size;
}

export function initJobs() {
  jobsGrid = document.getElementById('jobsGrid');
  jobsCount = document.getElementById('jobsCount');
  searchInput = document.getElementById('jobSearch');
  chips = document.querySelectorAll('.chip');

  updateHeroStats();

  // Delegated click listener: one listener on the grid instead of
  // re-attaching a listener to every card every time renderJobs() runs.
  jobsGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.job-card');
    if (card) openDrawer(card.dataset.id);
  });

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderJobs();
  });

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeDept = chip.dataset.dept;
      renderJobs();
    });
  });

  renderJobs();
}
