/* ============================================================
 * CONFIG: edit these values. Anything in [BRACKETS] is a placeholder.
 * ============================================================ */
const CONFIG = {
  name: "[YOUR NAME]",
  startDate: "2027-05-01T07:00:00+02:00",      // PLACEHOLDER: day 1 start, with Italian timezone
  days: 35,
  email: "your@email.com",                     // PLACEHOLDER
  donateUrl: "https://example.com/donate",     // PLACEHOLDER: your fundraiser link (e.g. zrzutka.pl / siepomaga.pl)
  foundationUrl: "https://twarzedepresji.org", // check this is the foundation's current website
  goalPln: 35000,                              // set to null to hide the progress bar
  raisedPln: 0,                                // update as donations come in
  kmPricePln: 10,                              // "sponsor 1 km" amount
  hashtag: "#35DaysAcrossItaly",
  social: {
    instagram: "https://instagram.com/",       // PLACEHOLDER
    strava: "https://www.strava.com/",         // PLACEHOLDER
    facebook: "https://facebook.com/"          // PLACEHOLDER
  },
  gpxPath: "gpx/route.gpx"
};

const COLORS = { a: "#d6263b", b: "#009246", ink: "#20252b" };

/* ---------- helpers ---------- */
const $ = (sel) => document.querySelector(sel);
const getPath = (obj, path) => path.split(".").reduce((o, k) => (o ? o[k] : undefined), obj);
const fmt = (n, digits = 0) =>
  new Intl.NumberFormat(I18N.lang, { maximumFractionDigits: digits, minimumFractionDigits: digits }).format(n);

/* ---------- config → page ---------- */
function applyConfig() {
  document.querySelectorAll("[data-config]").forEach((el) => {
    const value = getPath(CONFIG, el.dataset.config);
    if (value != null) el.textContent = value;
  });
  document.querySelectorAll("[data-config-href]").forEach((el) => {
    const value = getPath(CONFIG, el.dataset.configHref);
    if (value) el.href = value;
  });
  $("#contact-email-link").href = `mailto:${CONFIG.email}`;
  $("#year").textContent = new Date().getFullYear();
}

function renderDonate() {
  $('[data-tier="km"]').textContent = fmt(CONFIG.kmPricePln);
  $('[data-tier="marathon"]').textContent = fmt(Math.round(CONFIG.kmPricePln * 42.195));

  if (!CONFIG.goalPln) return;
  $("#progress").hidden = false;
  $("#raised").textContent = fmt(CONFIG.raisedPln || 0);
  $("#goal").textContent = fmt(CONFIG.goalPln);
  const pct = Math.min(100, ((CONFIG.raisedPln || 0) / CONFIG.goalPln) * 100);
  requestAnimationFrame(() => { $("#progress-fill").style.width = `${pct}%`; });
}

/* ---------- countdown ---------- */
function renderCountdown() {
  const start = new Date(CONFIG.startDate).getTime();
  const now = Date.now();
  const dayMs = 86400000;
  const units = $("#countdown-units");
  const status = $("#countdown-status");
  const label = $("#countdown-label");

  if (now < start) {
    const diff = start - now;
    $("#cd-days").textContent = Math.floor(diff / dayMs);
    $("#cd-hours").textContent = String(Math.floor((diff % dayMs) / 3600000)).padStart(2, "0");
    $("#cd-mins").textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
    label.textContent = I18N.t("countdown.before");
    units.hidden = false;
    status.hidden = true;
    return;
  }
  const day = Math.floor((now - start) / dayMs) + 1;
  units.hidden = true;
  status.hidden = false;
  if (day <= CONFIG.days) {
    label.textContent = I18N.t("countdown.live");
    status.textContent = I18N.t("countdown.during", { day });
  } else {
    label.textContent = CONFIG.hashtag;
    status.textContent = I18N.t("countdown.after");
  }
}

/* ---------- GPX ---------- */
function haversineKm([lat1, lon1], [lat2, lon2]) {
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
}

