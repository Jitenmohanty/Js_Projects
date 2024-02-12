var circle = document.querySelector(".circle");
var frames = document.querySelectorAll(".frame");
const lerp = (x, y, a) => x * (1 - a) + y * a;

// window.addEventListener("mousemove",(det)=>{
//     circle.style.transform = `translate(${det.clientX}px,${det.clientY}px)`;
// })

frames.forEach(frame =>{
    window.addEventListener("mousemove", (det) => {
        gsap.to(circle, {
          x: det.clientX,
          y: det.clientY,
          duration: 0.2,
          ease: Expo,
        });
      });
      
      frame.addEventListener("mousemove", (det) => {
        var dims = frame.getBoundingClientRect();
        var xStart = dims.x;
        var xEnd = dims.x + dims.width;
        // console.log(lerp(xStart,xEnd,1))
        var ans = gsap.utils.mapRange(xStart, xEnd, 0, 1, det.clientX);
        gsap.to(".circle", {
          scale: 7,
        });
        gsap.to(frame.children, {
          color: "#fff",
          duration: 0.5,
          y: "-5vw",
        });
        gsap.to(frame.children, {
          x: lerp(-50, 50, ans),
        });
      });
      frame.addEventListener("mouseleave", () => {
        gsap.to(".circle", {
          scale: 1,
        });
        gsap.to(frame.children, {
          color: "#000",
          duration: 0.5,
          y: 0,
          x:0
        });
       
      });
      
})

