// burger menu

const burgerMenuButton = document.querySelector(".header__content--right");
const overlay = document.getElementById("overlay");
const nav = document.getElementById("navigation-header-burger");
const header = document.querySelector(".header");
const burgerXBtn = document.querySelector(".burger__x");

const removeBurger = () => {
  nav.classList.remove("showBurgerMenu");
  header.classList.remove("header--white");
  overlay.style.display = "none";
};

const addBurger = () => {
  nav.classList.add("showBurgerMenu");
  header.classList.add("header--white");
  overlay.style.display = "block";
  overlay.addEventListener("click", removeBurger);
};

if (screen.width <= 640) {
  burgerXBtn.style.display = "block";
  burgerXBtn.addEventListener("click", removeBurger);
  burgerMenuButton.addEventListener("click", addBurger);
}
