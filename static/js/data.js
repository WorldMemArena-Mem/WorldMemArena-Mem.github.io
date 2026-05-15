/* ============================================================
   WorldMemArena – Data Explorer
   Domain definitions are sourced from the paper (Table tab:bench-cmp-new,
   Table tab:data-sources, Fig. pipeline) and the released benchmark stats.
   ============================================================ */

const DOMAINS = [
  {
    id: "all",
    label: "Overview",
    group: "All",
    color: "#7c5cff",
    samples: 400,
    sessions: 8489,
    images: 15595,
    qa: 24258,
    steps: 59858,
    blurb: "The full WorldMemArena benchmark: 400 multi-session multimodal tasks across Lifelong Evolution and Agentic Execution.",
    profile: { write: 92, update: 82, retrieve: 70, use: 64 },
    sub: [
      { name: "Professional Verticals", value: 18, color: "#34d399" },
      { name: "Holistic Life Course",   value: 20, color: "#22d3ee" },
      { name: "GUI Arena",              value: 125, color: "#f472b6" },
      { name: "Embodied",               value: 148, color: "#fbbf24" },
      { name: "VisualAgentBench",       value: 150, color: "#7c5cff" }
    ],
    gallery: [
      { img: "fig11.png", title: "Action–World Loop", text: "Memory is evaluated as write, maintain, retrieve, use." },
      { img: "pipline.png", title: "Data construction pipeline", text: "Sessions are segmented, memory points refined, QA checkpoints built." },
      { img: "intro.png",  title: "Evaluation gap", text: "WorldMemArena moves beyond recall-only static evaluation." }
    ]
  },
  {
    id: "verticals",
    label: "Professional Verticals",
    group: "Lifelong Evolution",
    color: "#34d399",
    samples: 18,
    sessions: 324,
    images: 1188,
    qa: 1944,
    steps: 5184,
    blurb: "Long-horizon professional-state evolution across academic, software, health, finance, education, and startup verticals.",
    profile: { write: 78, update: 88, retrieve: 74, use: 72 },
    sub: [
      { name: "Academic",  value: 3, color: "#34d399" },
      { name: "Software",  value: 3, color: "#22d3ee" },
      { name: "Health",    value: 3, color: "#f472b6" },
      { name: "Finance",   value: 3, color: "#fbbf24" },
      { name: "Education", value: 3, color: "#7c5cff" },
      { name: "Startup",   value: 3, color: "#ef4444" }
    ],
    gallery: [
      { img: "c6.png", title: "Lifelong evolution scene", text: "Personal and task states evolve across sessions." },
      { img: "c7.png", title: "Memory annotations", text: "Narrative state, images, and gold memory points aligned." },
      { img: "intro.png", title: "Recall vs. interaction", text: "Static recall fails to capture evolving evidence." }
    ]
  },
  {
    id: "lifecourse",
    label: "Holistic Life Course",
    group: "Lifelong Evolution",
    color: "#22d3ee",
    samples: 20,
    sessions: 360,
    images: 760,
    qa: 2160,
    steps: 5760,
    blurb: "HaluMem-style adversarial long-horizon dialogue with main arcs, side arcs, interference, and evolving user state.",
    profile: { write: 82, update: 92, retrieve: 70, use: 68 },
    sub: [
      { name: "Main arc",         value: 8, color: "#22d3ee" },
      { name: "Side arcs",        value: 6, color: "#7c5cff" },
      { name: "Interference",     value: 3, color: "#f472b6" },
      { name: "Update points",    value: 3, color: "#fbbf24" }
    ],
    gallery: [
      { img: "c7.png", title: "Lifelong memory scene", text: "Narrative arcs with personal interference." },
      { img: "c6.png", title: "Persona state",         text: "Identity, relationships, preferences over time." },
      { img: "RQ1.png", title: "Lifecycle collapse",    text: "Early omissions reduce later evidence availability." }
    ]
  },
  {
    id: "arena",
    label: "GUI Agent Arena",
    group: "Agentic Execution",
    color: "#f472b6",
    samples: 125,
    sessions: 1875,
    images: 4300,
    qa: 7020,
    steps: 18750,
    blurb: "Desktop & web GUI agent trajectories across spreadsheets, file management, image editing, browsing, and word processing.",
    profile: { write: 86, update: 72, retrieve: 62, use: 58 },
    sub: [
      { name: "Excel",       value: 24, color: "#34d399" },
      { name: "File mgmt",   value: 19, color: "#22d3ee" },
      { name: "Image edit",  value: 30, color: "#f472b6" },
      { name: "Web",         value: 27, color: "#fbbf24" },
      { name: "Word docs",   value: 25, color: "#7c5cff" }
    ],
    gallery: [
      { img: "c1.png", title: "Agent trajectory", text: "Visual interface for GUI execution traces." },
      { img: "c2.png", title: "Memory points",    text: "Screenshots and annotations aligned with actions." },
      { img: "c3.png", title: "Tool feedback",    text: "Environment responses drive memory updates." }
    ]
  },
  {
    id: "embodied",
    label: "Embodied Interaction",
    group: "Agentic Execution",
    color: "#fbbf24",
    samples: 148,
    sessions: 3740,
    images: 6540,
    qa: 8460,
    steps: 22600,
    blurb: "ALFRED + navigation trajectories where memory must track locations, object states, failed actions, and visual appearance.",
    profile: { write: 72, update: 64, retrieve: 55, use: 50 },
    sub: [
      { name: "ALFRED base",         value: 15, color: "#34d399" },
      { name: "Common sense",        value: 14 + 15, color: "#22d3ee" },
      { name: "Complex instruction", value: 14 + 17, color: "#f472b6" },
      { name: "Long horizon",        value: 14 + 18, color: "#fbbf24" },
      { name: "Visual appearance",   value: 12 + 13, color: "#7c5cff" },
      { name: "Nav base",            value: 16, color: "#ef4444" }
    ],
    gallery: [
      { img: "c3.png", title: "Embodied trace", text: "Visual states are part of the memory evidence." },
      { img: "c4.png", title: "Execution details", text: "Actions and feedback create reusable experience." },
      { img: "c5.png", title: "Trajectory view", text: "Long-horizon visual traces support inspection." }
    ]
  },
  {
    id: "vab",
    label: "VisualAgentBench",
    group: "Agentic Execution",
    color: "#7c5cff",
    samples: 150,
    sessions: 2190,
    images: 2807,
    qa: 4674,
    steps: 7564,
    blurb: "Visual agent tasks across CSS rendering, Minecraft open-world, mobile GUI, OmniGibson household, and WebArena-lite.",
    profile: { write: 75, update: 66, retrieve: 58, use: 54 },
    sub: [
      { name: "CSS",           value: 20, color: "#34d399" },
      { name: "Minecraft",     value: 32, color: "#22d3ee" },
      { name: "Mobile",        value: 19, color: "#f472b6" },
      { name: "OmniGibson",    value: 40, color: "#fbbf24" },
      { name: "WebArena-lite", value: 39, color: "#7c5cff" }
    ],
    gallery: [
      { img: "new.png",            title: "Scenario pressure", text: "Agentic and visual tasks create different memory failures." },
      { img: "RQ4.png",            title: "Retrieval behavior", text: "More retrieved memory is not always better evidence." },
      { img: "Figure10_acc_v2.png", title: "Cost–performance",  text: "Harness-based memory shifts cost and accuracy tradeoffs." }
    ]
  }
];

