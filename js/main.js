(function($) {

  $(function() {

    $('body').height($(window).height());

    $('.slide h1').css('marginTop', ($(window).height() - 30) / 2);

    setTimeout(function() {
      $('.slide').addClass('show');

      setTimeout(function() {
        $('.slide').removeClass('show');
      }, 10000);
    }, 2000);

  });

})(jQuery);