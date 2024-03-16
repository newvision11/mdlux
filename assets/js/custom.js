(function ($) {
  /* Fixed header nav */
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      var headerHeight = document.querySelector(".top-header").offsetHeight;
      if ($(window).width() >= 992) {
        if (window.scrollY > headerHeight) {
          document.getElementById("masthead").classList.add("fixed-header");
        } else {
          document.getElementById("masthead").classList.remove("fixed-header");
        }
      } else {
        var bottomheaderHeight =
          document.querySelector(".bottom-header").offsetHeight;
        var mobileheaderHeight = headerHeight + bottomheaderHeight;
        if (window.scrollY > mobileheaderHeight) {
          document.getElementById("masthead").classList.add("fixed-header");
        } else {
          document.getElementById("masthead").classList.remove("fixed-header");
        }
      }
    });
  });

  /* Home client slider */
  $(".client-slider").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 5,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  /* Home testimonial slider */
  $(".testimonial-slider").slick({
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    prevArrow: false,
    nextArrow: false,
  });

  $(window).scroll(function () {
    /* back to top */
    if ($(this).scrollTop() > 300) {
      $("#backTotop").fadeIn(200);
    } else {
      $("#backTotop").fadeOut(200);
    }
  });
  /* back to top */
  $("#backTotop").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  $(document).ready(function () {
    /* Count down */
    loopcounter("time-counter");
  });

  /* Tour detail slider */
  $(".single-tour-slider").slick({
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 1200,
    slidesToShow: 2,
    adaptiveHeight: false,
    prevArrow: false,
    nextArrow: false,
  });

  /* Home Travel Choice slider */

  /* preloader */
  $(window).load(function () {
    $("#siteLoader").fadeOut(500);

    MasonryGrid();
  });

  $(document).resize(function () {
    MasonryGrid();
  });

  // price handel
  $("#slider-range").slider({
    range: "max",
    min: 0,
    max: 1000,
    value: 500,
    slide: function (event, ui) {
      $("#maxAmount").val(ui.value);
    },
  });
  $("#maxAmount").val($("#slider-range").slider("value"));

  /* popup video */

  /* counter up*/
  $(".counter").counterUp();

  // cart page input increasing order
})(jQuery);
