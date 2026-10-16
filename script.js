/* ============================================================
   MDZ Bot — site config
   API_BASE = URL publique de l'API du bot (aiohttp) pour la connexion.
   En local : http://localhost:8080
   En ligne : l'URL de votre hébergement (ex: https://mdz-bot.onrender.com)
   ============================================================ */
const API_BASE = "http://localhost:8790";
const SITE_URL = "https://mathis363.github.io/MDZ-bot/";

document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Preloader ---------- */
window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("preloader").classList.add("done"), 700);
});

/* ---------- Scroll progress + nav ---------- */
const nav = document.getElementById("nav");
const progress = document.getElementById("scrollProgress");
const onScroll = () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 20);
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${h > 0 ? (window.scrollY / h) * 100 : 0}%`;
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* ---------- Mobile menu ---------- */
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    burger.classList.remove("open");
    navLinks.classList.remove("open");
  })
);

/* ---------- Reveal on scroll ---------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14, rootMargin: "0px 0px -50px 0px" }
);
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 3) * 80}ms`;
  revealObserver.observe(el);
});

/* ---------- Count-up stats ---------- */
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || "";
    const dur = 1400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    countObserver.unobserve(el);
  });
}, { threshold: 0.6 });
document.querySelectorAll("[data-count]").forEach((el) => countObserver.observe(el));

/* ---------- Spotlight on cells ---------- */
document.querySelectorAll(".cell").forEach((cell) => {
  cell.addEventListener("pointermove", (e) => {
    const r = cell.getBoundingClientRect();
    cell.style.setProperty("--mx", `${e.clientX - r.left}px`);
    cell.style.setProperty("--my", `${e.clientY - r.top}px`);
  });
});

/* ---------- Custom cursor + magnetic ---------- */
const ring = document.getElementById("cursorRing");
const dot = document.getElementById("cursorDot");
let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
window.addEventListener("pointermove", (e) => {
  mx = e.clientX; my = e.clientY;
  dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
});
(function loop() {
  rx += (mx - rx) * 0.18;
  ry += (my - ry) * 0.18;
  ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
  requestAnimationFrame(loop);
})();
document.querySelectorAll("a, button, .btn, .cell, .stat").forEach((el) => {
  el.addEventListener("pointerenter", () => ring.classList.add("hover"));
  el.addEventListener("pointerleave", () => ring.classList.remove("hover"));
});

document.querySelectorAll("[data-magnetic]").forEach((el) => {
  el.addEventListener("pointermove", (e) => {
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  });
  el.addEventListener("pointerleave", () => {
    el.style.transform = "";
  });
});

/* ---------- 3D tilt ---------- */
document.querySelectorAll("[data-tilt]").forEach((el) => {
  el.addEventListener("pointermove", (e) => {
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg) translateY(-4px)`;
  });
  el.addEventListener("pointerleave", () => {
    el.style.transform = "";
  });
});

/* ---------- Particles ---------- */
(function particles() {
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  let w, h, dots;
  const COUNT = Math.min(70, Math.floor(innerWidth / 22));
  const resize = () => {
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;
  };
  resize();
  window.addEventListener("resize", resize);
  dots = Array.from({ length: COUNT }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    r: Math.random() * 1.6 + 0.4,
  }));
  (function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const d of dots) {
      d.x += d.vx; d.y += d.vy;
      if (d.x < 0 || d.x > w) d.vx *= -1;
      if (d.y < 0 || d.y > h) d.vy *= -1;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(140,160,255,0.55)";
      ctx.fill();
    }
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const a = dots[i], b = dots[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(88,101,242,${0.14 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  })();
})();

/* ---------- Chat demo (typing animation) ---------- */
(function chatDemo() {
  const body = document.getElementById("chatBody");
  if (!body) return;
  const botAva = `<span class="msg__ava msg__ava--bot"><svg viewBox="0 0 24 24" width="18" height="18" fill="#fff"><path d="M4 6c4-1.5 12-1.5 16 0 1.5 3 2.5 7 2.5 10.5-2 2.5-5 3.5-5 3.5l-1-1.7c1.2-.4 2-.9 2-.9C14.5 19 12 19 12 19s-2.5 0-6.5-1.6c0 0 .8.5 2 .9L6.5 20S3.5 19 1.5 16.5C1.5 13 2.5 9 4 6Z"/></svg></span>`;
  const userMsg = `<div class="msg msg--user"><span class="msg__ava">Y</span><div><div class="msg__meta"><b>You</b><time>aujourd'hui</time></div><div class="msg__content chat-cmd">/website</div></div></div>`;
  const botMsg = `<div class="msg msg--bot">${botAva}<div><div class="msg__meta"><b class="bot-name">MDZ Bot</b><span class="app-tag">APP</span><time>aujourd'hui</time></div><div class="msg__content"><div class="embed"><div class="embed__title">🌐 Notre site web</div><div class="embed__desc">Découvrez tous nos services et connectez-vous à votre compte.</div><div class="embed__link">${SITE_URL.replace(/^https?:\/\//, "").replace(/\/$/, "")}</div></div></div></div></div>`;
  const userMsg2 = `<div class="msg msg--user"><span class="msg__ava">Y</span><div><div class="msg__meta"><b>You</b><time>aujourd'hui</time></div><div class="msg__content chat-cmd">/webcode 482915</div></div></div>`;
  const botMsg2 = `<div class="msg msg--bot">${botAva}<div><div class="msg__meta"><b class="bot-name">MDZ Bot</b><span class="app-tag">APP</span><time>aujourd'hui</time></div><div class="msg__content">✅ <b>Connexion réussie !</b> Ton compte Discord est maintenant lié au site web.</div></div></div>`;
  const typing = `<div class="msg msg--typing">${botAva}<span class="typing"><i></i><i></i><i></i></span></div>`;

  const seq = [userMsg, typing, botMsg, userMsg2, typing, botMsg2];
  let i = 0;
  const play = () => {
    if (i >= seq.length) {
      setTimeout(() => { body.innerHTML = ""; i = 0; setTimeout(play, 400); }, 4000);
      return;
    }
    const wrap = document.createElement("div");
    wrap.innerHTML = seq[i];
    const node = wrap.firstElementChild;
    if (seq[i] === typing) {
      body.appendChild(node);
      setTimeout(() => { node.remove(); i++; play(); }, 1200);
    } else {
      body.appendChild(node);
      node.scrollIntoView && null;
      i++;
      setTimeout(play, 900);
    }
  };
  const startObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { startObserver.disconnect(); setTimeout(play, 300); }
    });
  }, { threshold: 0.3 });
  startObserver.observe(body);
})();

