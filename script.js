document.getElementById("year").textContent = new Date().getFullYear();

const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 20);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 3) * 70}ms`;
  observer.observe(el);
});

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("pointermove", (e) => {
    const rect = cell.getBoundingClientRect();
    cell.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    cell.style.setProperty("--my", `${e.clientY - rect.top}px`);
  });
});

const glow = document.getElementById("cursorGlow");
let gx = window.innerWidth / 2;
let gy = window.innerHeight / 2;
let tx = gx;
let ty = gy;
window.addEventListener("pointermove", (e) => {
  tx = e.clientX;
  ty = e.clientY;
});
(function animateGlow() {
  gx += (tx - gx) * 0.12;
  gy += (ty - gy) * 0.12;
  glow.style.transform = `translate(${gx}px, ${gy}px) translate(-50%, -50%)`;
  requestAnimationFrame(animateGlow);
})();
