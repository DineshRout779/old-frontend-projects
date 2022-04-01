const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const close = document.querySelector(".close");
const hero = document.querySelector(".hero");
const shop = document.querySelector(".shop");
const shop_content = document.querySelectorAll(".shop-item");
const prevButton = document.querySelector(".slide-left");
const nextButton = document.querySelector(".slide-right");
var count = 0;
const bgImages = [
  "./images/desktop-image-hero-1.jpg",
  "./images/desktop-image-hero-2.jpg",
  "./images/desktop-image-hero-3.jpg",
];

// open navigation
menu.addEventListener("click", function () {
  nav.style.top = "0";
});

// close navigation
close.addEventListener("click", function () {
  nav.style.top = "-100%";
});

// set first image as default background
window.addEventListener("load", function () {
  shop_content[0].style.display = "block";
  hero.style.backgroundImage = `url("${bgImages[count]}")`;
});

prevButton.addEventListener("click", prevContent);
nextButton.addEventListener("click", nextContent);

function prevContent() {
  if (count !== 0) {
    count -= 1;
  } else {
    count = bgImages.length - 1;
  }
  clearShopContent();
  shop_content[count].style.display = "block";
  hero.style.backgroundImage = `url("${bgImages[count]}")`;
}
function nextContent() {
  if (count == bgImages.length - 1) {
    count = 0;
  } else {
    count++;
  }
  clearShopContent();
  shop_content[count].style.display = "block";
  hero.style.backgroundImage = `url("${bgImages[count]}")`;
}

function clearShopContent() {
  shop_content.forEach((content) => {
    content.style.display = "none";
  });
}
