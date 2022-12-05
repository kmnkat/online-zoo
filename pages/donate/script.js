const allDots = document.querySelectorAll("div.dot-clickable");
const anotherAmountField = document.querySelector(
  "input.donate__form-another-am"
);

// change input and dot accordingly

const checkingTheFieldAndNumber = (enteredAmount) => {
  allDots.forEach((dot) => {
    const amount = dot.id.match(/\d+/i);
    if (parseInt(enteredAmount) === parseInt(amount[0])) {
      addActiveStyle(dot);
    } else {
      if (dot.classList.contains("donate__form-dot--chosen")) {
        dot.classList.remove("donate__form-dot--chosen");
      }
    }
  });
};

const changeInputField = (chosenDot) => {
  const amount = chosenDot.id.match(/\d+/i);
  anotherAmountField.value = parseInt(amount[0]);
};

// clickable dot

const addActiveStyle = (element) => {
  const previousChosen = document.querySelector("div.donate__form-dot--chosen");
  if (previousChosen) {
    previousChosen.classList.remove("donate__form-dot--chosen");
  }
  //change value - input field
  element.classList.add("donate__form-dot--chosen");
};

allDots.forEach((dot) => {
  dot.addEventListener("click", () => addActiveStyle(dot));
  dot.addEventListener("click", () => changeInputField(dot));
});

// form limitation of characters

function limitNumberOfChar(event, value, numOfChar) {
  if (value != undefined && value.toString().length >= numOfChar) {
    event.preventDefault();
  }
}

//checking input every time

anotherAmountField.addEventListener("input", (event) => {
  checkingTheFieldAndNumber(event.target.value);
  console.log(event.target.value);
});

//initial setting

anotherAmountField.value = 100;
checkingTheFieldAndNumber(100);

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
