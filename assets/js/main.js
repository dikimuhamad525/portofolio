(function () {
    "use strict";

    $(window).on('load', function () {
        setTimeout(function () {
            $('.loading').hide();
            $('.main-content').fadeIn(1000);
            AOS.init({
                duration: 700,
                easing: "ease-in-out",
                once: true,
                mirror: false
            });
        }, 2000);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').css('display', 'flex');
        } else {
            $('.back-to-top').css('display', 'none');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 1) {
            $('.header').addClass('header-fixed');
        } else {
            $('.header').removeClass('header-fixed');
        }
    });

    $(document).ready(function () {
        var date = new Date().getFullYear();
        var bd = 2004;

        $('.age').append(date - bd);
    });

})()