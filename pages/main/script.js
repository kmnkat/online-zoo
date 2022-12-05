import animals from "../../assets/data/animals.json";

console.log(animals);
// burger menu

const burgerMenuButton = document.querySelector(".header__content--right");
const overlay = document.getElementById("overlay");
const nav = document.getElementById("navigation-header-burger");
const header = document.querySelector(".header");
const burgerXBtn = document.querySelector(".burger__x");

const addOverlay = () => {
  overlay.style.display = "block";
  overlay.addEventListener("click", () => {
    removeOverlay();
  });
};

const removeOverlay = () => {
  overlay.style.display = "none";
};

const removeBurger = () => {
  nav.classList.remove("showBurgerMenu");
  header.classList.remove("header--white");
  removeOverlay();
};

const addBurger = () => {
  nav.classList.add("showBurgerMenu");
  header.classList.add("header--white");
  addOverlay();
  overlay.addEventListener("click", removeBurger);
};

if (screen.width <= 640) {
  burgerXBtn.style.display = "block";
  burgerXBtn.addEventListener("click", removeBurger);
  burgerMenuButton.addEventListener("click", addBurger);
}

//testimonial popup
const popupToFill = document.querySelector(".popup-testimonial");
const allTestimonials = document.querySelectorAll(".testimonial");

const hidePopUp = () => {
  popupToFill.style.display = "none";
  removeOverlay();
};

if (screen.width <= 640) {
  popupToFill.addEventListener("click", hidePopUp);
  allTestimonials.forEach((testimonial) => {
    testimonial.addEventListener("click", () => {
      popupToFill.style.display = "block";
      popupToFill.innerHTML = testimonial.innerHTML;
      const popupClose = document.createElement("button");
      popupClose.classList.add("btn-x-testimonial");
      popupClose.innerText = "⨉";
      popupToFill.appendChild(popupClose);
      addOverlay();
      overlay.addEventListener("click", hidePopUp);
      popupClose.addEventListener("click", hidePopUp);
    });
  });
}

// adding data to carousel
