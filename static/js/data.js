const domains = [
  {
    id: "all",
    label: "All",
    color: "#2457c5",
    samples: 400,
    interaction: 100,
    visual: 100,
    qa: 24258,
    sessions: 8489,
    images: 15595,
    blurb: "The full WorldMemArena benchmark: lifelong evolution plus realistic agent execution trajectories.",
    profile: { write: 100, update: 100, retrieve: 100, use: 100 },
    gallery: ["fig11.png", "pipline.png", "new.png"]
  },
  {
    id: "lifelong-a",
    label: "Professional Verticals",
    color: "#14a06f",
    samples: 18,
    interaction: 48,
    visual: 74,
    qa: 1944,
    sessions: 324,
    images: 1188,
    blurb: "Long-horizon project and professional-state evolution across academic, software, health, finance, education, and startup settings.",
    profile: { write: 78, update: 86, retrieve: 74, use: 72 },
    gallery: ["c6.png", "c7.png", "intro.png"]
  },
  {
    id: "lifelong-b",
    label: "Holistic Life Course",
    color: "#bd3d6a",
    samples: 20,
    interaction: 54,
    visual: 42,
    qa: 2160,
    sessions: 360,
    images: 760,
    blurb: "Personal long-term memory with main arcs, side arcs, interference, and evolving user state.",
    profile: { write: 82, update: 90, retrieve: 68, use: 70 },
    gallery: ["c6.png", "c7.png", "RQ1.png"]
  },
  {
    id: "arena",
    label: "GUI Agent Arena",
    color: "#00a6b2",
    samples: 125,
    interaction: 82,
    visual: 88,
    qa: 7020,
    sessions: 1875,
    images: 4300,
    blurb: "Desktop and web agent trajectories spanning spreadsheets, files, image editing, browsing, and word-processing tasks.",
    profile: { write: 86, update: 72, retrieve: 62, use: 58 },
    gallery: ["c1.png", "c2.png", "c3.png"]
  },
  {
    id: "embodied",
    label: "Embodied Interaction",
    color: "#d58b16",
    samples: 148,
    interaction: 96,
    visual: 91,
    qa: 8460,
    sessions: 3740,
    images: 6540,
    blurb: "ALFRED and navigation trajectories where memory must track locations, object states, failed actions, and visual appearance.",
    profile: { write: 72, update: 64, retrieve: 55, use: 50 },
    gallery: ["c3.png", "c4.png", "c5.png"]
  },
  {
    id: "vab",
    label: "VisualAgentBench",
    color: "#7146d5",
    samples: 150,
    interaction: 86,
    visual: 78,
    qa: 4674,
    sessions: 2190,
    images: 2807,
    blurb: "Visual agent tasks from CSS, Minecraft, mobile, OmniGibson, and WebArena-lite settings.",
    profile: { write: 75, update: 66, retrieve: 58, use: 54 },
    gallery: ["new.png", "RQ4.png", "Figure10_acc_v2.png"]
  }
];

const galleryText = {
  "fig11.png": ["Action-world loop", "Memory is evaluated as writing, maintenance, retrieval, and use."],
  "pipline.png": ["Construction pipeline", "Sessions are segmented, memory points are refined, and QA checkpoints are built."],
  "new.png": ["Scenario pressure", "Agentic and visual tasks expose different memory failures."],
  "intro.png": ["Evaluation gap", "WorldMemArena moves beyond recall-only static evaluation."],
  "RQ1.png": ["Lifecycle collapse", "Early omissions and retrieval failures compound over long horizons."],
  "RQ4.png": ["Retrieval behavior", "More retrieved memory is not always better evidence."],
  "Figure10_acc_v2.png": ["Cost-performance", "Harness-based memory shifts cost and accuracy tradeoffs."],
  "c1.png": ["Agent trace", "Visual interface for agent execution trajectories."],
  "c2.png": ["Agent memory points", "Screenshots and memory annotations aligned with actions."],
  "c3.png": ["Embodied traces", "Visual states are part of the memory evidence."],
  "c4.png": ["Execution details", "Actions and feedback create reusable experience."],
  "c5.png": ["Trajectory view", "Long-horizon visual traces support inspection."],
  "c6.png": ["Lifelong evolution", "Personal and task states evolve across sessions."],
  "c7.png": ["Lifelong memory", "Narrative state, images, and gold memory points are aligned."]
};

let activeDomain = "all";
let activeMetric = "samples";

