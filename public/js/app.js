
$(document).ready(function() {
    console.log( "ready!" );
});

$(function(){
  $('.navbar-burger').click(function(){
    $(this).toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
  });

  $('#galeria .column').click(function(){
    $('.modal').addClass('is-active');
    //Carousel Flickity
    $('.carousel-main').flickity({
      cellAlign: 'center',
      pageDots: false,
      imagesLoaded: true
    });
    // 2nd carousel, navigation
    $('.carousel-nav').flickity({
      asNavFor: '.carousel-main',
      contain: true,
      pageDots: false,
      prevNextButtons: false
    });
  });

  $('.modal-close').click(function(){
    $('.modal').removeClass('is-active');
  });



});
