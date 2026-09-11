const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-btn");
const panel = document.querySelector(".mobile-panel");

window.addEventListener(
  "scroll",
  () => {
    nav.classList.toggle("is-tight", window.scrollY > 24);
  },
  { passive: true }
);

menuBtn?.addEventListener("click", () => {
  const open = panel.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

panel?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => panel.classList.remove("open"));
});

document.querySelectorAll(".faq-item button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    const wasOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach((el) => el.classList.remove("open"));
    if (!wasOpen) item.classList.add("open");
  });
});

const form = document.querySelector("#book-form");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  if (!data.name || !data.phone || !data.email || !data.type) return;
  form.classList.add("success");
});
