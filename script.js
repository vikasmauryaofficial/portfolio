$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on("scroll load",function(){
        $("#menu").removeClass('fa-times');
        $('header').removeClass('toggle');

    });
    //smooth scrolling

    $('a[herf*="#"').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('herf')).offset().top,

        },
        500,
        'linear'
        );

    });
}); 