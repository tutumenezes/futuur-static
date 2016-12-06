(function ($, window, document, undefined) {

  'use strict';

  $(function () {
   
    var header = $('.header');
    var baseheader = $('._header-base-wrapper');
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
					header.addClass('scrolled');
					baseheader.addClass('medium-gradient');
        } else {
					header.removeClass('scrolled');
					baseheader.removeClass('medium-gradient');
        }
			});
  });


})(jQuery, window, document);
