const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function Loader() {
  var page = document.querySelector(".loader");
  setTimeout(() => {
    page.style.top = "-100%";
  }, 3600);
}

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}

var fixedDiv = document.querySelector(".fixedDiv");
var showDiv = document.querySelector("#elem-container");
showDiv.addEventListener("mouseenter", () => {
  fixedDiv.style.display = "block";
});

showDiv.addEventListener("mouseleave", () => {
  fixedDiv.style.display = "none";
});

let allImage = document.querySelectorAll(".elem");

allImage.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    var image = e.getAttribute("data-image");
    fixedDiv.style.backgroundImage = `url(${image})`;
  });
});
var imageCont = document.querySelectorAll(".page4Img");
var allH1 = document.querySelectorAll(".page4H1");
var firstImg = document.querySelector(".img1");
var firstH1 = document.querySelector(".page4H1");
firstImg.style.display = "block";

function imageChanger() {
  firstH1.style.color = "white";
  allH1.forEach((h3, index) => {
    h3.addEventListener("click", () => {
      addClass(h3);
      // Hide all images
      imageCont.forEach((img) => (img.style.display = "none"));
      // Show the corresponding image
      imageCont[index].style.display = "block";
    });
  });
}
let prevH1 = firstH1;
function addClass(h) {
  removeClass(prevH1);
  h.style.color = "white";
  prevH1 = h;
}
function removeClass(h) {
  h.style.color = "gray";
}
// Get swiper container
const swiperContainer = document.querySelector('.swiper');

// Create custom cursor element inside swiper container
const customCursor = document.createElement('div');
customCursor.className = 'custom-cursor';
swiperContainer.appendChild(customCursor);

// Update custom cursor position based on mouse movement inside swiper container
swiperContainer.addEventListener('mousemove', (e) => {
  customCursor.style.left = e.clientX + 'px';
  customCursor.style.top = e.clientY + 'px';
});9


swiperContainer.addEventListener('mouseenter', () => {
  // Show custom cursor when mouse enters swiper container
  customCursor.style.display = 'block';
});

swiperContainer.addEventListener('mouseleave', () => {
  // Hide custom cursor when mouse leaves swiper container
  customCursor.style.display = 'none';
});


Loader();
imageChanger();
swiperAnimation();
