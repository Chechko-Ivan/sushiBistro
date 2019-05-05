$(document).ready(function() {
  $(".top-slider_list").slick({
    prevArrow: $(".top-slider .slider_arrow--prev"),
    nextArrow: $(".top-slider .slider_arrow--next")
  });

  $(".stepper").inputSpinner();
  $("#burger").click(toggleMenu);
  $(".nav-overlay").click(toggleMenu);

  function toggleMenu(e) {
    var nav = $(".nav");
    var burger = $("#burger");
    var overlay = $(".nav-overlay");

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
