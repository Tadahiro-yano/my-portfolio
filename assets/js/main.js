/* ===============================
   Loading Animation
================================ */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (!loader) return;

  setTimeout(() => {
    loader.classList.add("hide");
  }, 1800);
});

/* ===============================
   Theme Toggle
================================ */
const toggle = document.getElementById("theme-toggle");
const body = document.body;

// 初期テーマ適用（1回だけ）
const savedTheme = localStorage.getItem("theme") || "dark";
body.classList.add(savedTheme);

if (toggle) {
  toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");

    const theme = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  });
}

/* ===============================
   Scroll Animation
================================ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade").forEach((el) => observer.observe(el));
