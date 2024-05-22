gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline()

tl.set('.loader', {
yPercent: 0
}).set('.loader__title', {
opacity: 0
}).to('.loader__title', {
opacity: 1,
duration: 1,
scale: 1.2
}).to('.loader__title', {
opacity: 0,
duration: 0.9,
scale: 0.8
}).to('.loader', {
yPercent: -100,
duration: 1
}, '-=0.2');
const nav = document.querySelector('#header-nav');
const title = document.querySelector('.title');
const logo = document.querySelector('#logo');

window.addEventListener('scroll', () => {
let currentScrollPosition = window.scrollY || window.pageYOffset;
if(currentScrollPosition >= 600){
    nav.style.display = 'none';
}
else{
    nav.style.display = 'block';
}

if(currentScrollPosition >= 6000){
    title.style.display = 'none';
}
else{
    title.style.display = 'block';
}

let rotate = currentScrollPosition / 8;

logo.style.rotate = `${rotate}deg`;
})

/* Horizontal scroll */

const sections = gsap.utils.toArray(".container .card");

let scrollGsap;

let width = document.documentElement.clientWidth;

function initScrollGsap() {
    // Убедитесь, что если анимация уже существует, она будет удалена перед созданием новой
    if (scrollGsap) {
        scrollGsap.kill();
        scrollGsap = null;
    }

    if (width >= 1370) {
        scrollGsap = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".items .container",
                pin: true,
                scrub: 1,
                start: 'top 10%',
                end: "+=5000",
                snap: 1 / (sections.length - 1),
                //markers: true,
            }
        });
    } else if (width > 1200) {
        scrollGsap = gsap.to(sections, {
            xPercent: -105 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".items .container",
                pin: true,
                scrub: 1,
                start: 'top 10%',
                end: "+=3000",
                //snap: 1 / (sections.length - 1),
                //markers: true,
            }
        });
    } else {
        // Если ширина экрана меньше 1200, анимация не запускается
        console.log("Good luck ;)");
    }

    // Обновление всех триггеров после изменения размера окна
    ScrollTrigger.refresh();
}

// Инициализация анимации при загрузке страницы
initScrollGsap();

// Повторная инициализация анимации при изменении размера экрана
window.addEventListener('resize', initScrollGsap);

/* End horizontal scroll */

tl.to('.contact', {
scrollTrigger: {
    trigger: '.contact',
    start: 'top bottom',
    end: 'center center',
    scrub: 1,
    // markers: true
},
y: -300,
ease: 'Power2.out'
})

tl.to('.partners', {
scrollTrigger: {
    trigger: '.partners',
    start: 'top bottom',
    end: 'center center',
    scrub: 1,
    ease: 'Power2.out',
    // markers: true
},
y: -80,
ease: 'Power2.out'
})

let aboutGsap;

if (aboutGsap) {
    aboutGsap.kill();
    aboutGsap = null;
}

if(width > 1080){
    aboutGsap = tl.to('.about__images-one', {
        y: 350,
        ease: 'Power2.out',
        scrollTrigger: {
            trigger: '.about',
            start: 'top bottom',
            end: 'center center',
            scrub: 1,
            // markers: true
        },
    })
}
else if (width > 830) {
    aboutGsap = tl.to('.about__images-one', {
        y: 280,
        ease: 'Power2.out',
        scrollTrigger: {
            trigger: '.about',
            start: 'top bottom',
            end: 'center center',
            scrub: 1,
            // markers: true
        },
    })
}


function year () {
const year = document.getElementById('year');
let date = new Date();
date = (date.getFullYear())
year.innerText = date;
}
year();

document.querySelectorAll("a[href^='#']").forEach(link => {
link.addEventListener("click", function (e) {
e.preventDefault();
let href = this.getAttribute("href").substring(1);
const scrollTarget = document.getElementById(href);
// const topOffset = document.querySelector(".scrollto").offsetHeight;
const topOffset = 60; // если не нужен отступ сверху
const elementPosition = scrollTarget.getBoundingClientRect().top;
const offsetPosition = elementPosition - topOffset;

window.scrollBy({
    top: offsetPosition,
    behavior: "smooth"
});
});
});
        

const menu = document.getElementById('menu');
const mobileNav = document.querySelector('.mobile-nav');
const menuDelete = document.getElementById('menu-del');

menu.addEventListener('click', function(e) {
    e.preventDefault();

    mobileNav.classList.add('mobile-style')

    if(document.body.style.position == 'fixed'){
        document.body.style.position = 'relative'
    }
    else{
        document.body.style.position = 'fixed'
    }   
})

menuDelete.addEventListener('click', (e) => {
    e.preventDefault()
    mobileNav.classList.remove('mobile-style');

    if(document.body.style.position == 'fixed'){
        document.body.style.position = 'relative'
    }
    else{
        document.body.style.position = 'fixed'
    }   
    
})