function readPoints(parent, tag) {
  return Array.from(parent.getElementsByTagName(tag)).map((p) => [
    parseFloat(p.getAttribute("lat")),
    parseFloat(p.getAttribute("lon"))
  ]);
}

/* Each <trk> is one day. A file with a single <trk> but several <trkseg> uses the segments as days.
 * A single continuous track is shown as one stage. */
function parseGpx(text) {
  const doc = new DOMParser().parseFromString(text, "application/xml");
  if (doc.getElementsByTagName("parsererror").length) throw new Error("Invalid GPX");

  const tracks = Array.from(doc.getElementsByTagName("trk"));
  let groups;
  if (tracks.length > 1) {
    groups = tracks.map((trk) => ({ name: trk.getElementsByTagName("name")[0]?.textContent, el: trk, tag: "trkpt" }));
  } else if (tracks.length === 1 && tracks[0].getElementsByTagName("trkseg").length > 1) {
    groups = Array.from(tracks[0].getElementsByTagName("trkseg")).map((seg) => ({ name: null, el: seg, tag: "trkpt" }));
  } else if (tracks.length === 1) {
    groups = [{ name: tracks[0].getElementsByTagName("name")[0]?.textContent, el: tracks[0], tag: "trkpt" }];
  } else {
    groups = [{ name: null, el: doc, tag: "rtept" }];  // route-only GPX
  }

  return groups
    .map((g) => {
      const points = readPoints(g.el, g.tag).filter(([a, b]) => !isNaN(a) && !isNaN(b));
      let km = 0;
      for (let i = 1; i < points.length; i++) km += haversineKm(points[i - 1], points[i]);
      // "Day 3: Ivrea – Vercelli" → "Ivrea – Vercelli"
      const place = (g.name || "").replace(/^\s*(day|dzie[nń]|giorno)\s*\d+\s*[:\-–]?\s*/i, "").trim();
      return { points, km, place };
    })
    .filter((s) => s.points.length > 1);
}

