var coursesChildren = $(".course-slider-container").children().length;

$(document).ready(function (){
    if (coursesChildren < 4) {
        $(".course-slider-container").removeClass("course-slider");
        $(".course-slider-container .slick-dots").hide();
        
    } else coursesChildren = 3;
    $('.course-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: coursesChildren,
        slidesToScroll: 2
        // responsive: [
        //     {
        //     breakpoint: 1024,
        //     settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 3,
        //         infinite: true,
        //         dots: true
        //     }
        //     },
        //     {
        //     breakpoint: 600,
        //     settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 2
        //     }
        //     },
        //     {
        //     breakpoint: 480,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //     }
        //     }
        //     // You can unslick at a given breakpoint now by adding:
        //     // settings: "unslick"
        //     // instead of a settings object
        // ]
    }); 
});

var sections = $('section'), nav = $('.header-navigation'), nav_height = $('header').outerHeight();

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
    sections.each(function() {
       var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();   
        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        }
    });
});

nav.find('a').on('click', function () {
var $el = $(this), id = $el.attr('href');
    
    $('html, body').animate({
        scrollTop: $(id).offset().top - nav_height
    }, 500);
    
    return false;
    });

    $('.feedbacks-slider').slick({
        autoplay:true,
        autoplaySpeed: 10000,
        dots: true,
        infinite: true,
        arrows:false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.mentors-slider-container').slick({
        autoplay:true,
        autoplaySpeed: 10000,
        dots: true,
        infinite: true,
        arrows:false,
        speed: 500,
        cssEase: 'linear'
    });

    

    