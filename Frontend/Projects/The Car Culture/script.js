var crsr=document.querySelector("#cursor")
var crsr_blur=document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x - 12.5 + "px"
    crsr.style.top = dets.y - 12.5 + "px"
    crsr_blur.style.left = dets.x - 200 + "px"
    crsr_blur.style.top = dets.y - 200 + "px"

});

var h4All = document.querySelectorAll("#nav h4")
h4All.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale=2;
        crsr.style.border="1px solid #fff";
        crsr.style.backgroundColor="transparent";
    })

    elem.addEventListener("mouseleave", function(){
        crsr.style.scale=1;
        crsr.style.border="0px solid #00ff00";
        crsr.style.backgroundColor= "#00ff00";
    })
});

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "90px",
    duration: 0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
});


gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller: "body",
        // markers: true,
        start: "top -100vh",
        end: "top -500vh",
        scrub: 1
    }
});


gsap.from("#about-us img, #about", {
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 65%",
        scrub:2,
    }
});

gsap.from(".cards", {
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1,
    }
});

gsap.from("#colon1", {
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"bottom 45%",
        scrub:4,
    }
});

gsap.from("#colon2", {
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"bottom 55%",
        end:"top 45%",
        scrub:4,
    }
});

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:4,
    }
});

var page4h4 = document.querySelectorAll("#page4 h4")
page4h4.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale=2;
        crsr.style.border="1px solid #fff";
        crsr.style.backgroundColor="transparent";
    })

    elem.addEventListener("mouseleave", function(){
        crsr.style.scale=1;
        crsr.style.border="0px solid #00ff00";
        crsr.style.backgroundColor= "#00ff00";
    })
});