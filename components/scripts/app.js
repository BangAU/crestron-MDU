var $ = jQuery;
var win = $(window);

'use strict';

document.addEventListener('DOMContentLoaded', function () {
    lightcaseInit()
    homebannerBlur()
    homebannerSlide()
    menuToggle()
    scrollDownBtn()
    simpbetterSlider()
    scrollMagicInit()
});

//function called on window resize
win.on('resize', function () {});


/*****  Declare your functions here  ********/

function lightcaseInit() {
    $('a[data-rel*=lightcase]').lightcase();
}

function homebannerBlur() {
    function blurRemoval() {
        if ($(window).scrollTop() > 50) {
            $('.homebanner').addClass('unblur')
        } else {
            $('.homebanner').removeClass('unblur')
        }
    }

    blurRemoval()
    $(window).scroll(function () {
        blurRemoval()
    })
}

function homebannerSlide() {
    gsap.registerPlugin(ScrollTrigger);

    let masks = gsap.utils.toArray(".img-mask");

    gsap.to(masks[1], {
        width: "0%",
        ease: "none",
        scrollTrigger: {
            trigger: ".homebanner",
            start: "top top",
            pin: true,
            end: "+=100%",
            scrub: 0.5
        }
    });
}

function menuToggle() {
    $('.menu-toggle').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
            $('.menu').removeClass('active')
            $('body').removeClass('menu-open')
        } else {
            $(this).addClass('active')
            $('.menu').addClass('active')
            $('body').addClass('menu-open')
        }
    })

    function headerScroll() {
        if ($(window).scrollTop() > ($(window).height() * 1.25)) {
            $('.header').addClass('header-sticky')
        } else {
            $('.header').removeClass('header-sticky')
        }
    }

    $(window).scroll(function () {
        headerScroll()
    })

    headerScroll()
}

function scrollDownBtn() {
    $('.scroll-down').click(function () {
        const currentSection = $(this).parents('.section'),
            scrollTo = currentSection.offset().top + currentSection.height();

        $('html, body').stop().animate({
            scrollTop: scrollTo
        }, 1000);
    })
}


function simpbetterSlider() {
    const textSlider = $('.simpbetter__textblock-slider');

    const sliderObj = $('.simpbetter__slider'),
        prev = sliderObj.siblings('.slider-nav').find('.prev'),
        next = sliderObj.siblings('.slider-nav').find('.next');

    let maxSlides = 5;

    sliderObj.slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        // variableWidth: true,
        draggable: false,
        centerMode: true,
        prevArrow: prev,
        nextArrow: next,
        asNavFor: '.simpbetter__textblock-slider',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }]
    });

    textSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        draggable: false,
        asNavFor: '.simpbetter__slider'
    });


}

function scrollMagicInit() {

    var controller = new ScrollMagic.Controller();

    var tl = new TimelineMax();

    var elementWidth = document.getElementById('scrollHorizantalHere').offsetWidth;

    var width = window.innerWidth - elementWidth;

    var duration = elementWidth / window.innerHeight * 70;

    var official = duration + '%';

    tl
        .to('.scroll__horizantal', 5, {
            x: width,
            ease: Power0.easeNone
        });

    var scene1 = new ScrollMagic.Scene({
            triggerElement: '.scroll__horizantal',
            triggerHook: 0,
            duration: official
        })
        .setPin('.scroll__horizantal')
        .setTween(tl)
        .addTo(controller);

    console.log(elementWidth);

}