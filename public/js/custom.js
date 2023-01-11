$('.testimonials').owlCarousel({
    loop:true,
    margin:30,
    items: 4,
    nav: true,
    dots: false,
    autoplay:true,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
        }
    }
})