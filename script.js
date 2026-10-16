/* ============================================================
   M_N_M_S Bot — site config
   API_BASE = URL publique de l'API du bot (aiohttp) pour la connexion.
   En local : http://localhost:8790
   En ligne : l'URL de votre hébergement (ex: https://mdz-bot.onrender.com)
   ============================================================ */
const API_BASE = "http://localhost:8790";
const SITE_URL = "https://mathis363.github.io/MDZ-bot/";

/* ============================================================
   i18n — English (default) + French
   ============================================================ */
const I18N = {
  en: {
    "meta.title": "M_N_M_S Bot — Custom Discord bots",
    "nav.services": "Services",
    "nav.demo": "Demo",
    "nav.process": "Process",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.login": "Login",
    "nav.start": "Get started",

    "hero.badge": "Custom Discord development",
    "hero.title1": "Discord bots",
    "hero.title2": "that make a difference.",
    "hero.sub": "We build your bot from scratch, A to Z. Moderation, economy, music, tickets, levels — your community deserves better.",
    "hero.cta1": "Start my project",
    "hero.cta2": "See the demo",
    "hero.stat1": "Support & follow-up",
    "hero.stat2": "Express delivery",
    "hero.stat3": "Custom code",
    "hero.stat4": "Dedicated support",

    "mock.online": "online",
    "mock.today": "today",
    "mock.embedTitle": "🌐 Our website",
    "mock.embedDesc": "Discover all our services and log in to your account.",
    "mock.chip1": "⚡ 12ms latency",
    "mock.chip2": "🛡️ Anti-raid active",

    "marquee.items": '<span>🛡️ Anti-Raid</span><span>💰 Economy</span><span>🎵 HD Music</span><span>🎫 Tickets</span><span>📈 Levels &amp; XP</span><span>🎉 Giveaways</span><span>🤖 AI</span><span>🔔 Webhooks</span><span>📊 Dashboard</span><span>⚡ Slash Commands</span>',

    "services.eyebrow": "Services",
    "services.title": "Everything your server needs",
    "services.sub": "Modules built to be powerful, fast and fully custom.",
    "services.mod.title": "Moderation & Security",
    "services.mod.desc": "Anti-spam, anti-raid, smart auto-mod, automatic sanctions and full real-time logs.",
    "services.eco.title": "Economy",
    "services.eco.desc": "Virtual currency, shop, reward roles and mini-games.",
    "services.music.title": "Music",
    "services.music.desc": "YouTube & Spotify playback, queue and playlists.",
    "services.tickets.title": "Tickets & Support",
    "services.tickets.desc": "Full ticket system, automatic transcripts and interactive panels.",
    "services.tickets.row1": "New ticket · <b>#support</b>",
    "services.tickets.row2": "Transcript sent to staff",
    "services.tickets.row3": "Ticket closed ✓",
    "services.levels.title": "Levels & XP",
    "services.levels.desc": "Progression, auto roles and leaderboards.",
    "services.giveaways.title": "Giveaways",
    "services.giveaways.desc": "Automated contests with entry conditions and draws.",

    "demo.eyebrow": "Live demo",
    "demo.title": "Simple commands, instant results",
    "demo.sub": 'Example with the <code>/website</code> command.',

    "process.eyebrow": "Process",
    "process.title": "From idea to bot, in 3 steps",
    "process.step1.title": "Discussion",
    "process.step1.desc": "We define your needs and the features you want together.",
    "process.step2.title": "Development",
    "process.step2.desc": "We code and test your bot, with a live preview.",
    "process.step3.title": "Delivery",
    "process.step3.desc": "Bot handover, onboarding and ongoing support.",

    "faq.eyebrow": "FAQ",
    "faq.title": "Frequently asked questions",
    "faq.q1": "How long to receive my bot?",
    "faq.a1": "Usually 2 to 5 days depending on complexity. An express 48h service is available.",
    "faq.q2": "How does the site login work?",
    "faq.a2": 'Click “Login”, a code appears, then type <code>/webcode &lt;code&gt;</code> on Discord to link your account.',
    "faq.q3": "What payment methods do you accept?",
    "faq.a3": "PayPal, bank transfer and cryptocurrencies.",

    "contact.title": "Ready to bring your bot to life?",
    "contact.sub": "Log in with Discord then describe your project: we open a ticket and reply within 24h.",
    "contact.startBtn": "Create my bot",
    "contact.connectedWith": "Connected with Discord",
    "contact.guestBtn": "Log in with Discord",
    "contact.titlePh": "Bot title (e.g. Moderation bot)",
    "contact.msgPh": "Describe your project, your needs…",
    "contact.submit": "Send",
    "contact.sending": "Sending…",
    "contact.fill": "Please fill in the title and description.",
    "contact.needLogin": "You must log in with Discord using the code.",
    "contact.ok": "✅ Ticket sent! We'll reply very soon.",
    "contact.noGuild": "⚠️ The bot isn't on any server yet.",
    "contact.error": "❌ Sending failed ({msg}). Make sure the bot is running and reachable at {api}.",

    "footer.rights": "All rights reserved.",

    "modal.start.title": "Discord login",
    "modal.start.text": "Connect your Discord account to access the site.",
    "modal.start.btn": "Generate a code",
    "modal.code.title": "Your login code",
    "modal.code.text": "Type this command on Discord:",
    "modal.code.waiting": "Waiting for confirmation…",
    "modal.done.connected": "✓ Connected",
    "modal.done.logout": "Log out",

    "alert.api": "Can't reach the bot (API). Make sure the bot is online.",

    "chat.you": "You",
    "chat.today": "today",
    "chat.embedTitle": "🌐 Our website",
    "chat.embedDesc": "Discover all our services and log in to your account.",
    "chat.success": "✅ <b>Login successful!</b> Your Discord account is now linked to the website.",

    "contact.alreadyOpen": "You already have an open ticket. Please wait for it to be handled.",

    "nav.admin": "Admin",
    "admin.eyebrow": "Administration",
    "admin.title": "Admin panel",
    "admin.sub": "Visible only to server administrators.",
    "admin.tab.announce": "Announcement",
    "admin.tab.tickets": "Tickets",
    "admin.tab.mod": "Moderation",
    "admin.tab.stats": "Statistics",
    "admin.channel": "Channel",
    "admin.annTitle": "Title",
    "admin.annTitlePh": "Announcement title",
    "admin.annMessage": "Message",
    "admin.annMessagePh": "Your announcement…",
    "admin.annSend": "Send announcement",
    "admin.refresh": "Refresh",
    "admin.duration": "Duration",
    "admin.durationPh": "10m, 2h, 1d",
    "admin.reason": "Reason",
    "admin.reasonPh": "Reason (optional)",
    "admin.searchPh": "Search a member…",
    "admin.search": "Search",
    "admin.empty": "Nothing to display.",
    "admin.loading": "Loading…",
    "admin.close": "Close",
    "admin.mute": "Mute",
    "admin.unmute": "Unmute",
    "admin.mutedTag": "muted",
    "admin.kick": "Kick",
    "admin.ban": "Ban",
    "admin.kickConfirm": "Kick {name} from the server?",
    "admin.banConfirm": "Ban {name} from the server?",
    "admin.sending": "Sending…",
    "admin.sent": "✅ Announcement sent!",
    "admin.error": "❌ Action failed ({msg}).",
    "admin.forbidden": "⛔ You don't have administrator permission.",
    "admin.stat.members": "Members",
    "admin.stat.humans": "Humans",
    "admin.stat.bots": "Bots",
    "admin.stat.admins": "Admins",
    "admin.stat.roles": "Roles",
    "admin.stat.channels": "Channels",
    "admin.stat.tickets": "Open tickets",
  },

  fr: {
    "meta.title": "M_N_M_S Bot — Bots Discord sur mesure",
    "nav.services": "Services",
    "nav.demo": "Démo",
    "nav.process": "Process",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.login": "Connexion",
    "nav.start": "Démarrer",

    "hero.badge": "Développement Discord sur mesure",
    "hero.title1": "Des bots Discord",
    "hero.title2": "qui font la différence.",
    "hero.sub": "Nous créons votre bot de A à Z. Modération, économie, musique, tickets, niveaux — votre communauté mérite mieux.",
    "hero.cta1": "Lancer mon projet",
    "hero.cta2": "Voir la démo",
    "hero.stat1": "Support & suivi",
    "hero.stat2": "Livraison express",
    "hero.stat3": "Code sur mesure",
    "hero.stat4": "Accompagnement dédié",

    "mock.online": "en ligne",
    "mock.today": "aujourd'hui",
    "mock.embedTitle": "🌐 Notre site web",
    "mock.embedDesc": "Découvrez tous nos services et connectez-vous à votre compte.",
    "mock.chip1": "⚡ Latence 12ms",
    "mock.chip2": "🛡️ Anti-raid actif",

    "marquee.items": '<span>🛡️ Anti-Raid</span><span>💰 Économie</span><span>🎵 Musique HD</span><span>🎫 Tickets</span><span>📈 Niveaux &amp; XP</span><span>🎉 Giveaways</span><span>🤖 IA</span><span>🔔 Webhooks</span><span>📊 Dashboard</span><span>⚡ Slash Commands</span>',

    "services.eyebrow": "Services",
    "services.title": "Tout ce qu'il faut à votre serveur",
    "services.sub": "Des modules pensés pour être puissants, rapides et entièrement personnalisés.",
    "services.mod.title": "Modération & Sécurité",
    "services.mod.desc": "Anti-spam, anti-raid, auto-mod intelligent, sanctions automatiques et logs complets en temps réel.",
    "services.eco.title": "Économie",
    "services.eco.desc": "Monnaie virtuelle, boutique, rôles récompenses et mini-jeux.",
    "services.music.title": "Musique",
    "services.music.desc": "Lecture YouTube & Spotify, file d'attente et playlists.",
    "services.tickets.title": "Tickets & Support",
    "services.tickets.desc": "Système de tickets complet, transcripts automatiques et panneaux interactifs.",
    "services.tickets.row1": "Nouveau ticket · <b>#support</b>",
    "services.tickets.row2": "Transcript envoyé au staff",
    "services.tickets.row3": "Ticket fermé ✓",
    "services.levels.title": "Niveaux & XP",
    "services.levels.desc": "Progression, rôles automatiques et classements.",
    "services.giveaways.title": "Giveaways",
    "services.giveaways.desc": "Concours automatisés avec conditions de participation et tirages.",

    "demo.eyebrow": "Démo interactive",
    "demo.title": "Des commandes simples, un résultat immédiat",
    "demo.sub": 'Exemple avec la commande <code>/website</code>.',

    "process.eyebrow": "Process",
    "process.title": "De l'idée au bot, en 3 étapes",
    "process.step1.title": "Échange",
    "process.step1.desc": "On définit ensemble vos besoins et les fonctionnalités souhaitées.",
    "process.step2.title": "Développement",
    "process.step2.desc": "On code et on teste votre bot, avec un aperçu en direct.",
    "process.step3.title": "Livraison",
    "process.step3.desc": "Remise du bot, prise en main et support continu.",

    "faq.eyebrow": "FAQ",
    "faq.title": "Questions fréquentes",
    "faq.q1": "Combien de temps pour recevoir mon bot ?",
    "faq.a1": "En général 2 à 5 jours selon la complexité. Un service express 48h est disponible.",
    "faq.q2": "Comment fonctionne la connexion au site ?",
    "faq.a2": 'Clique sur « Connexion », un code apparaît, puis tape <code>/webcode &lt;code&gt;</code> sur Discord pour lier ton compte.',
    "faq.q3": "Quels moyens de paiement acceptez-vous ?",
    "faq.a3": "PayPal, virement bancaire et cryptomonnaies.",

    "contact.title": "Prêt à donner vie à votre bot ?",
    "contact.sub": "Connecte-toi avec Discord puis décris ton projet : on ouvre un ticket et on te répond sous 24h.",
    "contact.startBtn": "Créer mon bot",
    "contact.connectedWith": "Connecté avec Discord",
    "contact.guestBtn": "Se connecter avec Discord",
    "contact.titlePh": "Titre du bot (ex : Bot de modération)",
    "contact.msgPh": "Décris ton projet, tes besoins…",
    "contact.submit": "Envoyer",
    "contact.sending": "Envoi en cours…",
    "contact.fill": "Merci de remplir le titre et la description.",
    "contact.needLogin": "Vous devez vous connecter à Discord avec le code.",
    "contact.ok": "✅ Ticket envoyé ! On te répond très vite.",
    "contact.noGuild": "⚠️ Le bot n'est encore sur aucun serveur.",
    "contact.error": "❌ Envoi impossible ({msg}). Vérifie que le bot est lancé et joignable sur {api}.",

    "footer.rights": "Tous droits réservés.",

    "modal.start.title": "Connexion Discord",
    "modal.start.text": "Connectez votre compte Discord pour accéder au site.",
    "modal.start.btn": "Générer un code",
    "modal.code.title": "Votre code de connexion",
    "modal.code.text": "Tapez cette commande sur Discord :",
    "modal.code.waiting": "En attente de validation…",
    "modal.done.connected": "✓ Connecté",
    "modal.done.logout": "Se déconnecter",

    "alert.api": "Impossible de joindre le bot (API). Vérifie que le bot est en ligne.",

    "chat.you": "Vous",
    "chat.today": "aujourd'hui",
    "chat.embedTitle": "🌐 Notre site web",
    "chat.embedDesc": "Découvrez tous nos services et connectez-vous à votre compte.",
    "chat.success": "✅ <b>Connexion réussie !</b> Ton compte Discord est maintenant lié au site web.",

    "contact.alreadyOpen": "Tu as déjà un ticket ouvert. Merci d'attendre qu'il soit traité.",

    "nav.admin": "Admin",
    "admin.eyebrow": "Administration",
    "admin.title": "Panel admin",
    "admin.sub": "Visible uniquement par les administrateurs du serveur.",
    "admin.tab.announce": "Annonce",
    "admin.tab.tickets": "Tickets",
    "admin.tab.mod": "Modération",
    "admin.tab.stats": "Statistiques",
    "admin.channel": "Salon",
    "admin.annTitle": "Titre",
    "admin.annTitlePh": "Titre de l'annonce",
    "admin.annMessage": "Message",
    "admin.annMessagePh": "Ton annonce…",
    "admin.annSend": "Envoyer l'annonce",
    "admin.refresh": "Actualiser",
    "admin.duration": "Durée",
    "admin.durationPh": "10m, 2h, 1j",
    "admin.reason": "Raison",
    "admin.reasonPh": "Raison (optionnel)",
    "admin.searchPh": "Rechercher un membre…",
    "admin.search": "Rechercher",
    "admin.empty": "Rien à afficher.",
    "admin.loading": "Chargement…",
    "admin.close": "Fermer",
    "admin.mute": "Mute",
    "admin.unmute": "Unmute",
    "admin.mutedTag": "muet",
    "admin.kick": "Expulser",
    "admin.ban": "Bannir",
    "admin.kickConfirm": "Expulser {name} du serveur ?",
    "admin.banConfirm": "Bannir {name} du serveur ?",
    "admin.sending": "Envoi…",
    "admin.sent": "✅ Annonce envoyée !",
    "admin.error": "❌ Action échouée ({msg}).",
    "admin.forbidden": "⛔ Tu n'as pas la permission administrateur.",
    "admin.stat.members": "Membres",
    "admin.stat.humans": "Humains",
    "admin.stat.bots": "Bots",
    "admin.stat.admins": "Admins",
    "admin.stat.roles": "Rôles",
    "admin.stat.channels": "Salons",
    "admin.stat.tickets": "Tickets ouverts",
  },
};

