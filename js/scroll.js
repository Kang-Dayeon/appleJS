//헤더메뉴 슬라이드
$(window).on('scroll', function(){
    if($(window).scrollTop() > 100){
        $('.nav-menu').addClass('nav-background');
        $('.logo').addClass('logo-size');
        $('.menu').addClass('menu-size');
    } else {
        $('.nav-menu').removeClass('nav-background');
        $('.logo').removeClass('logo-size');
        $('.menu').removeClass('menu-size');
    }
});