import { gsap, MotionPathPlugin, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
export function intro() {
    gsap.to('.intro__icon', {
        motionPath: {
            path: '.path',
            align: '.path',
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        },
        scrollTrigger: {
            trigger: ".timeline",
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
        },
        ease: 'none'
    })
}