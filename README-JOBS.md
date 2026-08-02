# Managing Job Listings — CBTW Careers Site

This is the guide for anyone adding, editing, or removing job postings on the
careers site — no coding background required, just careful copy-pasting.

Everything about a job lives in **one file**: `jobs-data.js`. You never need
to touch HTML, CSS, or any of the other JavaScript files to add, edit, or
remove a role.

---

## 1. Adding a new job opening

Open `jobs-data.js`. It's a single array called `JOBS`, where each job is one
`{ ... }` object. To add a role, copy an existing object, paste it as a new
entry in the array, and fill in your own details.

### The schema

```js
{
  id: "role-team-01",              // required — see the ID rule below
  title: "Senior Data Engineer",    // required
  company: "Pepperstone — Trading Platform",  // required
  companyUrl: "https://pepperstone.com/en-au/about-us/who-we-are/", // optional, "" if none
  department: "Engineering",        // required — must match a filter chip (see note below)
  location: "HCMC",                 // required
  type: "Full-time",                // required
  blurb: "One sentence describing the role.",  // required
  responsibilities: [                // required 
    "First responsibility",
    "Second responsibility"
  ],
  qualifications: [ ... ],           // required 
  successMetrics: [ ... ],           // OPTIONAL
  whyUs: [ ... ],                    // OPTIONAL
}
```

**`department` must be one of:** `Engineering`, `Data`, `Salesforce`,
`Product`, `QA`, `Operations`. These match the filter chips in the Open Roles
section. If you introduce a new department, you'll also need to add a
matching `<button class="chip" data-dept="YourDept">` in `index.html`'s jobs
toolbar — otherwise the job will still show up in "All" and search, just not
under its own filter chip.

### The ID rule

IDs follow this pattern:

```
[role-slug]-[team-code]-[sequence]
```

- **role-slug** — lowercase, hyphen-separated, short (`data-engineer`,
  `salesforce`, `product-owner`)
- **team-code** — which partner team the role sits on:

  | Code      | Team               |
  |-----------|--------------------|
  | `cbtw`    | CBTW               |
  | `iftg`    | InfoTrack Global   |
  | `iftau`   | InfoTrack AU       |  
  | `mm`      | MessageMedia       |
  | `cs`      | ClickSend          |
  | `cw`      | CreditorWatch      |  
  | `ps`      | Pepperstone        |
  | `hp`      | hipages            |


  Add a new code here (and in the comment at the top of `jobs-data.js`) the
  first time you post a role for a new partner team.

- **sequence** — `01`, `02`, etc. Almost always `01` — only bump it if the
  same team hires for the *same role slug* twice at once (e.g. two Salesforce
  Engineer openings on Pepperstone at the same time would be
  `salesforce-ps-01` and `salesforce-ps-02`).

**Examples:** `nodejs-cs-01`, `salesforce-ps-01`, `product-manager-cbtw-01`

**⚠️ Once an id has been shared as a deep link (e.g. posted on LinkedIn or
emailed to a candidate), never reuse it for a different role and never
renumber it.** The id *is* the link — changing it breaks every copy of that
link that's already out in the world. If a role is filled or pulled, delete
its entry (see below) rather than repurposing its id for something else.

### Short-form vs. full JD

`qualifications`, `successMetrics`, and `whyUs` are optional. Leave them out
entirely for a quick short-form posting (just `blurb` + `responsibilities` —
see any of the Pepperstone roles for an example). Include all three for a
full job description with every section (see the ClickSend "BE (NodeJS /
TypeScript) Engineer" entry — that's the reference example for a complete
JD). The drawer automatically renders only the sections a job actually has;
you don't need to add empty arrays as placeholders.

---

## 2. Deleting or closing a job

Delete the whole `{ ... }` object for that job from the `JOBS` array in
`jobs-data.js`. That's it — nothing else to clean up.

**What happens to old links to that job?** Nothing breaks. If someone has a
saved or shared link like `yoursite.com/#job=nodejs-cs-01` and that id no
longer exists in `JOBS`, the site checks the incoming link on load, doesn't
find a match, and simply shows the normal homepage — no error, no blank
drawer, no broken page. This is handled in `drawer.js`:

```js
const initialId = parseJobIdFromHash();
if (initialId && JOBS.some(j => j.id === initialId)) {
  openDrawer(initialId, { pushHistory: false });
}
```

The `JOBS.some(...)` check is what makes deleted-job links fail gracefully —
if you ever touch this code, keep that guard in place.

---

## 3. Testing locally

The site uses real ES modules (`<script type="module">` in `index.html`),
which browsers refuse to load over a plain `file://` URL — you need a local
server. From the project folder:

```bash
python3 -m http.server 8000
```

(No Python? `npx serve` works the same way if you have Node installed.)

Then open **http://localhost:8000** — not `file:///...`.

### Testing deep links

1. Open a job's drawer and check the address bar — it should update to
   something like `#job=nodejs-cs-01` with no page jump or scroll.
2. Copy that full URL, open a new tab, and paste it in. The site should load
   with that job's drawer already open.
3. Try an id that doesn't exist, e.g. `http://localhost:8000#job=not-a-real-job`
   — the page should load completely normally with no drawer open and no
   console errors.
4. Open a job, close it, then click the browser's **Back** button — the URL
   hash and the drawer should stay in sync with browser history.

### Testing the Copy Link button

1. Open any job's drawer.
2. Click the small link icon next to the job title. It should briefly swap
   to a green checkmark with a "Copied!" tooltip, then revert after ~2
   seconds.
3. Paste (Cmd/Ctrl+V) into the address bar or a text editor — you should get
   the exact current page URL, including that job's `#job=...` hash.

If the browser blocks clipboard access (some browsers require HTTPS or a
direct user click — a local `http://localhost` server is fine, but opening
the file via `file://` is not), the button fails silently rather than
throwing an error. If copy genuinely isn't working while testing, check the
browser console for a rejected clipboard permission first before assuming
it's a code bug.

---

## Quick reference: where things live

| File | What it's for |
|---|---|
| `jobs-data.js` | **You'll edit this one.** Every job posting. |
| `perks-data.js` | Culture & Benefits grid content. |
| `process-data.js` | The 4-step "Hiring Process" section. |
| `js/jobs.js` | Renders job cards, search, and department filter. |
| `js/drawer.js` | The job-detail slide-over panel, deep linking, and Copy Link. |
| `js/quick-apply.js` | The "general application" modal (for candidates who don't see their role). |
| `js/theme.js` | Dark/light mode. |
| `js/carousel.js` | The team-photo carousel. |
| `style.css` | All visual styling — organized by section with comment headers. |
| `index.html` | Page structure. Content sections (jobs, perks, hiring steps) are empty containers filled by JS — edit the data files above, not this file, for content changes. |