const METRIC_LABEL = {
  samples: "Samples",
  sessions: "Sessions",
  images: "Images / screenshots",
  qa: "QA checkpoint pairs"
};

const LIFECYCLE_LABELS = ["Write", "Maintain", "Retrieve", "Use"];

let activeDomainId = "all";
let activeMetric = "samples";

let mainChart, radarChart, donutChart;

/* ============================================================
   Utilities
   ============================================================ */
function fmt(n) { return n >= 1000 ? n.toLocaleString() : String(n); }
function activeDomain() { return DOMAINS.find(d => d.id === activeDomainId) || DOMAINS[0]; }
function setActive(id) { activeDomainId = id; renderAll(); }

/* ============================================================
   Chips
   ============================================================ */
function renderChips() {
  const host = document.getElementById("domainChips");
  host.innerHTML = DOMAINS.map(d => `
    <button class="chip ${d.id === activeDomainId ? "active" : ""}" data-id="${d.id}" style="${d.id === activeDomainId ? `background:${d.color}; box-shadow:0 10px 24px ${d.color}55;` : ""}">
      <span class="chip-dot" style="background:${d.color}"></span>
      ${d.label}
    </button>
  `).join("");
  host.querySelectorAll(".chip").forEach(btn => {
    btn.addEventListener("click", () => setActive(btn.dataset.id));
  });
}

/* ============================================================
   Left panel: domain summary
   ============================================================ */
