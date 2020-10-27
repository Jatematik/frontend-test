$(document).ready( function() {


    $('.header__button-mobile').on('click', function(e){
        e.preventDefault();
        $('.header__mobile-visible').addClass('header__mobile-visible--active');
    });
});