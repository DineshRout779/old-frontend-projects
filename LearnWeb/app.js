gsap.from(".landing__text", {
  opacity: 0,
  duration: 1,
  x: -100,
  ease: "power0",
});

gsap.from(".landing__img", {
  opacity: 0,
  duration: 1,
  x: 100,
  ease: "power0",
});

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const bars = document.querySelectorAll(".bar");

menu.addEventListener("click", function () {
  menu.classList.toggle("open");
  nav.classList.toggle("open");
});
