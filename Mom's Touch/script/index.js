$(function(){

    //헤더 메뉴 슬라이드
    $('header nav ul').mouseenter(function(){
        $('header nav #headerBg ol').delay(300).fadeIn();
        $('header nav #headerBg').slideDown();
    });

    $('header nav #headerBg').mouseleave(function(){
        $('header nav #headerBg ol').fadeOut();
        $('header nav #headerBg').delay(200).slideUp();
    });


    // 빅 배너 자동 슬라이드
    setInterval(function(){
        $('#bigBanner #sliderBox').animate({marginLeft:"-100%"},function(){
            $('#bigBanner #sliderBox div').first().appendTo('#bigBanner #sliderBox');
            $('#bigBanner #sliderBox').css({marginLeft:0});
        });
    },4000);

    // 메뉴 슬라이드 버튼
    $('#sideUxSlide #slider a#btnR').click(function(){
        $('#sideUxSlide #slider #sliderBox ol li').first().appendTo('#sideUxSlide #slider #sliderBox ol');
        $('#sideUxSlide #slider #sliderBox ol li').hide().fadeIn();
        return false;
    });

    $('#sideUxSlide #slider a#btnL').click(function(){
        $('#sideUxSlide #slider #sliderBox ol li').last().prependTo('#sideUxSlide #slider #sliderBox ol');
        $('#sideUxSlide #slider #sliderBox ol li').hide().fadeIn();
        return false;
    });

});