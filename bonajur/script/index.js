$(function(){
    $('header nav ul#gnb > li').hover(function(){
        $('ul#subMenu').stop().slideDown();
        $('#subMenuSlide').stop().animate({height:300});
    }, function(){
        $('ul#subMenu').stop().slideUp();
        $('#subMenuSlide').stop().animate({height:0});
    });

});