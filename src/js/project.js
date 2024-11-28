export function project() { 
    const articles = gsap.utils.toArray('.pro')
    gsap.to(articles, {
        xPercent: -100 * (articles.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: '#project',
            start: 'top top',
            end: '+=3000',
            pin: true,
            scrub: 1,
            // snap: "none",
        }
    }
    )
}