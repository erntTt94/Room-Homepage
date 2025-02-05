const leftSlideButton = document.querySelector('#left-arrow');
const rightSlideButton = document.querySelector('#right-arrow');
const mainImage = document.querySelector('.main-image');
const title = document.querySelector('.main-title');
const subtitles = document.querySelector('.main-subtitle');
const main = document.querySelector('main');
const menuToggler = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

const content = [
    [
        "images/desktop-image-hero-1.jpg",
        "images/desktop-image-hero-2.jpg",
        "images/desktop-image-hero-3.jpg"],
    [
        "Discover innovative ways to decorate",
        "We are available all across the globe",
        "Manufactured with the best materials"],
    [
        `We provide unmatched quality, comfort, and style for property owners across the country. 
    Our experts combine form and function in bringing your vision to life. Create a room in your 
    own style with our collection and make your property a reflection of you and what you love.`,

        `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`,

        `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.`
    ]
]

let active = 0;


mainImage.src = content[0][active];
title.textContent = content[1][active];
subtitles.textContent = content[2][active];

const changeContent = (position) => {
    if (position === "right-arrow") {
        active < 2 && active >= 0 ? active++ : active = 0;
    } else {
        active <= 0 ? active = 2 : active--;
    }
}


function nextSlide() {
    main.classList.add('slide-out');
    // after 500ms update content and add slide-in
    setTimeout(() => {
        mainImage.src = content[0][active];
        title.textContent = content[1][active];
        subtitles.textContent = content[2][active];
        main.classList.remove('slide-out');
        main.classList.add('slide-in');
        // after 500s remove the slide-in effect
        setTimeout(() => {
            main.classList.remove('slide-in');
        }, 500)
    }, 500)
}

leftSlideButton.addEventListener('click', function (e) {
    changeContent(e.target.id);
    nextSlide();
});

rightSlideButton.addEventListener('click', function (e) {
    changeContent(e.target.id);
    nextSlide();
});

menuToggler.addEventListener('click', function () {
    menu.classList.toggle('show');
    menuToggler.classList.toggle('open');
});
