$(document).ready(function() {
  AOS.init({
    duration: 1200,
    once: true
  });

  if ($(".top-slider_list").length) {
    $(".top-slider_list").slick({
      prevArrow: $(".top-slider .slider_arrow--prev"),
      nextArrow: $(".top-slider .slider_arrow--next")
    });
  }

  if ($(".addition_slider-wrapper").length) {
    $(".addition_slider-wrapper").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2500,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }

  if ($(".main_small-cards-wrapper").length) {
    $(".main_small-cards-wrapper").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }

  $(".stepper").inputSpinner();
  $("#burger").click(toggleMenu);
  $(".nav-overlay").click(toggleMenu);

  function toggleMenu(e) {
    var nav = $(".nav");
    var burger = $("#burger");
    var overlay = $(".nav-overlay");

    $("body").toggleClass("body--active-menu");
    $("html").toggleClass("body--active-menu");
    burger.toggleClass("burger--active");
    nav.toggleClass("nav--active");
    overlay.toggleClass("nav-overlay--active");
  }

  $(".top-slider_link img").each(function() {
    var path = $(this).attr("src");
    var d = $(this).closest("a");

    d.css({
      background: "url(" + path + ") center no-repeat",
      "-webkit-background-size": "cover",
      "background-size": "cover"
    });
  });

  $("#callToAction").inputmask({ mask: "+375 (99) 999 99 99" });
});
