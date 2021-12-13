$(document).ready(function () {

        new Swiper('.slide-sw-cont', {
            spaceBetween: 55,
            loop: true,
            loopedSlides: 3,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            speed: 1500,

            navigation: {
                nextEl: ".sw-visual-next",
                prevEl: ".sw-visual-prev",
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
});