$(document).ready(function() {
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 100){
            $('.header__inner').addClass('header__background');
            $('.header').addClass('header__size');
        } else {
            $('.header__inner').removeClass('header__background');
            $('.header').removeClass('header__size');
        }
    });
    $('.header__menu').on('click', function(){
        $('.nav').addClass('active');
        $('body').addClass('is-active');
    });
    $('.nav__close').on('click', function(){
        $('.nav').removeClass('active');
        $('body').removeClass('is-active');
    });
    $('.nav').on('click', function(e){
        if(e.target == e.currentTarget){
            $('.nav').removeClass('active');
            $('body').removeClass('is-active');
        }
    });
});