/* ============================================================
   LOGIN (device pairing) — /webcode
   ============================================================ */
const modal = document.getElementById("loginModal");
const stateStart = document.getElementById("stateStart");
const stateCode = document.getElementById("stateCode");
const stateDone = document.getElementById("stateDone");
let pollTimer = null;

const showState = (which) => {
  [stateStart, stateCode, stateDone].forEach((s) => s.classList.add("is-hidden"));
  which.classList.remove("is-hidden");
};

const openModal = () => {
  modal.classList.add("open");
  document.body.classList.add("locked");
  const saved = localStorage.getItem("mdz_user");
  if (saved) {
    renderUser(JSON.parse(saved));
    showState(stateDone);
  } else {
    showState(stateStart);
  }
};
const closeModal = () => {
  modal.classList.remove("open");
  document.body.classList.remove("locked");
  if (pollTimer) clearInterval(pollTimer);
};

document.getElementById("loginBtn").addEventListener("click", openModal);
modal.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closeModal));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

function renderUser(u) {
  document.getElementById("userAva").src = u.avatar;
  document.getElementById("userName").textContent = u.name;
  document.getElementById("userTag").textContent = u.tag ? "@" + u.tag : "";
  const btn = document.getElementById("loginBtn");
  btn.innerHTML = `<img src="${u.avatar}" style="width:18px;height:18px;border-radius:50%"> ${u.name}`;
}

document.getElementById("startPair").addEventListener("click", async () => {
  try {
    const r = await fetch(`${API_BASE}/api/pair/new`, { method: "POST" });
    if (!r.ok) throw new Error("api");
    const { code } = await r.json();
    document.getElementById("codeValue").textContent = code;
    document.getElementById("codeInline").textContent = code;
    showState(stateCode);
    pollStatus(code);
  } catch (err) {
    alert("Impossible de joindre le bot (API). Vérifie que le bot est en ligne.\n\n" + API_BASE);
  }
});

function pollStatus(code) {
  if (pollTimer) clearInterval(pollTimer);
  pollTimer = setInterval(async () => {
    try {
      const r = await fetch(`${API_BASE}/api/pair/${code}`);
      if (!r.ok) return;
      const data = await r.json();
      if (data.status === "linked" && data.user) {
        clearInterval(pollTimer);
        localStorage.setItem("mdz_user", JSON.stringify(data.user));
        renderUser(data.user);
        showState(stateDone);
      }
    } catch (_) {}
  }, 2000);
}

document.getElementById("copyCode").addEventListener("click", () => {
  const code = document.getElementById("codeValue").textContent;
  navigator.clipboard && navigator.clipboard.writeText(`/webcode ${code}`);
  const btn = document.getElementById("copyCode");
  btn.textContent = "✓";
  setTimeout(() => (btn.textContent = "⧉"), 1200);
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("mdz_user");
  const btn = document.getElementById("loginBtn");
  btn.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4 6c4-1.5 12-1.5 16 0 1.5 3 2.5 7 2.5 10.5-2 2.5-5 3.5-5 3.5l-1-1.7c1.2-.4 2-.9 2-.9C14.5 19 12 19 12 19s-2.5 0-6.5-1.6c0 0 .8.5 2 .9L6.5 20S3.5 19 1.5 16.5C1.5 13 2.5 9 4 6Z"/></svg> Connexion`;
  showState(stateStart);
});

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("mdz_user");
  if (saved) renderUser(JSON.parse(saved));
});
