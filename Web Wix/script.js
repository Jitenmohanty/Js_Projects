document.documentElement.setAttribute("data-theme", "light");
let svg1 = document.querySelectorAll('.svg1');
let svg2 = document.querySelectorAll('.svg2');
let btn = document.querySelector(".cat-button");
let svgDiv = document.querySelector("#divs")
let svg = document.querySelector(".svg4")
// console.log(svgDiv)
// for smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

addBg();
buttonBorder();

function addBg() {
    svg1.forEach((e) => {
        e.style.fill = "rgb(20, 20, 20)";
        e.style.stroke = "rgb(55, 52, 52)";
    });
    svg2.forEach((e) => {
        e.style.stroke = "rgb(130, 129, 129)";
    });
}

function removeBg() {
    svg1.forEach((e) => {
        e.style.fill = "white";
        e.style.stroke = "white";
    });
    svg2.forEach((e) => {
        e.style.stroke = "grey";
    });
}



function removePosition(){
    svgDiv.style.position = "relative";
    svgDiv.style.bottom = "-5vw";
    svgDiv.style.left = 0;
    svg.style.right = "2vw"
    svg.style.top = "5vw"
}
function addPosition(){
    svgDiv.style.position = " absolute"
    svgDiv.style.bottom = "3vw";
    svgDiv.style.left = "30vw";
    svg.style.right = "12vw"
    svg.style.top = "12vw"
}

function buttonBorder() {
    btn.style.border = "1px solid red";
}

document.documentElement.setAttribute("data-theme", "light");

const themeToggle = document.getElementById("theme-switcher");
const themeIcon = document.getElementById("themeIcon");


function toggleThemeIcon(isNightMode) {
  if (isNightMode) {
    themeIcon.classList.remove("ri-moon-line");
    themeIcon.classList.add("ri-sun-line");
  } else {
    themeIcon.classList.remove("ri-sun-line");
    themeIcon.classList.add("ri-moon-line");
  }
}

toggleThemeIcon(false); // Initially set to light mode

// Listen for theme switch toggle
themeToggle.addEventListener("change", function () {
  // Toggle theme icon based on the new theme mode
  toggleThemeIcon(this.checked); // Pass true for night mode, false for day mode
});

document
  .getElementById("theme-switcher")
  .addEventListener("change", function () {
    if (this.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      btn.style.border = "none";
      removeBg();
      removePosition();
      // Code to change to dark mode (if needed)
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      buttonBorder();
      addBg();
      addPosition();
      // Code to change to light mode (if needed)
    }
  });
