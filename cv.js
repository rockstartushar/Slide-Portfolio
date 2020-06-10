$('document').ready(function() {
  $('#line1').fadeIn(1000);
  $('#line2').fadeIn(3000);
  $('#line3').show(5000);
  $('.intro-link').click(function() {
    $('#contact').slideUp();
    $('#intro').slideDown();
    $('#projects').slideUp();
    $('#achievements').slideUp();
  });
  $('.achieve-link').click(function() {

    $('#achievements').slideDown();
    $('#intro').slideUp();
    $('#projects').slideUp();
    $('#contact').slideUp();
  });
  $('.project-link').click(function() {
    $('#projects').slideDown();
    $('#intro').slideUp();
    $('#achievements').slideUp();
    $('#contact').slideUp();
  });
  $('.contact-link').click(function() {
    $('#projects').css(display = 'visible');
    $('#contact').slideDown();
    $('#intro').slideUp();
    $('#projects').slideUp();
    $('#achievements').slideUp();
  });
});