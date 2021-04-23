gsap.from('.about_container',{duration:1, x:'-100vw',delay:1, ease: 'power2.in'})
gsap.from('.skills_container',{duration:1, x:'-100vw',delay:1, ease:'power2.in'})
gsap.from('.contact_section',{duration:2, y:'-100vw',delay:1, ease:'bounce'})



/*===typing animation===*/
var typed = new Typed(".typing", {
    strings: ["Developer","Freelancer","Full stack Developer"],
    typedSpeed: 150,
    backSpeed:200,
    loop:true
});


































/*====SCROLL REVEAL ANIMATION====*/
// const sr = scrollReveal({
//     origin: 'top',
//     distance: '80px',
//     duration: 2000,
//     reset: true

// })
// /* SCROLL HOME*/
// sr.reveal('.home_title',{})
// sr.reveal('.button',{delay:200})
// sr.reveal('.home_img',{delay:400})
// sr.reveal('.home_social_icon',{interval:200})