function renderPanel() {
  const d = activeDomain();
  document.getElementById("domainPanel").innerHTML = `
    <div class="domain-title">
      <h2>${d.label}</h2>
      <span class="domain-pill" style="background:${d.color}">${d.group}</span>
    </div>
    <p class="domain-blurb">${d.blurb}</p>
    <div class="mini-stats">
      <div class="mini"><strong>${fmt(d.samples)}</strong><span>samples</span></div>
      <div class="mini"><strong>${fmt(d.sessions)}</strong><span>sessions</span></div>
      <div class="mini"><strong>${fmt(d.images)}</strong><span>images</span></div>
      <div class="mini"><strong>${fmt(d.qa)}</strong><span>QA pairs</span></div>
    </div>

    <div style="margin-top: 18px;">
      <div style="font-size:.78rem; letter-spacing:.14em; color: var(--muted); text-transform: uppercase; font-weight:800; margin-bottom: 10px;">Lifecycle profile</div>
      ${LIFECYCLE_LABELS.map((label, i) => {
        const key = ["write","update","retrieve","use"][i];
        const v = d.profile[key];
        return `
          <div class="profile-row">
            <span class="profile-label">${label}</span>
            <span class="profile-track"><span class="profile-fill" style="width:${v}%; background:linear-gradient(90deg, ${d.color}, ${d.color}80)"></span></span>
            <span class="profile-val">${v}</span>
          </div>
        `;
      }).join("")}
    </div>
    <p class="caption">${fmt(d.steps || 0)} interaction steps · ${fmt(d.qa)} QA/evidence items in this slice.</p>
  `;
}

/* ============================================================
   Main bar chart
   ============================================================ */
function renderMainChart() {
  const ctx = document.getElementById("mainChart").getContext("2d");
  const rows = DOMAINS.filter(d => d.id !== "all");
  const labels = rows.map(d => d.label);
  const data = rows.map(d => d[activeMetric]);
  const bg = rows.map(d => d.id === activeDomainId || activeDomainId === "all" ? d.color : d.color + "44");

  document.getElementById("chartTitle").textContent = `${METRIC_LABEL[activeMetric]} by domain`;
  document.getElementById("chartSubtitle").textContent = activeDomainId === "all"
    ? "Distribution across all benchmark domains."
    : `Highlighting: ${activeDomain().label}`;
  document.getElementById("dgroupLabel").textContent = activeDomain().group.toLowerCase();

  if (mainChart) mainChart.destroy();

  mainChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label: METRIC_LABEL[activeMetric],
        data,
        backgroundColor: bg,
        borderColor: rows.map(d => d.color),
        borderWidth: 1.5,
        borderRadius: 10,
        borderSkipped: false,
        hoverBackgroundColor: rows.map(d => d.color)
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 850, easing: "easeOutCubic" },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "rgba(10,15,36,0.95)",
          borderColor: "rgba(255,255,255,0.14)",
          borderWidth: 1,
          padding: 12,
          titleFont: { weight: "700" },
          callbacks: {
            label: (ctx) => ` ${ctx.parsed.y.toLocaleString()} ${METRIC_LABEL[activeMetric].toLowerCase()}`
          }
        }
      },
      scales: {
        x: {
          ticks: { color: "#c8cde6", font: { weight: 600 } },
          grid: { color: "rgba(255,255,255,0.04)" }
        },
        y: {
          ticks: {
            color: "#8f95b8",
            callback: (v) => v >= 1000 ? (v / 1000).toFixed(1) + "k" : v
          },
          grid: { color: "rgba(255,255,255,0.06)" }
        }
      },
      onClick: (_, items) => {
        if (!items.length) return;
        setActive(rows[items[0].index].id);
      }
    }
  });
}

/* ============================================================
   Radar chart: lifecycle profile
   ============================================================ */
function renderRadar() {
  const d = activeDomain();
  const ctx = document.getElementById("radarChart").getContext("2d");
  const values = ["write","update","retrieve","use"].map(k => d.profile[k]);

  document.getElementById("lifecycleSubtitle").textContent = `Stage-level difficulty for ${d.label}.`;

  if (radarChart) radarChart.destroy();
  radarChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: LIFECYCLE_LABELS,
      datasets: [{
        label: d.label,
        data: values,
        backgroundColor: d.color + "33",
        borderColor: d.color,
        borderWidth: 2.2,
        pointBackgroundColor: d.color,
        pointBorderColor: "#fff",
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.18
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 900, easing: "easeOutCubic" },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "rgba(10,15,36,0.95)",
          borderColor: "rgba(255,255,255,0.14)",
          borderWidth: 1
        }
      },
      scales: {
        r: {
          min: 0, max: 100,
          ticks: { color: "rgba(200,205,230,0.6)", backdropColor: "transparent", stepSize: 25, font: { size: 10 } },
          grid: { color: "rgba(255,255,255,0.08)" },
          angleLines: { color: "rgba(255,255,255,0.08)" },
          pointLabels: { color: "#e9ecf8", font: { weight: 700, size: 12 } }
        }
      }
    }
  });
}