let lang = "en";
try {
  lang = localStorage.getItem("mdz_lang") || "en";
} catch (_) {}
if (!I18N[lang]) lang = "en";

function t(key) {
  return (I18N[lang] && I18N[lang][key]) ?? I18N.en[key] ?? key;
}

function tReplace(key, vars) {
  let s = t(key);
  for (const k in vars) s = s.split("{" + k + "}").join(vars[k]);
  return s;
}

const marqueeTrack = document.getElementById("marqueeTrack");

function applyI18n() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPh);
  });
  if (marqueeTrack) {
    const items = t("marquee.items");
    marqueeTrack.innerHTML = items + items;
  }
}

function applyLang(newLang) {
  if (!I18N[newLang] || newLang === lang) return;
  lang = newLang;
  try {
    localStorage.setItem("mdz_lang", lang);
  } catch (_) {}
  applyI18n();
  updateContactForm();
  if (typeof restartChatDemo === "function" && restartChatDemo) restartChatDemo();
}

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
  let tX = 0, tY = 0, cX = 0, cY = 0, raf = null;
  const tick = () => {
    cX += (tX - cX) * 0.16;
    cY += (tY - cY) * 0.16;
    if (Math.abs(tX - cX) < 0.05 && Math.abs(tY - cY) < 0.05) {
      cX = tX; cY = tY;
      el.style.transform = (cX || cY) ? `translate(${cX}px, ${cY}px)` : "";
      raf = null;
      return;
    }
    el.style.transform = `translate(${cX.toFixed(2)}px, ${cY.toFixed(2)}px)`;
    raf = requestAnimationFrame(tick);
  };
  const start = () => { if (!raf) raf = requestAnimationFrame(tick); };
  el.addEventListener("pointermove", (e) => {
    const r = el.getBoundingClientRect();
    tX = (e.clientX - r.left - r.width / 2) * 0.25;
    tY = (e.clientY - r.top - r.height / 2) * 0.35;
    start();
  });
  el.addEventListener("pointerleave", () => {
    tX = 0; tY = 0;
    start();
  });
});

