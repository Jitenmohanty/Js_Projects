document.documentElement.setAttribute("data-theme", "light");
let svg1 = document.querySelectorAll('.svg1');
let svg2 = document.querySelectorAll('.svg2');
let btn = document.querySelector(".cat-button");
let svgDiv = document.querySelector("#divs")
let svg = document.querySelector(".svg4")
// console.log(svgDiv)
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

document.getElementById('theme-switcher').addEventListener('change', function () {
    if (this.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        btn.style.border = "none";
        removeBg();
        removePosition();
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        buttonBorder();
        addBg();
        addPosition();
    }
});