function fmt(value) {
  return value >= 1000 ? value.toLocaleString() : String(value);
}

function selectedDomain() {
  return domains.find((domain) => domain.id === activeDomain) || domains[0];
}

function metricLabel(metric) {
  return ({ samples: "Source samples", interaction: "Interaction pressure", visual: "Visual evidence pressure" })[metric];
}

function renderChips() {
  const el = document.getElementById("domainChips");
  el.innerHTML = domains.map((domain) => `
    <button class="chip ${domain.id === activeDomain ? "active" : ""}" data-domain="${domain.id}" style="${domain.id === activeDomain ? `background:${domain.color};border-color:${domain.color}` : ""}">
      ${domain.label}
    </button>
  `).join("");
  el.querySelectorAll(".chip").forEach((button) => {
    button.addEventListener("click", () => {
      activeDomain = button.dataset.domain;
      render();
    });
  });
}

function renderPanel() {
  const domain = selectedDomain();
  document.getElementById("domainPanel").innerHTML = `
    <div class="domain-title">
      <h2>${domain.label}</h2>
      <span class="domain-pill" style="background:${domain.color}">${domain.id === "all" ? "Overview" : "Domain"}</span>
    </div>
    <p class="domain-blurb">${domain.blurb}</p>
    <div class="mini-stats">
      <div class="mini"><strong>${fmt(domain.samples)}</strong><span>samples</span></div>
      <div class="mini"><strong>${fmt(domain.sessions)}</strong><span>sessions</span></div>
      <div class="mini"><strong>${fmt(domain.interaction)}</strong><span>interaction pressure</span></div>
      <div class="mini"><strong>${fmt(domain.images)}</strong><span>images</span></div>
    </div>
    <p class="caption">${fmt(domain.qa)} QA/evidence items are represented in this slice. Pressure scores are normalized visualizations for comparing domain demands.</p>
  `;
}

function renderBars() {
  const chart = document.getElementById("chart");
  const rows = domains.filter((domain) => domain.id !== "all");
  const maxValue = Math.max(...rows.map((domain) => domain[activeMetric]));
  document.getElementById("chartTitle").textContent = `${metricLabel(activeMetric)} by domain`;
  document.getElementById("chartSubtitle").textContent = activeDomain === "all"
    ? "Distribution across all benchmark domains."
    : `Selected: ${selectedDomain().label}`;
  chart.innerHTML = `
    <div class="bars">
      ${rows.map((domain) => {
        const width = Math.max(4, (domain[activeMetric] / maxValue) * 100);
        const faded = activeDomain !== "all" && activeDomain !== domain.id ? "opacity:.34" : "";
        return `
          <div class="bar-row" style="${faded}">
            <div class="bar-label">${domain.label}</div>
            <div class="bar-track">
              <div class="bar-fill" style="width:${width}%;background:linear-gradient(90deg,${domain.color},${domain.color}bb)"></div>
            </div>
            <div class="bar-value">${fmt(domain[activeMetric])}</div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderMatrix() {
  const domain = selectedDomain();
  const labels = [
    ["write", "Write"],
    ["update", "Update"],
    ["retrieve", "Retrieve"],
    ["use", "Use"]
  ];
  document.getElementById("capabilityMatrix").innerHTML = labels.map(([key, label]) => {
    const value = domain.profile[key];
    return `
      <div class="cell" style="background:linear-gradient(135deg,${domain.color},#07111f)">
        <span>${label} pressure</span>
        <b>${value}</b>
      </div>
    `;
  }).join("");
}

function renderGallery() {
  const domain = selectedDomain();
  document.getElementById("visualGallery").innerHTML = domain.gallery.map((file) => {
    const [title, text] = galleryText[file] || ["WorldMemArena asset", "Representative benchmark visualization."];
    return `
      <article class="viz-card">
        <img src="static/images/paper/${file}" alt="${title}">
        <div>
          <h3>${title}</h3>
          <p>${text}</p>
        </div>
      </article>
    `;
  }).join("");
}

function attachMetricToggle() {
  document.querySelectorAll(".metric-toggle button").forEach((button) => {
    button.addEventListener("click", () => {
      activeMetric = button.dataset.metric;
      document.querySelectorAll(".metric-toggle button").forEach((item) => item.classList.toggle("active", item === button));
      renderBars();
    });
  });
}

function render() {
  renderChips();
  renderPanel();
  renderBars();
  renderMatrix();
  renderGallery();
}

attachMetricToggle();
render();
