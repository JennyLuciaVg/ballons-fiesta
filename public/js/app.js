
$(document).ready(function() {
    console.log( "ready!" );
    $( "#draggable" ).draggable();
});

$(function(){
  //Menu
  $('.navbar-burger').click(function(){
    $(this).toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
  });

  //Modal Galeria
  $('#galeria .column').click(function(){
    var getId = $(this).attr('data-target');
    console.log(getId);
    $(getId).addClass('is-active');
    //Carousel Flickity
    var carouselMainId = getId + ' .carousel-main'
    var carouselNavId = getId + ' .carousel-nav'

    $(carouselMainId).flickity({
      cellAlign: 'center',
      pageDots: false,
      imagesLoaded: true
    });
    // 2nd carousel, navigation
    $(carouselNavId).flickity({
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
  // $('#sortable1, #sortable2').h5s();
  // $('#sortable3').h5s({
  //   items: ':not(.disabled)'
  // });
  // $('#sortable-with-handles').h5s({
  //   handle: '.handle'
  // });
  $('#sortable4, #sortable5, #sortable6, #sortable7').h5s({
    connectWith: '.connected'
  });

});
