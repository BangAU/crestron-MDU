var $=jQuery,win=$(window);function lightcaseInit(){$("a[data-rel*=lightcase]").lightcase()}function homebannerBlur(){function e(){50<$(window).scrollTop()?$(".homebanner").addClass("unblur"):$(".homebanner").removeClass("unblur")}e(),$(window).scroll(function(){e()})}function menuToggle(){function e(){200<$(window).scrollTop()?$(".header").addClass("header-sticky"):$(".header").removeClass("header-sticky")}$(".menu-toggle").click(function(){$(this).hasClass("active")?($(this).removeClass("active"),$(".menu").removeClass("active"),$("body").removeClass("menu-open")):($(this).addClass("active"),$(".menu").addClass("active"),$("body").addClass("menu-open"))}),$(window).scroll(function(){e()}),e()}function scrollDownBtn(){$(".scroll-down").click(function(){const e=$(this).parents(".section"),i=e.offset().top+e.height();$("html, body").stop().animate({scrollTop:i},1e3)})}function simpbetterSlider(){const r=$(".simpbetter__slider"),e=r.siblings(".slider-nav").find(".prev"),i=r.siblings(".slider-nav").find(".next");r.on("init",function(e,i){var s=i.$slides,i=i.$list.width()-110;let n=.32*i,t=.185*i,l=.155*i;var o=[];$(s).each(function(e){$(this).hasClass("slick-active")&&o.push($(this))}),console.log("slidesActive:",o),$(o).each(function(e){r.find(".slick-slide"),0===e||4===e?($(this).addClass("size-sm"),$(this).width(l)):1===e||3===e?($(this).addClass("size-md"),$(this).width(t)):2===e&&($(this).addClass("size-lg"),$(this).width(n))})}),r.on("beforeChange",function(e,i,s,n){console.log(s),console.log(n);var t=i.$slides,i=i.$list.width()-110;let l=.32*i,o=.185*i,a=.155*i;var d=[];$(t).each(function(e){$(this).hasClass("slick-active")&&d.push($(this))}),console.log("slidesActive:",d),r.find(".slick-slide").removeClass("size-sm size-md size-lg"),s<n?$(d).each(function(e){0===e||4===e?($(this).next().addClass("size-sm"),$(this).next().width(a)):1===e||3===e?($(this).next().addClass("size-md"),$(this).next().width(o)):2===e&&($(this).next().addClass("size-lg"),$(this).next().width(l))}):n<s&&$(d).each(function(e){0===e||4===e?($(this).prev().addClass("size-sm"),$(this).prev().width(a)):1===e||3===e?($(this).prev().addClass("size-md"),$(this).prev().width(o)):2===e&&($(this).prev().addClass("size-lg"),$(this).prev().width(l))})}),r.slick({infinite:!1,slidesToShow:5,slidesToScroll:1,variableWidth:!0,draggable:!1,prevArrow:e,nextArrow:i})}function scrollMagicInit(){var e=new ScrollMagic.Controller,i=new TimelineMax,s=document.getElementById("scrollHorizantalHere").offsetWidth,n=window.innerWidth-s,t=s/window.innerHeight*70+"%";i.to(".scroll__horizantal",5,{x:n,ease:Power0.easeNone});new ScrollMagic.Scene({triggerElement:".scroll__horizantal",triggerHook:0,duration:t}).setPin(".scroll__horizantal").setTween(i).addTo(e);console.log(s)}document.addEventListener("DOMContentLoaded",function(){lightcaseInit(),homebannerBlur(),menuToggle(),scrollDownBtn(),simpbetterSlider(),scrollMagicInit()}),win.on("resize",function(){});