/* ---------- 3D tilt (smooth) ---------- */
document.querySelectorAll("[data-tilt]").forEach((el) => {
  const MAX = 8;
  let tX = 0, tY = 0, tL = 0, cX = 0, cY = 0, cL = 0, raf = null;
  const frame = () =>
    `perspective(1100px) rotateY(${cX.toFixed(3)}deg) rotateX(${cY.toFixed(3)}deg) translateY(${cL.toFixed(3)}px)`;
  const tick = () => {
    cX += (tX - cX) * 0.12;
    cY += (tY - cY) * 0.12;
    cL += (tL - cL) * 0.12;
    if (Math.abs(tX - cX) < 0.03 && Math.abs(tY - cY) < 0.03 && Math.abs(tL - cL) < 0.03) {
      cX = tX; cY = tY; cL = tL;
      if (!cX && !cY && !cL) {
        el.style.transform = "";
        el.style.transition = "";
      } else {
        el.style.transform = frame();
      }
      raf = null;
      return;
    }
    el.style.transform = frame();
    raf = requestAnimationFrame(tick);
  };
  const start = () => { if (!raf) raf = requestAnimationFrame(tick); };
  el.addEventListener("pointerenter", () => { el.style.transition = "none"; });
  el.addEventListener("pointermove", (e) => {
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    tX = px * MAX;
    tY = -py * MAX;
    tL = -5;
    start();
  });
  el.addEventListener("pointerleave", () => {
    tX = 0; tY = 0; tL = 0;
    start();
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

/* ---------- Chat demo (typing animation, i18n-aware) ---------- */
let restartChatDemo = null;
(function chatDemo() {
  const body = document.getElementById("chatBody");
  if (!body) return;
  const botAva = `<span class="msg__ava msg__ava--bot"><svg viewBox="0 0 24 24" width="18" height="18" fill="#fff"><path d="M4 6c4-1.5 12-1.5 16 0 1.5 3 2.5 7 2.5 10.5-2 2.5-5 3.5-5 3.5l-1-1.7c1.2-.4 2-.9 2-.9C14.5 19 12 19 12 19s-2.5 0-6.5-1.6c0 0 .8.5 2 .9L6.5 20S3.5 19 1.5 16.5C1.5 13 2.5 9 4 6Z"/></svg></span>`;
  const link = SITE_URL.replace(/^https?:\/\//, "").replace(/\/$/, "");

  const typingMsg = () => ({ type: "typing", html: `<div class="msg msg--typing">${botAva}<span class="typing"><i></i><i></i><i></i></span></div>` });
  const buildSeq = () => [
    { type: "msg", html: `<div class="msg msg--user"><span class="msg__ava">Y</span><div><div class="msg__meta"><b>${t("chat.you")}</b><time>${t("chat.today")}</time></div><div class="msg__content chat-cmd">/website</div></div></div>` },
    typingMsg(),
    { type: "msg", html: `<div class="msg msg--bot">${botAva}<div><div class="msg__meta"><b class="bot-name">M_N_M_S Bot</b><span class="app-tag">APP</span><time>${t("chat.today")}</time></div><div class="msg__content"><div class="embed"><div class="embed__title">${t("chat.embedTitle")}</div><div class="embed__desc">${t("chat.embedDesc")}</div><div class="embed__link">${link}</div></div></div></div></div>` },
    { type: "msg", html: `<div class="msg msg--user"><span class="msg__ava">Y</span><div><div class="msg__meta"><b>${t("chat.you")}</b><time>${t("chat.today")}</time></div><div class="msg__content chat-cmd">/webcode 482915</div></div></div>` },
    typingMsg(),
    { type: "msg", html: `<div class="msg msg--bot">${botAva}<div><div class="msg__meta"><b class="bot-name">M_N_M_S Bot</b><span class="app-tag">APP</span><time>${t("chat.today")}</time></div><div class="msg__content">${t("chat.success")}</div></div></div>` },
  ];

  let seq = buildSeq();
  let i = 0;
  let timer = null;
  let started = false;

  const clearTimer = () => { if (timer) { clearTimeout(timer); timer = null; } };

  const play = () => {
    if (i >= seq.length) {
      timer = setTimeout(() => { body.innerHTML = ""; i = 0; seq = buildSeq(); play(); }, 4000);
      return;
    }
    const wrap = document.createElement("div");
    wrap.innerHTML = seq[i].html;
    const node = wrap.firstElementChild;
    body.appendChild(node);
    if (seq[i].type === "typing") {
      timer = setTimeout(() => { node.remove(); i++; play(); }, 1200);
    } else {
      i++;
      timer = setTimeout(play, 900);
    }
  };

  restartChatDemo = () => {
    if (!started) return;
    clearTimer();
    body.innerHTML = "";
    seq = buildSeq();
    i = 0;
    play();
  };

  const startObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        startObserver.disconnect();
        started = true;
        setTimeout(play, 300);
      }
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

function resetLoginBtn() {
  const btn = document.getElementById("loginBtn");
  btn.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4 6c4-1.5 12-1.5 16 0 1.5 3 2.5 7 2.5 10.5-2 2.5-5 3.5-5 3.5l-1-1.7c1.2-.4 2-.9 2-.9C14.5 19 12 19 12 19s-2.5 0-6.5-1.6c0 0 .8.5 2 .9L6.5 20S3.5 19 1.5 16.5C1.5 13 2.5 9 4 6Z"/></svg> <span data-i18n="nav.login">${t("nav.login")}</span>`;
}

function renderUser(u) {
  document.getElementById("userAva").src = u.avatar;
  document.getElementById("userName").textContent = u.name;
  document.getElementById("userTag").textContent = u.tag ? "@" + u.tag : "";
  const btn = document.getElementById("loginBtn");
  btn.innerHTML = `<img src="${u.avatar}" style="width:18px;height:18px;border-radius:50%"> ${u.name}`;
  if (u.lang && I18N[u.lang]) applyLang(u.lang);
  updateContactForm();
  syncUserLang();
  if (typeof updateAdminVisibility === "function") updateAdminVisibility();
}

async function syncUserLang() {
  let u;
  try {
    u = JSON.parse(localStorage.getItem("mdz_user") || "null");
  } catch (_) {
    u = null;
  }
  if (!u || !u.id) return;
  try {
    const r = await fetch(`${API_BASE}/api/user/${u.id}`, { cache: "no-store" });
    if (!r.ok) return;
    const data = await r.json();
    if (!data || !data.lang || !I18N[data.lang]) return;
    if (u.botLang === undefined) {
      u.botLang = data.lang;
      u.lang = data.lang;
      try { localStorage.setItem("mdz_user", JSON.stringify(u)); } catch (_) {}
      applyLang(data.lang);
      return;
    }
    if (data.lang !== u.botLang) {
      u.botLang = data.lang;
      u.lang = data.lang;
      try { localStorage.setItem("mdz_user", JSON.stringify(u)); } catch (_) {}
      applyLang(data.lang);
    }
  } catch (_) {}
}

setInterval(syncUserLang, 5000);
window.addEventListener("focus", syncUserLang);
document.addEventListener("visibilitychange", () => { if (!document.hidden) syncUserLang(); });

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
    alert(t("alert.api") + "\n\n" + API_BASE);
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
        if (data.user.lang) data.user.botLang = data.user.lang;
        localStorage.setItem("mdz_user", JSON.stringify(data.user));
        renderUser(data.user);
        showState(stateDone);
        setTimeout(closeModal, 1200);
      }
    } catch (_) {}
  }, 2000);
}

document.getElementById("copyCode").addEventListener("click", () => {
  const code = document.getElementById("codeValue").textContent;
  navigator.clipboard && navigator.clipboard.writeText(code);
  const btn = document.getElementById("copyCode");
  btn.textContent = "✓";
  setTimeout(() => (btn.textContent = "⧉"), 1200);
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("mdz_user");
  resetLoginBtn();
  updateContactForm();
  if (typeof updateAdminVisibility === "function") updateAdminVisibility();
  showState(stateStart);
});

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("mdz_user");
  if (saved) {
    renderUser(JSON.parse(saved));
    syncUserLang();
  }
});

