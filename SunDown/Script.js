const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var fixedDiv = document.querySelector(".fixedDiv");
var showDiv = document.querySelector("#elem-container")
showDiv.addEventListener("mouseenter",()=>{
    fixedDiv.style.display = "block"
})

showDiv.addEventListener("mouseleave",()=>{
    fixedDiv.style.display = 'none'
})

let allImage = document.querySelectorAll(".elem");

allImage.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
       var image = e.getAttribute("data-image")
       fixedDiv.style.backgroundImage = `url(${image})`
    })
})