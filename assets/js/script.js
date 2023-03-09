AOS.init();

$(window).scroll(function () {
  var counted = 0;

  var oTop = $("#counter").offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $(".count").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
    counted = 1;
  }
});

$(".open-overlay").click(function () {
  var overlay_navigation = $(".overlay-navigation"),
    nav_item_1 = $("nav li:nth-of-type(1)"),
    nav_item_2 = $("nav li:nth-of-type(2)"),
    nav_item_3 = $("nav li:nth-of-type(3)"),
    nav_item_4 = $("nav li:nth-of-type(4)"),
    nav_item_5 = $("nav li:nth-of-type(5)"),
    top_bar = $(".bar-top"),
    middle_bar = $(".bar-middle"),
    bottom_bar = $(".bar-bottom");

  overlay_navigation.toggleClass("overlay-active");
  if (overlay_navigation.hasClass("overlay-active")) {
    top_bar.removeClass("animate-out-top-bar").addClass("animate-top-bar");
    middle_bar
      .removeClass("animate-out-middle-bar")
      .addClass("animate-middle-bar");
    bottom_bar
      .removeClass("animate-out-bottom-bar")
      .addClass("animate-bottom-bar");
    overlay_navigation
      .removeClass("overlay-slide-up")
      .addClass("overlay-slide-down");
    nav_item_1
      .removeClass("slide-in-nav-item-reverse")
      .addClass("slide-in-nav-item");
    nav_item_2
      .removeClass("slide-in-nav-item-delay-1-reverse")
      .addClass("slide-in-nav-item-delay-1");
    nav_item_3
      .removeClass("slide-in-nav-item-delay-2-reverse")
      .addClass("slide-in-nav-item-delay-2");
    nav_item_4
      .removeClass("slide-in-nav-item-delay-3-reverse")
      .addClass("slide-in-nav-item-delay-3");
    nav_item_5
      .removeClass("slide-in-nav-item-delay-4-reverse")
      .addClass("slide-in-nav-item-delay-4");
  } else {
    top_bar.removeClass("animate-top-bar").addClass("animate-out-top-bar");
    middle_bar
      .removeClass("animate-middle-bar")
      .addClass("animate-out-middle-bar");
    bottom_bar
      .removeClass("animate-bottom-bar")
      .addClass("animate-out-bottom-bar");
    overlay_navigation
      .removeClass("overlay-slide-down")
      .addClass("overlay-slide-up");
    nav_item_1
      .removeClass("slide-in-nav-item")
      .addClass("slide-in-nav-item-reverse");
    nav_item_2
      .removeClass("slide-in-nav-item-delay-1")
      .addClass("slide-in-nav-item-delay-1-reverse");
    nav_item_3
      .removeClass("slide-in-nav-item-delay-2")
      .addClass("slide-in-nav-item-delay-2-reverse");
    nav_item_4
      .removeClass("slide-in-nav-item-delay-3")
      .addClass("slide-in-nav-item-delay-3-reverse");
    nav_item_5
      .removeClass("slide-in-nav-item-delay-4")
      .addClass("slide-in-nav-item-delay-4-reverse");
  }
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// back-to-top

var mybutton = document.getElementById("back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(document).ready(function () {
  $(".someMarquee").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    speed: 15000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// Slider Video Play Button
const video = document.getElementById("my-video");
const button = document.getElementById("play-button");

button.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
