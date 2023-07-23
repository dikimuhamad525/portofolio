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
        var sections = $('section');
        var navLinks = $('.navbar a');

        navLinks.click(function (e) {
            e.preventDefault();

            var target = $(this).attr('href');
            var targetPosition = $(target).offset().top;

            $('html, body').animate({
                scrollTop: targetPosition
            }, 800);
        });

        $(window).scroll(function () {
            var currentScroll = $(this).scrollTop();

            var currentSection = sections.filter(function () {
                return ($(this).offset().top - currentScroll) <= $(window).height() / 2;
            }).last();

            var activeSectionId = currentSection.attr('id');

            navLinks.removeClass('active');

            $('.navbar a[href="#' + activeSectionId + '"]').addClass('active');
        });
    });

    $('.toggle-nav').click(function() {
        $(this).toggleClass('toggle-active');
        $('.navbar').toggleClass('nav-resp');
        $('section').toggleClass('blur');
    });

    $(document).ready(function () {
        var date = new Date().getFullYear();
        var bd = 2004;

        $('.age').append(date - bd);
    });

})()