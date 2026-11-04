/* ============================================================
 * CONFIG: edit these values. Anything in [BRACKETS] is a placeholder.
 * ============================================================ */
const CONFIG = {
  name: "Dominik Wędzina",
  startDate: "2027-04-19T07:00:00+02:00",      // day 1 start in Melito di Porto Salvo (Italian time)
  days: 35,
  email: "dominik.wedzina@onet.pl",
  phone: null,                                 // null hides the row in Contact
  whatsapp: null,                              // null hides the row in Contact
  foundationUrl: "https://twarzedepresji.pl",
  hashtag: "#Italy35Challenge",
  social: {
    instagram: "https://www.instagram.com/dominik.wedzina/",
    strava: "https://strava.app.link/zRdxLFsIr7b",
    facebook: null                               // null hides the link
  },
  gpxPath: "gpx/route.gpx",
  aboutVideo: {
    // vertical 9:16, captions burned in; one file per page language, missing languages use "default"; null shows the "coming soon" placeholder
    src: { pl: "video/about.mp4", it: "video/about-it.mp4", default: "video/about.mp4" },
    poster: "video/about-poster.jpg",
    subtitles: {}                              // optional .vtt per language, e.g. { en: "video/about-en.vtt" }; empty while captions are burned in
  }
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
  // Optional contact rows / social links disappear when their CONFIG value is null
  document.querySelectorAll("[data-config-if]").forEach((el) => { el.hidden = !getPath(CONFIG, el.dataset.configIf); });
  $("#year").textContent = new Date().getFullYear();
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
    $("#cd-secs").textContent = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
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

/* ---------- About video ---------- */
function initAboutVideo() {
  const { src, poster, subtitles } = CONFIG.aboutVideo;
  if (!src) return;  // keep the "coming soon" placeholder
  const video = $(".about-video video");
  video.src = videoSrcFor(I18N.lang);
  if (poster) video.poster = poster;
  const labels = { pl: "Polski", en: "English", it: "Italiano" };
  Object.entries(subtitles || {}).forEach(([lang, file]) => {
    const track = document.createElement("track");
    Object.assign(track, { kind: "subtitles", srclang: lang, label: labels[lang] || lang, src: file });
    video.appendChild(track);
  });
  video.hidden = false;
  $(".about-video .video-soon").hidden = true;
  // Big play button over the poster; native controls take over once it plays
  const play = $(".about-video .video-play");
  play.hidden = false;
  play.addEventListener("click", () => video.play());
  video.addEventListener("play", () => { play.hidden = true; });
  video.addEventListener("ended", () => { play.hidden = false; });
  showSubtitles();
}

function videoSrcFor(lang) {
  const { src } = CONFIG.aboutVideo;
  return typeof src === "string" ? src : (src[lang] || src.default);
}

/* Switching language swaps the video file, keeping the position and play state */
function swapVideoForLang() {
  if (!CONFIG.aboutVideo.src) return;
  const video = $(".about-video video");
  const next = videoSrcFor(I18N.lang);
  if (video.getAttribute("src") === next) return;
  const time = video.currentTime, playing = !video.paused && !video.ended;
  video.src = next;
  if (time > 0) video.addEventListener("loadedmetadata", () => { video.currentTime = time; }, { once: true });
  if (playing) video.play().catch(() => {});
}

/* Subtitles follow the page language */
function showSubtitles() {
  const video = $(".about-video video");
  Array.from(video.textTracks).forEach((t) => { t.mode = t.language === I18N.lang ? "showing" : "disabled"; });
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

  /* Collapse to the hamburger whenever the full menu doesn't fit on one line (PL/IT labels are longer than EN). */
  const header = $(".site-header");
  const inner = $(".header-inner");
  const actions = $(".header-actions");
  const fit = () => {
    header.classList.add("is-measuring");
    header.classList.remove("is-compact");
    const edge = inner.getBoundingClientRect().right - parseFloat(getComputedStyle(inner).paddingRight);
    const compact = actions.getBoundingClientRect().right > edge + 0.5;
    header.classList.toggle("is-compact", compact);
    if (!compact) setOpen(false);
    void header.offsetWidth;  // apply the final state before transitions come back
    header.classList.remove("is-measuring");
  };
  let frame = 0;
  window.addEventListener("resize", () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(fit); });
  document.addEventListener("langchange", fit);
  window.addEventListener("load", fit);
  if (document.fonts) document.fonts.addEventListener("loadingdone", fit);  // web fonts are wider than the fallback
  fit();
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

/* Copy buttons next to email / phone / WhatsApp */
function initCopyButtons() {
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = String(getPath(CONFIG, btn.dataset.copy) || "");
      const done = () => {
        btn.textContent = I18N.t("contact.copied");
        setTimeout(() => { btn.textContent = I18N.t("contact.copy"); }, 1500);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(value).then(done, () => {});
    });
  });
}

/* Contact form: Netlify Forms (data-netlify + honeypot), sent with fetch so the visitor stays on the page */
function initContactForm() {
  const form = $("#contact-form");
  if (!form) return;
  const status = $("#cf-status");
  const button = form.querySelector('button[type="submit"]');
  const show = (key, ok) => {
    status.textContent = I18N.t(key);
    status.classList.toggle("is-error", !ok);
    status.classList.toggle("is-ok", !!ok);
    status.hidden = false;
  };
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      show("contact.form.invalid", false);
      const bad = form.querySelector(":invalid");
      if (bad) bad.focus();
      return;
    }
    // Readable subject and page language in the notification email
    const who = $("#cf-name").value.trim();
    const what = $("#cf-help").value;
    $("#cf-subject").value = `ITALY35: ${who} – ${what}`;
    $("#cf-lang").value = I18N.lang.toUpperCase();
    button.disabled = true;
    show("contact.form.sending", true);
    const body = new URLSearchParams(new FormData(form)).toString();
    fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body })
      .then((r) => {
        if (!r.ok) throw new Error(r.status);
        form.reset();
        show("contact.form.success", true);
      })
      .catch(() => show("contact.form.error", false))
      .finally(() => { button.disabled = false; });
  });
}

/* ---------- boot ---------- */
document.addEventListener("langchange", () => {
  renderCountdown();
  swapVideoForLang();
  showSubtitles();
  if (RouteMap.stages.length) {
    RouteMap.renderList();
    RouteMap.renderLabels();
    $("#stat-total").textContent = fmt(Math.round(RouteMap.stages.reduce((s, x) => s + x.km, 0)));
  }
});

applyConfig();
initAboutVideo();
I18N.init();
initNav();
initReveal();
initCopyButtons();
initContactForm();
RouteMap.init();
$("#show-all").addEventListener("click", () => RouteMap.showAll());
setInterval(renderCountdown, 1000);
