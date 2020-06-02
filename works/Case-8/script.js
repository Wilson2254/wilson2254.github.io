$(function() {
  $('.toggles button').click(function(){
    var get_id = this.id;
    var get_current = $('.posts .' + get_id);

    $('.post').not(get_current).hide(500);
    get_current.show(500);
  });

  $('#showall').click(function() {
    $('.post').show(500);
  });
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:6
  });
});

if($(window).width() < 550){
  $(".owl-carousel").owlCarousel({
    items:2
  });
}

if($(window).width() < 1000){
  $(".owl-carousel").owlCarousel({
    items:4
  });
}
