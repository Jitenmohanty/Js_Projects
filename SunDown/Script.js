const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function Loader(){
    var page = document.querySelector(".loader");
    setTimeout(()=>{
        page.style.top = "-100%"
    },3600)
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
var firstH1 = document.querySelector(".page4H1")
firstImg.style.display = "block";

function imageChanger() {
  allH1.forEach((h3, index) => {
    removeClass()
    h3.addEventListener("click", () => {
        // Hide all images
        addClass(h3)
        imageCont.forEach((img) => (img.style.display = "none"));

      // Show the corresponding image
      imageCont[index].style.display = "block";
    //   removeClass(h3)
    });
  });
}
let hs;
function addClass(h){
    h.classList.add("active")
    
    // if(hs !== h) {
    //     removeClass(hs)
    // }
    // h.style.color = "white";
    // hs = h;
}
function removeClass(){
    firstH1.classList.remove("active")
    // h.style.color = "gray";

}

Loader();
imageChanger();
swiperAnimation();
