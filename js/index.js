$('.hamburger').on('click', function(){
  //  if($('.menu').hasClass('open')){
    //    $('.menu').removeClass('open');
    //}   else{
      //  $('.menu').addClass('open');
    //}
  $('.menu').toggleClass('open')
});
$('#we_do_conteiner_of_conteiners #content_conteiner').mouseover(function(){
     $('#advertisement',this).css('color', '#18cfab');
});
$('#we_do_conteiner_of_conteiners #content_conteiner').mouseleave(function(){
     $('#advertisement',this).css('color', '#717171');
});
$(function() {
    $('.main_menu').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 2000);
        }
    });
});
$('#our_history').on('click', function(){
     $(this).css('box-shadow', '0 2px #717171');
});
$('#our_biography').on('click', function(){
     $(this).css('box-shadow', '0 2px #717171');
});
$('#our_skills').on('click', function(){
         $(this).css('box-shadow', '0 2px #717171');
         
});