$(document).ready( function() {

     $(window).resize(function (e) {
        e.preventDefault();
        if ($(window).width() > 782) {
            $('.header__mobile-visible').removeClass('header__mobile-visible--active');
        }
    });

    $('.header__button-mobile').on('click', function(e){
        e.preventDefault();
        $('.header__mobile-visible').addClass('header__mobile-visible--active');
    });

    $('.header__close').on('click', function(e){
        e.preventDefault();
        $('.header__mobile-visible').removeClass('header__mobile-visible--active');
    });

    $('.main__button').on('click', function(){
        $('.main__arrow').toggleClass('main__arrow-active');
        $('.main__button').toggleClass('main__button-active');
        $('.main__box').toggleClass('main__box-active');
    });

    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
         },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
});