const mainNav = document.querySelector(".main-nav");
const hamburger = document
  .querySelector(".hamburger")
  .addEventListener("click", () => {
    mainNav.classList.toggle("active");
  });
