$('.slide-fade1').on('inview', function(event, isInView){
    if(isInView){
        $(this).addClass('slide-fade-in');
    };
});
$('.slide-fade2').on('inview', function(event, isInView){
    if(isInView){
        $(this).addClass('slide-fade-in');
    };
});
$('.growing').on('inview', function(event, isInView){
    if(isInView){
        $(this).addClass('growing-in');
    }
});