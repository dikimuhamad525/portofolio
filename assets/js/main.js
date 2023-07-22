(function () {
    "use strict";

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 1) {
            $('.header').addClass('header-fixed');
        } else {
            $('.header').removeClass('header-fixed');
        }
    });

    $(document).ready(function() {
        var date = new Date().getFullYear();
        var bd = 2004;

        $('.age').append(date-bd);
    });

})()