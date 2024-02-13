var active = 3;

var mincircle = document.querySelectorAll(".mincircle")
var circleElem = document.querySelectorAll(".sec")

gsap.to(mincircle[active-1],{
    opacity:0.8
})
gsap.to(circleElem[active-1],{
    opacity:0.8
})

mincircle.forEach((elem,index)=>{
    elem.addEventListener("click",()=>{
        gsap.to(".circle",{
            rotate:(active-(index+1))*10,
            ease:Expo.easeInOut,
            duration:.6
        })
        clearBg()
        gsap.to(elem,{
            opacity:0.8
        })
        gsap.to(circleElem[index],{
            opacity:0.8
        })
    })
})

function clearBg(){
        gsap.to(mincircle,{
            opacity:0.2
        })
        gsap.to(circleElem,{
            opacity:0.2
        })
}

gsap.to(".circle",{
    rotate:0,
    ease:Expo.easeInOut,
    duration:1.5
})

