/* ==========================================================================
   jobs.js
   Renders the job grid from JOBS and wires up the hybrid filter system:
   - Department chips: curated, high-level browsing (unchanged behavior)
   - Company / Tech Stack dropdowns: auto-populated FROM JOBS itself, so
     new companies or tech tags show up automatically as roles are added —
     no hardcoded <option> lists to maintain by hand.
   All filters (chip + both dropdowns + search) combine with AND logic.
   ========================================================================== */

import { JOBS } from '../jobs-data.js';
import { openDrawer } from './drawer.js';

let jobsGrid, jobsCount, searchInput, chips, companyFilter, techFilter;
let activeDept = 'All';
let activeCompany = 'All';
let activeTech = 'All';
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
    const matchesCompany = activeCompany === 'All' || job.company === activeCompany;
    const matchesTech = activeTech === 'All' || (job.techStack || []).includes(activeTech);
    const haystack = `${job.title} ${job.company} ${job.department} ${job.location}`.toLowerCase();
    const matchesQuery = q === '' || haystack.includes(q);
    return matchesDept && matchesCompany && matchesTech && matchesQuery;
  });

  jobsCount.textContent = `${filtered.length} role${filtered.length !== 1 ? 's' : ''} shown · ${JOBS.length} total`;

  jobsGrid.innerHTML = filtered.length
    ? filtered.map(jobCardHTML).join('')
    : `<div class="no-results">No roles match "${escapeHtml(searchQuery)}". Try another team, company, or tech stack.</div>`;
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

// Builds the Company and Tech Stack dropdown options directly from JOBS,
// so adding a new company or tech tag in jobs-data.js is the only thing
// needed to make it filterable here \u2014 no HTML to update by hand.
function populateFilterOptions() {
  const companies = [...new Set(JOBS.map(j => j.company))].sort((a, b) => a.localeCompare(b));
  const techStacks = [...new Set(JOBS.flatMap(j => j.techStack || []))].sort((a, b) => a.localeCompare(b));

  companies.forEach(company => {
    const opt = document.createElement('option');
    opt.value = company;
    opt.textContent = company;
    companyFilter.appendChild(opt);
  });

  techStacks.forEach(tech => {
    const opt = document.createElement('option');
    opt.value = tech;
    opt.textContent = tech;
    techFilter.appendChild(opt);
  });
}

export function initJobs() {
  jobsGrid = document.getElementById('jobsGrid');
  jobsCount = document.getElementById('jobsCount');
  searchInput = document.getElementById('jobSearch');
  chips = document.querySelectorAll('.chip');
  companyFilter = document.getElementById('companyFilter');
  techFilter = document.getElementById('techFilter');

  updateHeroStats();
  populateFilterOptions();

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

  companyFilter.addEventListener('change', (e) => {
    activeCompany = e.target.value;
    companyFilter.classList.toggle('active', activeCompany !== 'All');
    renderJobs();
  });

  techFilter.addEventListener('change', (e) => {
    activeTech = e.target.value;
    techFilter.classList.toggle('active', activeTech !== 'All');
    renderJobs();
  });

  renderJobs();
}

let jobsGrid, jobsCount, searchInput, chips, companySelect, clearFiltersBtn;
let activeDept = 'All';
let activeCompany = 'All';
let searchQuery = '';

function renderJobs() {
  const q = searchQuery.trim().toLowerCase();
  
  const filtered = JOBS.filter(job => {
    const matchesDept = activeDept === 'All' || job.department === activeDept;
    const matchesCompany = activeCompany === 'All' || job.company === activeCompany;
    const haystack = `${job.title} ${job.company} ${job.department} ${job.location}`.toLowerCase();
    const matchesQuery = q === '' || haystack.includes(q);
    return matchesDept && matchesCompany && matchesQuery;
  });

  // Toggle visibility of the "Clear filters" button
  const hasActiveFilters = activeDept !== 'All' || activeCompany !== 'All' || q !== '';
  if (clearFiltersBtn) {
    clearFiltersBtn.classList.toggle('hidden', !hasActiveFilters);
  }

  jobsCount.textContent = `${filtered.length} role${filtered.length !== 1 ? 's' : ''} shown · ${JOBS.length} total`;

  jobsGrid.innerHTML = filtered.length
    ? filtered.map(jobCardHTML).join('')
    : `<div class="no-results">No roles match your filters. <button id="inlineClear" class="text-link">Clear all filters</button></div>`;
}

function resetFilters() {
  activeDept = 'All';
  activeCompany = 'All';
  searchQuery = '';

  // Reset UI inputs
  if (searchInput) searchInput.value = '';
  if (companySelect) companySelect.value = 'All';
  if (chips) {
    chips.forEach(c => c.classList.toggle('active', c.dataset.dept === 'All'));
  }

  renderJobs();
}

export function initJobs() {
  jobsGrid = document.getElementById('jobsGrid');
  jobsCount = document.getElementById('jobsCount');
  searchInput = document.getElementById('jobSearch');
  chips = document.querySelectorAll('.chip');
  companySelect = document.getElementById('companySelect');
  clearFiltersBtn = document.getElementById('clearFiltersBtn');

  updateHeroStats();
  populateCompanyDropdown();

  jobsGrid.addEventListener('click', (e) => {
    // Handle card click
    const card = e.target.closest('.job-card');
    if (card) openDrawer(card.dataset.id);
    
    // Handle empty state "Clear all filters" text link click
    if (e.target.id === 'inlineClear') resetFilters();
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

  companySelect.addEventListener('change', (e) => {
    activeCompany = e.target.value;
    renderJobs();
  });

  // Wire up clear button click
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', resetFilters);
  }

  renderJobs();
}
