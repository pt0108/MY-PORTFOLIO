$(function(){
    $('#book span#rightBtn').click(function(){
        $('#book #sliderBox ul li').first().appendTo('#book #sliderBox ul');
        $('#book #sliderBox ul li').hide().fadeIn(700);
    });
    
    $('#book span#leftBtn').click(function(){
        $('#book #sliderBox ul li').last().prependTo('#book #sliderBox ul');
        $('#book #sliderBox ul li').hide().fadeIn(700);
    });
});

