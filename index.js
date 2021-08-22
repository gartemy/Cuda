$(document).ready(() => {
  // Greeting appearance animation
  $('.greeting__title, .greeting__button').hide().slideToggle(2000);

  // Burger Menu animation (show)
  $('.navbar-toggler').on('click', () => {
    $('.animated-icon').toggleClass('open');
    $('.header').toggleClass('active');
    $('body').toggleClass('lock');
  });

  // Burger Menu animation (hide)
  $('.nav-link').on('click', () => {
    $('.animated-icon').removeClass('open');
    $('.header').removeClass('active');
    $('.navbar-collapse').collapse('hide');
    $('body').removeClass('lock');
  });

  // Arrow-up animation
  $(window).scroll(() => {
    if ($(this).scrollTop() > 661) {
      $('.arrow-up').css('display', 'flex');
      $('.arrow-up').fadeIn();
    } else {
      $('.arrow-up').fadeOut();
    }
  });
});
