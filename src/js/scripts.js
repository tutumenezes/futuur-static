(function ($, window, document, undefined) {

  'use strict';

  document.getElementsByName('email')[0].placeholder='Please fill your email :)';



  $("form :input").focus(function() {
    $("label").addClass("labelfocus");
  }).blur(function() {
    $("label").removeClass("labelfocus");
  });


  $(".sendgrid-subscription-widget").on("success", function (e) {
    // Do something w/ success and activate success lightbox
    $(this).find(".response").addClass("success").html("<img src=\"colon/d/face.png\" alt=\"YAY!\"> " + e.detail);
    $(".lightbox-").addClass("active");
  });

  $(".sendgrid-subscription-widget").on("error", function (e) {
    // Do something w/ error and activate error lightbox

  });


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
