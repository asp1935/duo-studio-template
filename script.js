function init() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
init();

const cursor = document.querySelector('#cursor');
const main = document.querySelector('.main');
const video = document.querySelector('#page1 .video-container');
const discover_container = document.querySelector('.page3-part3 .discover-container');
const stickyP = document.querySelector('.discover-container p');


function cursorAnimation() {
    document.addEventListener('mousemove', function (event) {
        gsap.to(cursor, {
            left: event.x + 20,
            top: event.y + 20,
            // transform:'translate(-50%,-50%)',
        })
    });

    video.addEventListener('mouseenter', () => {
        cursor.innerHTML = 'Sound On'
        cursor.style.borderRadius = '30px'

    })

    video.addEventListener('mouseleave', () => {
        cursor.innerHTML = ''
        cursor.style.borderRadius = '50%'
    });

    discover_container.addEventListener('mouseenter', function (event) {
        const containerRect = discover_container.getBoundingClientRect();
        gsap.to(stickyP, {
            left: event.x - containerRect.left,
            top: event.y - containerRect.top,
            duration: 1,
            ease: "power3.out",
        });
    });

    discover_container.addEventListener('mouseleave', () => {
        gsap.to(stickyP, {
            left: '50%',
            top: '50%',
            duration: 1.5,
            ease: "elastic.out(1, 0.2)",
        });
    });
}

cursorAnimation()


const mobileMediaQuery = window.matchMedia('(max-width:768px)');
const tabMediaQuery = window.matchMedia('(max-width:1200px)');

function handleResponsiveAnimation() {
    if (mobileMediaQuery.matches) {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#page1 h1',
                scroller: '.main',
                markers: true,
                start: 'top 40%',
                end: 'top 20%',
                scrub: 2
            }
        })

        tl.to('#page1 h1', {
            x: -100,
        }, 'text');

        tl.to('#page1 h2', {
            x: 100,
        }, 'text');

        tl.to('#page1 .video-container', {
            width: '90%'
        }, 'text')

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '#page1 h1',
                scroller: '.main',
                // markers: true,
                start: 'top -25%',
                end: 'top -45%',
                scrub: 2
            }
        })
        tl2.to('.main', {
            backgroundColor: '#fff'
        })

        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: '#page1 h1',
                scroller: '.main',
                // markers: true,
                start: 'top -220%',
                end: 'top -240%',
                scrub: 2
            }
        })

        tl3.to('.main', {
            backgroundColor: '#0f0d0d'
        })




    }
    else if (tabMediaQuery.matches) {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#page1 h1',
                scroller: '.main',
                // markers: true,
                start: 'top 25%',
                end: 'top 0',
                scrub: 2
            }
        })

        tl.to('#page1 h1', {
            x: -100,
        }, 'text');

        tl.to('#page1 h2', {
            x: 100,
        }, 'text');

        tl.to('#page1 .video-container', {
            width: '90%'
        }, 'text')


        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '#page1 h1',
                scroller: '.main',
                // markers: true,
                start: 'top -0%',
                end: 'top -300%',
                scrub: 2
            }
        })
        tl2.to('.main', {
            backgroundColor: '#fff'
        })

        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: '#page1 h1',
                scroller: '.main',
                // markers: true,
                start: 'top -310%',
                end: 'top -400%',
                scrub: 2
            }
        })

        tl3.to('.main', {
            backgroundColor: '#0f0d0d'
        })
    }
    else {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#page1 h1',
                scroller: '.main',
                // markers: true,
                start: 'top 25%',
                end: 'top 0',
                scrub: 2
            }
        })

        tl.to('#page1 h1', {
            x: -100,
        }, 'text');

        tl.to('#page1 h2', {
            x: 100,
        }, 'text');

        tl.to('#page1 .video-container', {
            width: '90%'
        }, 'text')


        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '#page1 h1',
                scroller: '.main',
                // markers: true,
                start: 'top -115%',
                end: 'top -135%',
                scrub: 2
            }
        })
        tl2.to('.main', {
            backgroundColor: '#fff'
        })

        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: '#page1 h1',
                scroller: '.main',
                // markers: true,
                start: 'top -450%',
                end: 'top -480%',
                scrub: 2
            }
        })

        tl3.to('.main', {
            backgroundColor: '#0f0d0d'
        })

    }


}

mobileMediaQuery.addEventListener('change', handleResponsiveAnimation);
tabMediaQuery.addEventListener('change', handleResponsiveAnimation);

handleResponsiveAnimation()







const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    box.addEventListener('mouseenter', () => {
        const imgAtt = box.getAttribute('data-image');
        cursor.style.width = '20vw';
        cursor.style.height = '15vw';
        cursor.style.borderRadius = '0';
        cursor.style.backgroundImage = `url(${imgAtt})`;
    })
    box.addEventListener('mouseleave', () => {
        cursor.style.width = '0';
        cursor.style.height = '0';
        cursor.style.borderRadius = '50%';

        cursor.style.backgroundImage = `none`;
    })

})


const navLinks = Array.from(document.querySelectorAll('.nav-part2 h4')).slice(1)
const purple_p = document.querySelectorAll('#purple .slider p');

navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        purple_p.forEach(p => {
            p.textContent = link.innerHTML;
        })
        gsap.to(purple, {
            opacity: 1,
            display: 'block',
            duration: 0.2,
        })
    })
    document.querySelector('.nav-part2').addEventListener('mouseleave', () => {
        gsap.to(purple, {
            opacity: 0,
            display: 'none',
            duration: 0.5,
        })
    })
})