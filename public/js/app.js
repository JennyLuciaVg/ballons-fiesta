
$(document).ready(function() {
    console.log( "ready!" );
    $( "#draggable" ).draggable();
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

$(function() {
  $('#sortable1, #sortable2').h5s();
  $('#sortable3').h5s({
    items: ':not(.disabled)'
  });
  $('#sortable-with-handles').h5s({
    handle: '.handle'
  });
  $('#sortable4, #sortable5').h5s({
    //connectWith: '.connected'
  });
});
