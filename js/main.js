const btn = document.querySelector(".menu-btn");
const active = document.querySelector(".nav-list");

btn.addEventListener("click", () => {
  active.classList.toggle("nav--active");
});
