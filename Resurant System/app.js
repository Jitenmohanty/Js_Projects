document.addEventListener("DOMContentLoaded", () => {
  const carouselItems = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;

  function showNextImage() {
    carouselItems[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].classList.add("active");
  }

  carouselItems[currentIndex].classList.add("active");
  setInterval(showNextImage, 4000);
});

const buttons = document.querySelectorAll(".buttons button");
const cards = document.querySelectorAll(".card");

const stater = document.querySelectorAll(".stater");
const mains = document.querySelectorAll(".mains");
const beverage = document.querySelectorAll(".beverage");
const desserts = document.querySelectorAll(".desserts");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerHTML == "All") {
      cards.forEach((card) => {
        card.classList.remove("hide");
        card.classList.add("show");
      });
    } else if (button.innerHTML == "Stater") {
      cards.forEach((card) => {
        card.classList.add("hide");
      });
      stater.forEach((elem) => {
        elem.classList.remove("hide");
        elem.classList.add(".show");
      });
    } else if (button.innerHTML == "Mains") {
      cards.forEach((card) => {
        card.classList.add("hide");
      });
      mains.forEach((elem) => {
        elem.classList.remove("hide");
        elem.classList.add(".show");
      });
    } else if (button.innerHTML == "Beverage") {
      cards.forEach((card) => {
        console.log(card);
        card.classList.add("hide");
      });
      beverage.forEach((elem) => {
        elem.classList.remove("hide");
        elem.classList.add(".show");
      });
    } else if (button.innerHTML == "Desserts") {
      cards.forEach((card) => {
        card.classList.add("hide");
      });
      desserts.forEach((elem) => {
        elem.classList.remove("hide");
        elem.classList.add(".show");
      });
    }
  });
});

//Search operation implemented.
const searchBox = document.querySelector(".searchBox");

searchBox.addEventListener("input", () => {
  const inputVal = searchBox.value.toLowerCase();
  cards.forEach((card) => {
    const text = card.querySelector(".bottom h2").innerText.toLowerCase();
    // console.log(text)
    if (text.includes(inputVal)) {
      card.classList.remove("hide");
      card.classList.add("show");
    } else {
      card.classList.remove("show");
      card.classList.add("hide");
    }
  });
});

const toggler = document.querySelector(".navbar-toggler");
var flag = false;
toggler.addEventListener("click", () => {
  const btn = document.querySelector(".buttons");
  const nav = document.querySelector("nav");
  if (flag) {
    flag = false;
    btn.style.top = "-15vw";
    btn.style.flexDirection = "row";
    btn.style.justifyContent = "center";
    btn.style.alignItems = "center";
    nav.style.height = "5vw";
  } else {
    flag = true;
    btn.style.top = "5vw";
    btn.style.flexDirection = "column";
    btn.style.justifyContent = "flex-start";
    btn.style.alignItems = "flex-start";
    nav.style.height = "46vw";
    nav.style.transition = "all ease-in-out .7s"
  }
});
