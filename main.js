$(document).ready(function() {

  $(".next").click(
    function() {
      sliderNext();
    });

  $(".prev").click(
    function() {
      sliderPrev();
    });


  $(document).keydown(function() {
    if (event.keyCode == 39) {
      sliderNext();
    } else if (event.keyCode == 37) {
      sliderPrev();
    } else if (event.which == 97) {
      sliderNext();
    } else if (event.which == 100) {
      sliderPrev();
    }
  });

  });


// FUNZIONI SLIDER
  function sliderNext() {
    var imgActive = $("img.active");
    var imgNext = imgActive.next();
    var circleActive = $("i.active");
    var circleNext = circleActive.next();
    if (imgActive.hasClass("last") == true) {
      circleActive.removeClass("active");
      $("i.first").addClass("active");
      imgActive.removeClass("active");
      $("img.first").addClass("active");
    } else {
      imgActive.removeClass("active");
      imgNext.addClass("active");
      circleActive.removeClass("active");
      circleNext.addClass("active");
    }
  }

  function sliderPrev() {
    var imgActive = $("img.active");
    var imgPrev = imgActive.prev();
    var circleActive = $("i.active");
    var circlePrev = circleActive.prev();
    if (imgActive.hasClass("first") == true) {
      circleActive.removeClass("active");
      $("i.last").addClass("active");
      imgActive.removeClass("active");
      $("img.last").addClass("active");
    } else {
      imgActive.removeClass("active");
      imgPrev.addClass("active");
      circleActive.removeClass("active");
      circlePrev.addClass("active");
    }
  }
