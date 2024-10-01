function fullheight() {
  var vh = $(window).height();
  console.log("fullheight function called, vh: " + vh);
  $(".header-photo").css({ "height": vh + "px" });
}

function scrolling() {
  var postitle = $(".article").offset().top;
  var heighttitle = $(".article").height();
  var plus = 20;
  var heighttitleplus = heighttitle + plus;
  var vh = $(window).height();
  var scrolled;
  var marginscroll = 60 + heighttitleplus;

  $(window).scroll(function () {
    scrolled = $(window).scrollTop();
    console.log("scrolling function called, scrolled: " + scrolled);

    if (scrolled >= postitle) {
      $(".article").css({
        "position": "fixed",
        "top": "0px",
        "bottom": "auto"
      });
    } else {
      $(".article").css({
        "position": "absolute",
        "top": "auto",
        "bottom": "120px"
      });
    }

    if (scrolled >= (vh - heighttitleplus)) {
      $(".header-photo").css({
        "position": "fixed",
        "top": -(vh - heighttitleplus) + "px"
      });
      $(".container-text").css({
        "margin-top": (vh + 60) + "px"
      });
    } else {
      $(".header-photo").css({
        "position": "relative",
        "top": "auto"
      });
      $(".container-text").css({
        "margin-top": (60) + "px"
      });
    }
  });
}

function parallax() {
  var docheight = $(document).height();
  var scrolled;

  $(window).scroll(function () {
    scrolled = $(window).scrollTop();
    console.log("parallax function called, scrolled: " + scrolled);
    $(".header-photo").css({
      "background-position": "50% " + ((scrolled / docheight) * 100) + "%"
    });
  });
}

$(document).ready(function () {
  console.log("Document ready");
  fullheight();
  scrolling();
  parallax();
});

$(window).resize(function () {
  console.log("Window resize");
  fullheight();
  scrolling();
  parallax();
});
