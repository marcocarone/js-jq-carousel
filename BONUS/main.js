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
    if (event.keyCode == 39 || event.which == 97) {
      sliderNext();
    } else if (event.keyCode == 37 || event.which == 100) {
      sliderPrev();
    }
  });


  $('i.pal01').click(function(){
    $('*').removeClass('active');
    $(this).addClass('active');
    $('img.img1').addClass('active');

  });

  $('i.pal02').click(function(){

    $('*').removeClass('active');
    $(this).addClass('active');
    $('img.img2').addClass('active');

  });

  $('i.pal03').click(function(){
    $('*').removeClass('active');
    $(this).addClass('active');
    $('img.img3').addClass('active');

  });

  $('i.pal04').click(function(){

    $('*').removeClass('active');
    $(this).addClass('active');
    $('img.img4').addClass('active');

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
