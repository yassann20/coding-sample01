$('.question1').on('inview', function(event, isInView){
    if(!$(this).stop().hasClass('slide-in-l') && isInView){
        $(this).stop().addClass('slide-in-l');
    }
});
$('.question2').on('inview', function(event, isInView){
    if(!$(this).stop().hasClass('slide-in-r') && isInView){
        $(this).stop().addClass('slide-in-r');
    }
});
$('.growing').on('inview', function(event, isInView){
    if(isInView){
        $(this).stop().addClass('growing-in');
    }
});
$('.hamburger').on('click', function(){
    $("nav, span").stop().toggleClass("active");
});