/* ============================================================
   FORMULAIRE DE CONTACT (ticket Discord) — affiché après clic,
   champs toujours visibles ; l'envoi requiert la connexion Discord.
   ============================================================ */
const contactForm = document.getElementById("contactForm");
const contactStart = document.getElementById("contactStart");
const openTicketBtn = document.getElementById("openTicketForm");

function updateContactForm() {
  if (!contactForm || contactForm.classList.contains("is-hidden")) return;
  const raw = localStorage.getItem("mdz_user");
  const user = raw ? JSON.parse(raw) : null;
  const formUser = document.getElementById("formUser");
  const formGuest = document.getElementById("formGuest");
  if (user) {
    document.getElementById("formUserAva").src = user.avatar;
    document.getElementById("formUserName").textContent = user.name;
    formUser.classList.remove("is-hidden");
    formGuest.classList.add("is-hidden");
  } else {
    formUser.classList.add("is-hidden");
    formGuest.classList.remove("is-hidden");
  }
}

if (openTicketBtn) {
  openTicketBtn.addEventListener("click", () => {
    contactStart.classList.add("is-hidden");
    contactForm.classList.remove("is-hidden");
    updateContactForm();
  });
}

const formLoginBtn = document.getElementById("formLogin");
if (formLoginBtn) formLoginBtn.addEventListener("click", openModal);

