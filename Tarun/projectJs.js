$(document).ready(function(){
$(window).scroll(function(){
    var positionTop = $(document).scrollTop();
    //console.log(positionTop);

    if(screen.width < 767){
        if(positionTop > 6580){
        aboutUs.style.animationDuration = "3s";
        text.style.animationDelay = "2s";
        $('#aboutUs').addClass('animated bounceInDown');
        $('#text').addClass('animated fadeInLeft');
        }
    }
    else if(positionTop > 4610){
        aboutUs.style.animationDuration = "3s";
        text.style.animationDelay = "2s";
        $('#aboutUs').addClass('animated bounceInDown');
        $('#text').addClass('animated fadeInLeft');
    }
});
});

