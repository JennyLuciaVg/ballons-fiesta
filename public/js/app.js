
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

  //Funcionalidad de cotizar
  $('#sortable4, #sortable5, #sortable6, #sortable7').h5s({
    connectWith: '.connected'
  });

});

$(function(){
  //Animaciones en el website con wowjs
  var wow = new WOW(
    {
      boxClass:'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    }
  );
  wow.init();
});
