$(function(){
   banner // 
$('.banner_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  });

// venobox
new VenoBox({
  selector: ".my_video"
});
//  lightbox
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})

$('.test').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
});



$('.main_picture').slick({
 
  
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow:'<i class="fa-solid fa-angle-left parrow"></i>',
  nextArrow:'<i class="fa-solid fa-angle-right earrow"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
 
  ]
});

$('.counter').counterUp({
  delay: 10,
  time: 1000
});

  
})