$(document).ready(function () {
    AOS.init({
        once: true
    });
    // 안내창 닫기
    $('.modal').click(function () {
        $('.modal').fadeOut();
    });
    // scroll
    let menuOffset = $('.menu').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > menuOffset.top) {
            $('.menu').addClass('menu-on');
        } else {
            $('.menu').removeClass('menu-on');
        }
    });
    // ---------serch-modal---------
    $('.search-wrap').click(function () {
        $('.serch-modal').stop().slideDown(500);
    });
    $('.serch-modal-close>img ').click(function () {
        $('.serch-modal').stop().slideUp(500);
    });
    let serch_modalOffset = $('.serch-modal').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > serch_modalOffset.top) {
            $('.serch-modal').stop().slideUp(500);
        } else {

        }
    });


    // ------------menu-------------
    $('.gnb').mouseenter(function () {
        $('.depth2').stop().slideDown();
        $('.gnb-line').addClass('gnb-on-line');
        $('.menu-fold').addClass('menu-fold-on');
    });
    $('.gnb').mouseleave(function () {
        $('.depth2').stop().slideUp();
        $('.gnb-line').removeClass('gnb-on-line');
        $('.menu-fold').removeClass('menu-fold-on');
    });








    // -------------main slide------------
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
    // ------common menu click-------
    // product-menu
    $('.product-icon').hover(function () {
        $(this).toggleClass('product-icon-on')
    });
    $('.product-icon').click(function () {
        $(this).toggleClass('product-icon-on')
    });
    // -----------choose---------

    $('.choose-bt1').click(function () {
        $('.choose-1').show();
        $('.choose-2').hide();
    });

    $('.choose-bt2').click(function () {
        $('.choose-1').hide();
        $('.choose-2').show();
    });

    // ----------brand-----------
    new Swiper('.brand-sw-container', {
        loop: true,
        spaceBetween: 50,
        slidesPerView: 5,
        slidesPerGroup: 1,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        // loopedSlides: 2,
        speed: 1000,
    });




});