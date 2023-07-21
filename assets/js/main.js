(function () {
    "use strict";

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 1) {
            $('.header').addClass('header-fixed');
        } else {
            $('.header').removeClass('header-fixed');
        }
    });

})()