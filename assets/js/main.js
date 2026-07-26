const body = document.body;
const toggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
body.classList.add(savedTheme || preferredTheme);

const updateToggleState = () => {
  if (toggle) toggle.setAttribute("aria-pressed", String(body.classList.contains("light")));
};
updateToggleState();

toggle?.addEventListener("click", () => {
  const nextTheme = body.classList.contains("dark") ? "light" : "dark";
  body.classList.remove("dark", "light");
  body.classList.add(nextTheme);
  localStorage.setItem("theme", nextTheme);
  updateToggleState();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(".fade").forEach((element) => observer.observe(element));

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const bar = document.getElementById("loader-line-bar");
  if (!loader || !bar) return;
  requestAnimationFrame(() => { bar.style.width = "100%"; });
  window.setTimeout(() => loader.classList.add("hide"), 950);
});