if (contactForm) {
  const statusEl = document.getElementById("formStatus");
  const submitBtn = contactForm.querySelector("button[type=submit]");

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const raw = localStorage.getItem("mdz_user");
    if (!raw) {
      statusEl.className = "form-status err";
      statusEl.textContent = t("contact.needLogin");
      return;
    }
    const user = JSON.parse(raw);
    const title = document.getElementById("cTitle").value.trim();
    const message = document.getElementById("cMessage").value.trim();

    if (!title || !message) {
      statusEl.className = "form-status err";
      statusEl.textContent = t("contact.fill");
      return;
    }

    submitBtn.disabled = true;
    statusEl.className = "form-status";
    statusEl.textContent = t("contact.sending");

    try {
      const r = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, message, user }),
      });
      if (!r.ok) {
        let apiError = "http_" + r.status;
        try {
          const j = await r.json();
          if (j && j.error) apiError = j.error;
        } catch (_) {}
        throw new Error(apiError);
      }
      statusEl.className = "form-status ok";
      statusEl.textContent = t("contact.ok");
      contactForm.reset();
    } catch (err) {
      statusEl.className = "form-status err";
      if (err.message === "no_guild") {
        statusEl.textContent = t("contact.noGuild");
      } else if (err.message === "already_open") {
        statusEl.textContent = t("contact.alreadyOpen");
      } else {
        statusEl.textContent = tReplace("contact.error", { msg: err.message, api: API_BASE });
      }
    } finally {
      submitBtn.disabled = false;
    }
  });
}

