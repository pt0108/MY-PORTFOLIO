$(function(){
    $('.gnb > li').mouseenter(function(){
        $('.submenu', this).stop().slideDown();
    }).mouseleave(function(){
        $('.submenu',this).stop().slideUp();
    });

    $('#slide > div:gt(0)').hide();

    setInterval(function(){
        $('#slide div:first').fadeOut(3000).next().fadeIn(3000).end().appendTo('#slide');
    }, 6000);
});