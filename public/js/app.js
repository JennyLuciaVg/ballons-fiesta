
$(document).ready(function() {
    console.log( "ready!" );
});

$(function(){
  $('.navbar-burger').click(function(){
    $(this).toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
  });

  $('#galeria .column').click(function(){
    $('#modal').addClass('is-active');
  });

  $('.modal-close').click(function(){
    $('.modal').removeClass('is-active');
  });

});