/* ---------- Apply language on load ---------- */
applyI18n();
updateContactForm();
if (typeof updateAdminVisibility === "function") updateAdminVisibility();

/* ============================================================
   ADMIN PANEL — visible uniquement pour les admins du serveur
   (vérification côté bot via le jeton obtenu à la connexion)
   ============================================================ */
function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}

function getStoredUser() {
  try {
    return JSON.parse(localStorage.getItem("mdz_user") || "null");
  } catch (_) {
    return null;
  }
}

function adminHeaders() {
  const u = getStoredUser();
  return { "Content-Type": "application/json", "X-Admin-Token": (u && u.token) || "" };
}

async function adminFetch(path, options) {
  const opts = options || {};
  const r = await fetch(`${API_BASE}${path}`, {
    method: opts.method || "GET",
    headers: Object.assign({}, adminHeaders(), opts.headers || {}),
    body: opts.body,
    cache: "no-store",
  });
  let data = null;
  try {
    data = await r.json();
  } catch (_) {}
  if (!r.ok) {
    if (r.status === 403) throw new Error("forbidden");
    throw new Error((data && data.error) || "http_" + r.status);
  }
  return data || {};
}

function isAdminUser() {
  const u = getStoredUser();
  return !!(u && u.token);
}

async function updateAdminVisibility() {
  const adminSection = document.getElementById("admin");
  const adminBtn = document.getElementById("adminBtn");
  const u = getStoredUser();
  let ok = false;
  if (u && u.token) {
    ok = !!u.admin;
    if (!ok) {
      try {
        const res = await adminFetch("/api/admin/check");
        if (res.admin) {
          ok = true;
          u.admin = true;
          try { localStorage.setItem("mdz_user", JSON.stringify(u)); } catch (_) {}
        }
      } catch (_) {}
    }
  }
  if (adminBtn) adminBtn.classList.toggle("is-hidden", !ok);
  if (adminSection && !ok) adminSection.classList.add("is-hidden");
}

const adminSection = document.getElementById("admin");
const adminBtn = document.getElementById("adminBtn");

async function openAdmin() {
  if (!isAdminUser()) return;
  try {
    const res = await adminFetch("/api/admin/check");
    if (!res.admin) return;
  } catch (_) {
    return;
  }
  if (adminSection) {
    adminSection.classList.remove("is-hidden");
    adminSection.scrollIntoView({ behavior: "smooth" });
  }
  loadChannels();
  loadTickets();
  loadModMembers("");
  loadStats();
}
if (adminBtn) adminBtn.addEventListener("click", openAdmin);

