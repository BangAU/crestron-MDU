var $ = jQuery;
var win = $(window);

("use strict");

document.addEventListener("DOMContentLoaded", function () {
  lightcaseInit();
  homebannerBlur();
  menuToggle();
  scrollDownBtn();
  simpbetterSlider();
  scrollMagicInit();
});

//function called on window resize
win.on("resize", function () {});

/*****  Declare your functions here  ********/

function lightcaseInit() {
  $("a[data-rel*=lightcase]").lightcase();
}

function homebannerBlur() {
  function blurRemoval() {
    if ($(window).scrollTop() > 50) {
      $(".homebanner").addClass("unblur");
    } else {
      $(".homebanner").removeClass("unblur");
    }
  }

  blurRemoval();
  $(window).scroll(function () {
    blurRemoval();
  });
}

function menuToggle() {
  $(".menu-toggle").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".menu").removeClass("active");
      $("body").removeClass("menu-open");
    } else {
      $(this).addClass("active");
      $(".menu").addClass("active");
      $("body").addClass("menu-open");
    }
  });

  function headerScroll() {
    if ($(window).scrollTop() > 200) {
      $(".header").addClass("header-sticky");
    } else {
      $(".header").removeClass("header-sticky");
    }
  }

  $(window).scroll(function () {
    headerScroll();
  });

  headerScroll();
}

function scrollDownBtn() {
  $(".scroll-down").click(function () {
    const currentSection = $(this).parents(".section"),
      scrollTo = currentSection.offset().top + currentSection.height();

    $("html, body").stop().animate(
      {
        scrollTop: scrollTo,
      },
      1000
    );
  });
}

function simpbetterSlider() {
  const sliderObj = $(".simpbetter__slider"),
    prev = sliderObj.siblings(".slider-nav").find(".prev"),
    next = sliderObj.siblings(".slider-nav").find(".next");

  let maxSlides = 5;

  sliderObj.on("init", function (event, slick) {
    var slides = slick.$slides,
      slickList = slick.$list;

    var listSize = slickList.width() - 22 * maxSlides;

    let sizeLg = listSize * 0.32,
      sizeMd = listSize * 0.185,
      sizeSm = listSize * 0.155;

    var slidesActive = [];

    $(slides).each(function (i) {
      if ($(this).hasClass("slick-active")) {
        slidesActive.push($(this));
      }
    });

    console.log("slidesActive:", slidesActive);

    $(slidesActive).each(function (i) {
      sliderObj.find(".slick-slide");

      if (i === 0 || i === maxSlides - 1) {
        $(this).addClass("size-sm");
        $(this).width(sizeSm);
      } else if (i === 1 || i === 3) {
        $(this).addClass("size-md");
        $(this).width(sizeMd);
      } else if (i === 2) {
        $(this).addClass("size-lg");
        $(this).width(sizeLg);
      }
    });
  });

  sliderObj.on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      console.log(currentSlide);
      console.log(nextSlide);

      var slides = slick.$slides,
        slickList = slick.$list;

      var listSize = slickList.width() - 22 * maxSlides;

      let sizeLg = listSize * 0.32,
        sizeMd = listSize * 0.185,
        sizeSm = listSize * 0.155;

      var slidesActive = [];

      $(slides).each(function (i) {
        if ($(this).hasClass("slick-active")) {
          slidesActive.push($(this));
        }
      });

      console.log("slidesActive:", slidesActive);
      sliderObj.find(".slick-slide").removeClass("size-sm size-md size-lg");

      if (currentSlide < nextSlide) {
        $(slidesActive).each(function (i) {
          if (i === 0 || i === maxSlides - 1) {
            $(this).next().addClass("size-sm");
            $(this).next().width(sizeSm);
          } else if (i === 1 || i === 3) {
            $(this).next().addClass("size-md");
            $(this).next().width(sizeMd);
          } else if (i === 2) {
            $(this).next().addClass("size-lg");
            $(this).next().width(sizeLg);
          }
        });
      } else if (currentSlide > nextSlide) {
        $(slidesActive).each(function (i) {
          if (i === 0 || i === maxSlides - 1) {
            $(this).prev().addClass("size-sm");
            $(this).prev().width(sizeSm);
          } else if (i === 1 || i === 3) {
            $(this).prev().addClass("size-md");
            $(this).prev().width(sizeMd);
          } else if (i === 2) {
            $(this).prev().addClass("size-lg");
            $(this).prev().width(sizeLg);
          }
        });
      }
    }
  );

  sliderObj.slick({
    infinite: true,
    slidesToShow: maxSlides,
    slidesToScroll: 1,
    variableWidth: true,
    draggable: false,
    // centerMode: true,
    infinite: false,
    prevArrow: prev,
    nextArrow: next,
  });
}

function scrollMagicInit() {
  var controller = new ScrollMagic.Controller();

  var tl = new TimelineMax();

  var elementWidth = document.getElementById(
    "scrollHorizantalHere"
  ).offsetWidth;

  var width = window.innerWidth - elementWidth;

  var duration = (elementWidth / window.innerHeight) * 70;

  var official = duration + "%";

  tl.to(".scroll__horizantal", 5, {
    x: width,
    ease: Power0.easeNone,
  });

  var scene1 = new ScrollMagic.Scene({
    triggerElement: ".scroll__horizantal",
    triggerHook: 0,
    duration: official,
  })
    .setPin(".scroll__horizantal")
    .setTween(tl)
    .addTo(controller);

  console.log(elementWidth);
}
