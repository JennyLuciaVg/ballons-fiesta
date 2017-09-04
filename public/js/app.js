
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


});

$(function(){

  //Funcionalidad de cotizar
  $('#sortable4, #sortable5, #sortable6, #sortable7').h5s({
    connectWith: '.connected'
  });
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

$(function(){
  var title_left_pink = bodymovin.loadAnimation(
    {
      container: document.getElementById('serp_title_left_pink'),
      renderer: 'svg',
      //animType: 'html',
      loop: true,
      autoplay: true,
      path: 'js/serpentina/serp_title_left_pink.json'
    }
  );
  var title_right_pink = bodymovin.loadAnimation(
    {
      container: document.getElementById('serp_title_right_pink'),
      renderer: 'svg',
      //animType: 'html',
      loop: true,
      autoplay: true,
      path: 'js/serpentina/serp_title_right_pink.json'
    }
  );
  var title_left_purple = bodymovin.loadAnimation(
    {
      container: document.getElementById('serp_title_left_purple'),
      renderer: 'svg',
      //animType: 'html',
      loop: true,
      autoplay: true,
      path: 'js/serpentina/serp_title_left_purple.json'
    }
  );
  var title_right_purple = bodymovin.loadAnimation(
    {
      container: document.getElementById('serp_title_right_purple'),
      renderer: 'svg',
      //animType: 'html',
      loop: true,
      autoplay: true,
      path: 'js/serpentina/serp_title_right_purple.json'
    }
  );
  var title_left_cyan = bodymovin.loadAnimation(
    {
      container: document.getElementById('serp_title_left_cyan'),
      renderer: 'svg',
      //animType: 'html',
      loop: true,
      autoplay: true,
      path: 'js/serpentina/serp_title_left_cyan.json'
    }
  );
  var title_right_cyan = bodymovin.loadAnimation(
    {
      container: document.getElementById('serp_title_right_cyan'),
      renderer: 'svg',
      //animType: 'html',
      loop: true,
      autoplay: true,
      path: 'js/serpentina/serp_title_right_cyan.json'
    }
  );
});