/* ---------- map ---------- */
const RouteMap = {
  map: null,
  stages: [],
  lines: [],
  active: null,

  init() {
    this.map = L.map("map", { scrollWheelZoom: false, zoomControl: true }).setView([42.5, 12.5], 6);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    // Only capture the scroll wheel once the user has interacted with the map
    this.map.on("click focus", () => this.map.scrollWheelZoom.enable());
    this.map.getContainer().addEventListener("mouseleave", () => this.map.scrollWheelZoom.disable());

    fetch(CONFIG.gpxPath)
      .then((r) => { if (!r.ok) throw new Error(r.status); return r.text(); })
      .then((text) => this.draw(parseGpx(text)))
      .catch((err) => {
        console.error("GPX load failed:", err);
        this.map.getContainer().innerHTML = `<div class="map-error" data-i18n="route.error">${I18N.t("route.error")}</div>`;
      });
  },

  draw(stages) {
    if (!stages.length) throw new Error("GPX contains no track points");
    this.stages = stages;

    this.lines = stages.map((s, i) => {
      const line = L.polyline(s.points, { color: i % 2 ? COLORS.b : COLORS.a, weight: 5, opacity: 0.9, lineJoin: "round" })
        .addTo(this.map)
        .on("click", () => this.select(i))
        .on("mouseover", () => line.setStyle({ weight: 8 }))
        .on("mouseout", () => line.setStyle({ weight: this.active === i ? 8 : 5 }));
      return line;
    });

    const pin = (cls) => L.divIcon({ className: "", html: `<div class="marker-pin ${cls}"></div>`, iconSize: [18, 18], iconAnchor: [9, 9] });
    const first = stages[0].points[0];
    const last = stages[stages.length - 1].points.at(-1);
    this.startMarker = L.marker(first, { icon: pin("marker-start"), keyboard: false }).addTo(this.map);
    this.finishMarker = L.marker(last, { icon: pin("marker-finish"), keyboard: false }).addTo(this.map);

    this.showAll();
    this.renderList();
    this.renderLabels();

    const total = stages.reduce((sum, s) => sum + s.km, 0);
    $("#stat-total").textContent = fmt(Math.round(total));
  },

  bounds() {
    return L.latLngBounds(this.stages.flatMap((s) => s.points));
  },

  showAll() {
    this.active = null;
    this.lines.forEach((l) => l.setStyle({ opacity: 0.9, weight: 5 }));
    this.map.closePopup();
    this.map.fitBounds(this.bounds(), { padding: [24, 24] });
    document.querySelectorAll("#stage-list button").forEach((b) => b.classList.remove("active"));
  },

  stageLabel(i) {
    const s = this.stages[i];
    return { day: I18N.t("route.day", { day: i + 1 }), place: s.place, km: `${fmt(s.km, 1)} km` };
  },

  select(i) {
    this.active = i;
    this.lines.forEach((l, j) => l.setStyle(j === i ? { opacity: 1, weight: 8 } : { opacity: 0.3, weight: 4 }));
    this.lines[i].bringToFront();
    this.map.fitBounds(this.lines[i].getBounds(), { padding: [40, 40], maxZoom: 12 });

    const { day, place, km } = this.stageLabel(i);
    const mid = this.stages[i].points[Math.floor(this.stages[i].points.length / 2)];
    L.popup().setLatLng(mid).setContent(`<b>${day}</b>${place ? ` · ${escapeHtml(place)}` : ""}<br>${km}`).openOn(this.map);

    document.querySelectorAll("#stage-list button").forEach((b, j) => {
      b.classList.toggle("active", j === i);
      if (j === i) b.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  },

  renderList() {
    const list = $("#stage-list");
    list.innerHTML = "";
    this.stages.forEach((_, i) => {
      const { place, km } = this.stageLabel(i);
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.innerHTML = `<span class="stage-day">${String(i + 1).padStart(2, "0")}</span>
        <span class="stage-name"></span><span class="stage-km"></span>`;
      btn.querySelector(".stage-name").textContent = place || I18N.t("route.day", { day: i + 1 });
      btn.querySelector(".stage-km").textContent = km;
      btn.setAttribute("aria-label", `${I18N.t("route.day", { day: i + 1 })}${place ? `, ${place}` : ""}, ${km}`);
      if (i === this.active) btn.classList.add("active");
      btn.addEventListener("click", () => this.select(i));
      li.appendChild(btn);
      list.appendChild(li);
    });
  },

  renderLabels() {
    if (!this.startMarker) return;
    this.startMarker.bindTooltip(I18N.t("route.start"), { direction: "top", offset: [0, -10] });
    this.finishMarker.bindTooltip(I18N.t("route.finish"), { direction: "top", offset: [0, -10] });
  }
};

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* ---------- UI bits ---------- */
function initNav() {
  const toggle = $(".nav-toggle");
  const nav = $("#main-nav");
  const setOpen = (open) => {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };
  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("open")));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.2 });
  items.forEach((el, i) => { el.style.transitionDelay = `${i * 90}ms`; io.observe(el); });
}

function initContactForm() {
  $("#contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const subject = I18N.t("contact.subject", { name: data.get("name") });
    const body = `${data.get("message")}\n\n${data.get("name")} <${data.get("email")}>`;
    location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

/* ---------- boot ---------- */
document.addEventListener("langchange", () => {
  renderCountdown();
  renderDonate();
  if (RouteMap.stages.length) {
    RouteMap.renderList();
    RouteMap.renderLabels();
    $("#stat-total").textContent = fmt(Math.round(RouteMap.stages.reduce((s, x) => s + x.km, 0)));
  }
});

applyConfig();
I18N.init();
initNav();
initReveal();
initContactForm();
RouteMap.init();
$("#show-all").addEventListener("click", () => RouteMap.showAll());
setInterval(renderCountdown, 30000);