document.querySelectorAll(".admin__tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".admin__tab").forEach((x) => x.classList.remove("is-active"));
    document.querySelectorAll(".admin__panel").forEach((p) => p.classList.remove("is-active"));
    tab.classList.add("is-active");
    const panel = document.querySelector(`.admin__panel[data-panel="${tab.dataset.tab}"]`);
    if (panel) panel.classList.add("is-active");
  });
});

async function loadChannels() {
  const sel = document.getElementById("annChannel");
  if (!sel) return;
  try {
    const { channels } = await adminFetch("/api/admin/channels");
    if (!channels || !channels.length) {
      sel.innerHTML = `<option value="">—</option>`;
      return;
    }
    sel.innerHTML = channels.map((c) => `<option value="${c.id}">#${esc(c.name)}</option>`).join("");
  } catch (_) {}
}

const annSend = document.getElementById("annSend");
if (annSend) {
  annSend.addEventListener("click", async () => {
    const statusEl = document.getElementById("annStatus");
    const channel_id = document.getElementById("annChannel").value;
    const title = document.getElementById("annTitle").value.trim();
    const message = document.getElementById("annMessage").value.trim();
    if (!channel_id || !title || !message) {
      statusEl.className = "form-status err";
      statusEl.textContent = t("contact.fill");
      return;
    }
    annSend.disabled = true;
    statusEl.className = "form-status";
    statusEl.textContent = t("admin.sending");
    try {
      await adminFetch("/api/admin/announce", {
        method: "POST",
        body: JSON.stringify({ channel_id, title, message }),
      });
      statusEl.className = "form-status ok";
      statusEl.textContent = t("admin.sent");
      document.getElementById("annTitle").value = "";
      document.getElementById("annMessage").value = "";
    } catch (err) {
      statusEl.className = "form-status err";
      statusEl.textContent =
        err.message === "forbidden" ? t("admin.forbidden") : tReplace("admin.error", { msg: err.message });
    } finally {
      annSend.disabled = false;
    }
  });
}

async function loadTickets() {
  const list = document.getElementById("ticketsList");
  const count = document.getElementById("ticketsCount");
  if (!list) return;
  list.innerHTML = `<div class="admin__empty">${t("admin.loading")}</div>`;
  try {
    const { tickets } = await adminFetch("/api/admin/tickets");
    if (count) count.textContent = String((tickets || []).length);
    if (!tickets || !tickets.length) {
      list.innerHTML = `<div class="admin__empty">${t("admin.empty")}</div>`;
      return;
    }
    list.innerHTML = tickets
      .map(
        (tk) => `
      <div class="admin__row">
        <div class="admin__row-info">
          <strong>#${esc(tk.name)}</strong>
          <small>${tk.title ? esc(tk.title) + " — " : ""}${tk.owner_name ? esc(tk.owner_name) : "?"}</small>
        </div>
        <div class="admin__row-actions">
          <button class="admin__mini admin__mini--danger" data-close="${tk.id}">${t("admin.close")}</button>
        </div>
      </div>`
      )
      .join("");
    list.querySelectorAll("[data-close]").forEach((b) =>
      b.addEventListener("click", () => closeTicket(b.dataset.close, b))
    );
  } catch (err) {
    list.innerHTML = `<div class="admin__empty">${err.message === "forbidden" ? t("admin.forbidden") : esc(err.message)}</div>`;
  }
}

async function closeTicket(id, btn) {
  btn.disabled = true;
  try {
    await adminFetch("/api/admin/tickets/close", {
      method: "POST",
      body: JSON.stringify({ channel_id: id }),
    });
    loadTickets();
  } catch (err) {
    btn.disabled = false;
    alert(err.message === "forbidden" ? t("admin.forbidden") : err.message);
  }
}

async function loadModMembers(q) {
  const list = document.getElementById("modList");
  if (!list) return;
  list.innerHTML = `<div class="admin__empty">${t("admin.loading")}</div>`;
  try {
    const { members } = await adminFetch(`/api/admin/members?q=${encodeURIComponent(q || "")}`);
    if (!members || !members.length) {
      list.innerHTML = `<div class="admin__empty">${t("admin.empty")}</div>`;
      return;
    }
    list.innerHTML = members
      .map(
        (m) => `
      <div class="admin__row">
        <img src="${esc(m.avatar)}" alt="" />
        <div class="admin__row-info">
          <strong>${esc(m.name)}${m.muted ? ` <span class="admin__tag">${t("admin.mutedTag")}</span>` : ""}</strong>
          <small>@${esc(m.tag)}</small>
        </div>
        <div class="admin__row-actions">
          <button class="admin__mini admin__mini--danger" data-mute="${m.id}" data-name="${esc(m.name)}">${t("admin.mute")}</button>
          <button class="admin__mini admin__mini--ok" data-unmute="${m.id}">${t("admin.unmute")}</button>
          <button class="admin__mini admin__mini--warn" data-kick="${m.id}" data-name="${esc(m.name)}">${t("admin.kick")}</button>
          <button class="admin__mini admin__mini--ban" data-ban="${m.id}" data-name="${esc(m.name)}">${t("admin.ban")}</button>
        </div>
      </div>`
      )
      .join("");
    list.querySelectorAll("[data-mute]").forEach((b) =>
      b.addEventListener("click", () => muteMember(b.dataset.mute, b))
    );
    list.querySelectorAll("[data-unmute]").forEach((b) =>
      b.addEventListener("click", () => unmuteMember(b.dataset.unmute, b))
    );
    list.querySelectorAll("[data-kick]").forEach((b) =>
      b.addEventListener("click", () => kickMember(b.dataset.kick, b.dataset.name, b))
    );
    list.querySelectorAll("[data-ban]").forEach((b) =>
      b.addEventListener("click", () => banMember(b.dataset.ban, b.dataset.name, b))
    );
  } catch (err) {
    list.innerHTML = `<div class="admin__empty">${err.message === "forbidden" ? t("admin.forbidden") : esc(err.message)}</div>`;
  }
}