/* ============================================================
   Donut chart: sub-domain composition
   ============================================================ */
function renderDonut() {
  const d = activeDomain();
  const ctx = document.getElementById("donutChart").getContext("2d");
  const labels = d.sub.map(s => s.name);
  const data = d.sub.map(s => s.value);
  const colors = d.sub.map(s => s.color);

  document.getElementById("subdomainSubtitle").textContent = `${d.sub.length} sub-domains · ${data.reduce((a,b)=>a+b,0).toLocaleString()} samples`;

  if (donutChart) donutChart.destroy();
  donutChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels,
      datasets: [{
        data,
        backgroundColor: colors,
        borderColor: "#0a0f24",
        borderWidth: 3,
        hoverOffset: 12
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "62%",
      animation: { animateRotate: true, duration: 900 },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "rgba(10,15,36,0.95)",
          borderColor: "rgba(255,255,255,0.14)",
          borderWidth: 1,
          callbacks: {
            label: (ctx) => ` ${ctx.label}: ${ctx.parsed} samples`
          }
        }
      }
    }
  });

  const total = data.reduce((a,b) => a+b, 0);
  document.getElementById("donutLegend").innerHTML = d.sub.map(s => `
    <div class="legend-item">
      <span class="left"><span class="legend-dot" style="background:${s.color}"></span>${s.name}</span>
      <span class="val">${s.value} · ${((s.value/total)*100).toFixed(0)}%</span>
    </div>
  `).join("");
}

/* ============================================================
   Capability KPI cells
   ============================================================ */
function renderCells() {
  const d = activeDomain();
  const labels = [
    ["write", "Write pressure", "selective retention"],
    ["update", "Maintain pressure", "revision &amp; consolidation"],
    ["retrieve", "Retrieve pressure", "decision relevance"],
    ["use", "Use pressure", "faithful application"]
  ];
  document.getElementById("capabilityCells").innerHTML = labels.map(([k, label, meta]) => `
    <div class="cell" style="background:linear-gradient(135deg, ${d.color}, ${d.color}55 70%, rgba(10,15,36,0.85))">
      <span>${label}</span>
      <b>${d.profile[k]}<span style="font-size:0.9rem; opacity:.75; font-family:'JetBrains Mono',monospace;">/100</span></b>
      <span class="meta">${meta}</span>
    </div>
  `).join("");
}

/* ============================================================
   Visual gallery
   ============================================================ */
function renderGallery() {
  const d = activeDomain();
  document.getElementById("visualGallery").innerHTML = d.gallery.map(item => `
    <article class="viz-card">
      <div class="thumb"><img src="static/images/paper/${item.img}" alt="${item.title}" /></div>
      <div class="body">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    </article>
  `).join("");
}

/* ============================================================
   Cross-domain heatmap
   ============================================================ */
function renderHeatmap() {
  const stages = ["write", "update", "retrieve", "use"];
  const stageLabels = LIFECYCLE_LABELS;
  const rows = DOMAINS.filter(d => d.id !== "all");
  const host = document.getElementById("heatmap");

  let html = `<div class="heat-head"></div>`;
  stageLabels.forEach(l => html += `<div class="heat-head" style="text-align:center;">${l}</div>`);

  rows.forEach(d => {
    html += `<div class="heat-row-label">${d.label}</div>`;
    stages.forEach(s => {
      const v = d.profile[s];
      const alpha = 0.18 + (v / 100) * 0.78;
      html += `<div class="heat-cell" style="background: ${d.color}${Math.round(alpha*255).toString(16).padStart(2,'0')}" title="${d.label} · ${s}: ${v}">${v}</div>`;
    });
  });

  host.innerHTML = html;
}

/* ============================================================
   Metric toggle
   ============================================================ */
(function bindMetricToggle() {
  const toggle = document.getElementById("metricToggle");
  if (!toggle) return;
  toggle.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    activeMetric = btn.dataset.metric;
    toggle.querySelectorAll("button").forEach(b => b.classList.toggle("active", b === btn));
    renderMainChart();
  });
})();

/* ============================================================
   Render all
   ============================================================ */
function renderAll() {
  renderChips();
  renderPanel();
  renderMainChart();
  renderRadar();
  renderDonut();
  renderCells();
  renderGallery();
}

renderHeatmap();
renderAll();
