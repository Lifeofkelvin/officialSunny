const hamburger = document.querySelector(".hamburger");
const dropMenu = document.querySelector(".top-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("close-menu");

  dropMenu.classList.toggle("active");
});