async function muteMember(id, btn) {
  const duration = document.getElementById("modDuration").value.trim() || "10m";
  const reason = document.getElementById("modReason").value.trim();
  btn.disabled = true;
  try {
    await adminFetch("/api/admin/mute", {
      method: "POST",
      body: JSON.stringify({ member_id: id, duration, reason }),
    });
    loadModMembers(document.getElementById("modSearch").value.trim());
  } catch (err) {
    btn.disabled = false;
    alert(err.message === "forbidden" ? t("admin.forbidden") : err.message);
  }
}

async function unmuteMember(id, btn) {
  btn.disabled = true;
  try {
    await adminFetch("/api/admin/unmute", {
      method: "POST",
      body: JSON.stringify({ member_id: id }),
    });
    loadModMembers(document.getElementById("modSearch").value.trim());
  } catch (err) {
    btn.disabled = false;
    alert(err.message === "forbidden" ? t("admin.forbidden") : err.message);
  }
}

async function kickMember(id, name, btn) {
  if (!confirm(tReplace("admin.kickConfirm", { name }))) return;
  const reason = document.getElementById("modReason").value.trim();
  btn.disabled = true;
  try {
    await adminFetch("/api/admin/kick", {
      method: "POST",
      body: JSON.stringify({ member_id: id, reason }),
    });
    loadModMembers(document.getElementById("modSearch").value.trim());
  } catch (err) {
    btn.disabled = false;
    alert(err.message === "forbidden" ? t("admin.forbidden") : err.message);
  }
}

async function banMember(id, name, btn) {
  if (!confirm(tReplace("admin.banConfirm", { name }))) return;
  const duration = document.getElementById("modDuration").value.trim();
  const reason = document.getElementById("modReason").value.trim();
  btn.disabled = true;
  try {
    await adminFetch("/api/admin/ban", {
      method: "POST",
      body: JSON.stringify({ member_id: id, duration, reason }),
    });
    loadModMembers(document.getElementById("modSearch").value.trim());
  } catch (err) {
    btn.disabled = false;
    alert(err.message === "forbidden" ? t("admin.forbidden") : err.message);
  }
}

async function loadStats() {
  const grid = document.getElementById("statsGrid");
  if (!grid) return;
  grid.innerHTML = `<div class="admin__empty">${t("admin.loading")}</div>`;
  try {
    const s = await adminFetch("/api/admin/stats");
    const items = [
      ["members", s.members],
      ["humans", s.humans],
      ["bots", s.bots],
      ["admins", s.admins],
      ["roles", s.roles],
      ["channels", s.channels],
      ["tickets", s.tickets],
    ];
    grid.innerHTML = items
      .map(
        ([k, v]) => `<div class="admin__stat"><strong>${v}</strong><span>${t("admin.stat." + k)}</span></div>`
      )
      .join("");
  } catch (err) {
    grid.innerHTML = `<div class="admin__empty">${err.message === "forbidden" ? t("admin.forbidden") : esc(err.message)}</div>`;
  }
}

const ticketsRefresh = document.getElementById("ticketsRefresh");
if (ticketsRefresh) ticketsRefresh.addEventListener("click", loadTickets);
const statsRefresh = document.getElementById("statsRefresh");
if (statsRefresh) statsRefresh.addEventListener("click", loadStats);
const modSearchBtn = document.getElementById("modSearchBtn");
if (modSearchBtn)
  modSearchBtn.addEventListener("click", () =>
    loadModMembers(document.getElementById("modSearch").value.trim())
  );
const modSearch = document.getElementById("modSearch");
if (modSearch)
  modSearch.addEventListener("keydown", (e) => {
    if (e.key === "Enter") loadModMembers(modSearch.value.trim());
  });

/* ---------- Device notice: shown on phones / tablets only ---------- */
(function deviceNotice() {
  const popup = document.getElementById("devicePopup");
  if (!popup) return;
  const ua = navigator.userAgent || "";
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i.test(ua);
  const touchOnly = window.matchMedia && window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  if (!isMobile && !touchOnly) return;
  try {
    if (sessionStorage.getItem("mdz_device_notice") === "1") return;
  } catch (_) {}
  popup.classList.add("open");
  document.body.classList.add("locked");
  const close = () => {
    popup.classList.remove("open");
    document.body.classList.remove("locked");
    try { sessionStorage.setItem("mdz_device_notice", "1"); } catch (_) {}
  };
  const btn = document.getElementById("devicePopupClose");
  if (btn) btn.addEventListener("click", close);
  const backdrop = popup.querySelector(".device-popup__backdrop");
  if (backdrop) backdrop.addEventListener("click", close);
})();
