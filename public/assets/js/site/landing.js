"use strict";

// image generator section
var slider1 = new Swiper('.slider1', {
    direction: 'horizontal',
    loop: false,
    allowTouchMove:false,
    autoplayDisableOnInteraction: false,
    paginationClickable: true,
    speed: 1000,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    slide:true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
  });

// header section
var slider3 = new Swiper(".slider3", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2300,
        disableOnInteraction: false,
      },
  });

// wow animation integration
new WOW().init();

// faq accordion
$(document).ready(function(){
  $('.dropdown-click').on("click",function(event){
      event.stopPropagation();
       $(".drop-down").slideToggle(200);
  });
  $(".drop-down").on("click", function (event) {
      event.stopPropagation();
  });
});
$(document).on("click", function () {
  $(".drop-down").hide();
});