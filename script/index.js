$(function(){
    //좌측 사이드 메뉴 스크롤 
    $('ol#sideUx li').eq(0).click(function(){
        $('html, body').animate({scrollTop:0},400);
    });

    $('ol#sideUx li').eq(1).click(function(){
        let wh = $(window).height();
        $('html, body').animate({scrollTop: wh});
    });

    $('ol#sideUx li').eq(2).click(function(){
        let wh = $(window).height() * 2;
        $('html, body').animate({scrollTop: wh});
    });

    $('ol#sideUx li').eq(3).click(function(){
        let wh = $(window).height() * 3;
        $('html, body').animate({scrollTop: wh});
    });

    $('ol#sideUx li').eq(4).click(function(){
        let wh = $(window).height() * 3 + 2700;
        $('html, body').animate({scrollTop: wh});
    });

    $('ol#sideUx li').eq(5).click(function(){
        let wh = $(window).height() * 14;
        $('html, body').animate({scrollTop: wh});
    });

    //스크롤 위치로 사이드 메뉴 활성화
    $(window).scroll(function(){
        let scroll = $(this).scrollTop();
        let wh = $(this).height();

        if (scroll < wh - 400 ){
            $('li#sideux-main').addClass('menuActive');
            $('li#sideux-design').removeClass('menuActive');
            $('li#sideux-contact').removeClass('menuActive');

        } else if ( wh - 400 <= scroll && scroll < wh*2 - 380) {
            $('li#sideux-main').removeClass('menuActive');
            $('li#sideux-design').addClass('menuActive');
            $('li#sideux-publishing').removeClass('menuActive');

        } else if ( wh*2 - 380 <= scroll && scroll < wh*3 - 380) {
            $('li#sideux-main').removeClass('menuActive');
            $('li#sideux-design').removeClass('menuActive');
            $('li#sideux-publishing').addClass('menuActive');
            $('li#sideux-about').removeClass('menuActive');

        } else if ( wh*3 -380 <= scroll && scroll < wh*3+2400) {
            $('li#sideux-main').removeClass('menuActive');
            $('li#sideux-publishing').removeClass('menuActive');
            $('li#sideux-about').addClass('menuActive');
            $('li#sideux-epilogue').removeClass('menuActive');

        } else if ( wh*3+2400 <= scroll && scroll < wh*13 - 400 ) {
            $('li#sideux-main').removeClass('menuActive');
            $('li#sideux-about').removeClass('menuActive');
            $('li#sideux-epilogue').addClass('menuActive');
            $('li#sideux-contact').removeClass('menuActive');

        } else if ( wh*13 - 400 <= scroll ) {
            $('li#sideux-main').removeClass('menuActive');
            $('li#sideux-epilogue').removeClass('menuActive');
            $('li#sideux-contact').addClass('menuActive');
        }
    });
    
    //우측 상단의 버거 버튼 toggleClass 효과 + 메뉴 슬라이드 fade in/out
    $('header nav #menu span').click(function(){
        if($(this).hasClass('menu')) {
            $(this).removeClass('menu');
            $('#menuSlide').fadeOut(400);
        } else {
            $(this).addClass('menu');
            $('#menuSlide').fadeIn(300);
        }
        return false;
    });

    //모달창 메뉴 li를 누르면 메뉴슬라이드가 사라짐(4s)
    $('#menuSlide li').click(function(){
        $('header nav #menu span').removeClass('menu');
        $('#menuSlide').fadeOut(400);
    });

    //모달창 메뉴 li를 누르면 해당 페이지로 스크롤 이동(1s)
    $('#menuSlide li').eq(0).click(function(){
        $('html, body').animate({scrollTop:0},100);
        $('header nav #menu span').removeClass('menu');
    });

    $('#menuSlide li').eq(1).click(function(){
        let wh = $(window).height();
        $('html, body').animate({scrollTop: wh},100);
        $('header nav #menu span').removeClass('menu');
    });

    $('#menuSlide li').eq(2).click(function(){
        let wh = $(window).height() * 2;
        $('html, body').animate({scrollTop: wh},100);
        $('header nav #menu span').removeClass('menu');
    });

    $('#menuSlide li').eq(3).click(function(){
        let wh = $(window).height() * 3;
        $('html, body').animate({scrollTop: wh},100);
        $('header nav #menu span').removeClass('menu');
    });

    $('#menuSlide li').eq(4).click(function(){
        let wh = $(window).height() * 3 + 2700;
        $('html, body').animate({scrollTop: wh},100);
        $('header nav #menu span').removeClass('menu');
    });

    $('#menuSlide li').eq(5).click(function(){
        let wh = $(window).height() * 13 + 500;
        $('html, body').animate({scrollTop: wh},100);
        $('header nav #menu span').removeClass('menu');
    });


    //Design 파트 갤러리 버튼
    $('#design #designGallery span#btnR').click(function(){
        $('#design #designGallery #sliderBox ul li').first().appendTo('#design #designGallery #sliderBox ul');
        $('#design #designGallery #sliderBox ul li').hide().fadeIn(700);
    });

    $('#design #designGallery span#btnL').click(function(){
        $('#design #designGallery #sliderBox ul li').last().prependTo('#design #designGallery #sliderBox ul');
        $('#design #designGallery #sliderBox ul li').hide().fadeIn(700);
    });

    //디자인 파트 
    $('#design #designGallery #sliderBox ul li').click(function(){
        let bigImg = $('a', this).attr('href');
        $('#designModal img').attr('src', bigImg);

        $('#designModal').css({display:'block'});

        $('body').addClass('modal-open');

        return false;
    });

    //디자인 파트 모달창 닫기
    $('#designModal span#btnClose').click(function(){
        $('#designModal').css({display:'none'});

        $('body').removeClass('modal-open');
        
        return false;
    });

    //퍼블리싱 파트 갤러리 버튼
    $('#publishing #pubGallery span#btnR2').click(function(){
        $('#publishing #pubGallery #sliderBox2 ul li').first().appendTo('#publishing #pubGallery #sliderBox2 ul');
        $('#publishing #pubGallery #sliderBox2 ul li').hide().fadeIn(700);
    });

    $('#publishing #pubGallery span#btnL2').click(function(){
        $('#publishing #pubGallery #sliderBox2 ul li').last().prependTo('#publishing #pubGallery #sliderBox2 ul');
        $('#publishing #pubGallery #sliderBox2 ul li').hide().fadeIn(700);
    });

    //skill 그래프 addClass + removeClass
    $(window).scroll(function(){
        let scrPos = $(window).scrollTop();
        let winHeight = $(window).height();
        
        if(scrPos > winHeight + 3330 ) {
            $('#skill ul li').addClass('skill');
        } else {
            $('#skill ul li').removeClass('skill');
        }
    });

    //qna 버튼 누르면 열고 닫는 효과->포기!
    $('#about #qna dl dt a').eq(0).click(function(){
        $('#about #qna dl dd').eq(0).toggleClass('answer');
        return false;
    });

    $('#about #qna dl dt a').eq(1).click(function(){
        $('#about #qna dl dd').eq(1).toggleClass('answer');
        return false;
    });

    $('#about #qna dl dt a').eq(2).click(function(){
        $('#about #qna dl dd').eq(2).toggleClass('answer');
        return false;
    });


    //탑버튼 스크롤 이동
    $('a#topBtn').click(function(){
        $('html, body').animate({scrollTop:0},500);
    });
});