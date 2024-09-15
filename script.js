function loadingAnimation(){
    if(window.innerWidth > 600) { // Agar screen size 600px se zyada hai, to animation chale
        let tl = gsap.timeline();

        tl.to(".page1", {
            y: "110vh",
            scale: 0.6,
            duration: 1
        });

        tl.to(".page1", {
            y: "40vh",
            delay: 1,
            duration: 1
        });

        tl.to(".page1", {
            y: "0vh",
            scale: 1,
            duration: 1,
            rotate: 360
        });
    }
}

loadingAnimation();

function locomotiveAnimation(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}
locomotiveAnimation();

function menuAnimation(){
    let menu = document.querySelector(".page1 nav .nav3 i");
    let open = document.querySelector(".open");
    let cross = document.querySelector(".open .open-nav .open3 i");
    menu.addEventListener("click",function(){
        open.style.top = 0;
    })
    
    cross.addEventListener("click",function(){
        open.style.top = "-100vh";
    })
}
menuAnimation();