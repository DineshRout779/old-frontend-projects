window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const menu = document.querySelector(".menu__toggle");
const nav = document.querySelector("nav");
menu.addEventListener("click", function () {
  nav.classList.toggle("open");
  return false;
});
