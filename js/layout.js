$(document).ready(function(){
    $(".back-to-top-anchor").click(function(){
        $("html, body").animate({scrollTop: 0}, 1000); 
    });

    $(".hamburger").click(function(){
            $("#mobile-menu").slideToggle("fast", function(){
                $(this).css("z-index", "10000");
            });
    });
    $(".section-change__box").click(function(){
            $(".section-change__box,.section-change__box1,.section-change__item-before,.section-after").css("display","none");
            $(".section-change__block").css("display","flex");
    });
    $(".section-change__btn").click(function(){
             $(".section-change__box,.section-change__box1,.section-change__item-before,.section-after").css("display","block");
            $(".section-change__block,.box-2").css("display","none");
    });
     $(".section-2-spec__shopByVehicleBtn").click(function(){
             $(".section-change").css("display","block");
            
    });
     

    document.getElementById("mobile-menu").addEventListener('touchmove', function(e) {
        e.preventDefault();
    });
});


