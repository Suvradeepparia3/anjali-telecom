$(document).ready(function(){
$(window).scroll(function(){
    var positionTop = $(document).scrollTop();
    
    if(screen.width < 767){
        if(positionTop > 3000){
        aboutUs.style.animationDuration = "3s";
        text.style.animationDelay = "2s";
        $('#aboutUs').addClass('animated bounceInLeft');
        $('#text').addClass('animated fadeInUp');
        }
    }
    else if(positionTop > 1717){
        aboutUs.style.animationDuration = "3s";
        text.style.animationDelay = "2s";
        $('#aboutUs').addClass('animated bounceInLeft');
        $('#text').addClass('animated fadeInUp');
    }
});
});

