
$(document).ready(function(){
     $(".item-1").owlCarousel({
     
        items: 1,
        loop:false,
        center:false,
        mouseDrag: false,
        touchDrag: true,
        URLhashListener: true,
        startPosition: 'section-img-1',
    });
 

   

    $(".section-3-carousel").owlCarousel({
     
        items: 1,
        loop:false,
        center:false,
        mouseDrag: false,
        touchDrag: true
    });

    $(".section-3-CarouselArrows__prev").click(function () {
        $(".section-3-carousel").trigger("prev.owl.carousel")
      });
      $(".section-3-CarouselArrows__next").click(function () {
        $(".section-3-carousel").trigger("next.owl.carousel")
      });

   

    $(".section-1-ControlCarousel a").click(function(){
        $(".section-1-ControlCarousel__item").removeClass("active");
        $(this).find(".section-1-ControlCarousel__item").addClass("active");
    });




    $(".section-4-carousel").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 2
            },
            1360: {
                items: 4
            },
            1500: {
                items: 5
            },
            
        },
        loop:false,
        center:false,
        margin: 5,
        mouseDrag: false,
        touchDrag: true
    });

    $(".section-4-CarouselArrows__prev").click(function () {
        $(".section-4-carousel").trigger("prev.owl.carousel")
      });
      $(".section-4-CarouselArrows__next").click(function () {
        $(".section-4-carousel").trigger("next.owl.carousel")
      });

      $(".section-5-carousel").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 2
            },
            1360: {
                items: 4
            },
            1500: {
                items: 5
            },
            
        },
        loop:false,
        center:false,
        margin: 5,
        mouseDrag: false,
        touchDrag: true
    });

    $(".section-5-CarouselArrows__prev").click(function () {
        $(".section-5-carousel").trigger("prev.owl.carousel")
      });
      $(".section-5-CarouselArrows__next").click(function () {
        $(".section-5-carousel").trigger("next.owl.carousel")
      });

      $(".section-6-carousel").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 2
            },
            1360: {
                items: 5
            },
            1500: {
                items: 6
            },
            
        },
        loop:false,
        center:false,
        margin: 5,
        mouseDrag: false,
        touchDrag: true
    });

    $(".section-6-CarouselArrows__prev").click(function () {
        $(".section-6-carousel").trigger("prev.owl.carousel")
      });
      $(".section-6-CarouselArrows__next").click(function () {
        $(".section-6-carousel").trigger("next.owl.carousel")
      });

      $(".main-article-carousel").owlCarousel({
        items: 1,
        loop: true,
        center:false,
        mouseDrag: false,
        touchDrag: true
    });


    $(".main-article__prev").click(function () {
        $(".main-article-carousel").trigger("prev.owl.carousel")
      });
      $(".main-article__next").click(function () {
        $(".main-article-carousel").trigger("next.owl.carousel")
      });

      $(".bottom-articles").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 4
            },
            1360: {
                items: 5
            },    
        },
        loop: false,
        center: false,
        margin: 20,
        mouseDrag: false,
        touchDrag: true
      });


      $(".articles-bottomCarouselArrows__prev").click(function () {
        $(".bottom-articles").trigger("prev.owl.carousel")
      });
      $(".articles-bottomCarouselArrows__next").click(function () {
        $(".bottom-articles").trigger("next.owl.carousel")
      });
      $(".verticalCarousel").verticalCarousel({

        // current item to display on start
        currentItem: 1,

        // number of items to display at a time
        showItems: 4,
        
      });


});

