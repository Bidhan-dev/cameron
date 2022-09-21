$(function(){
    // slick slider js start here
    $('.testmoial_item_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:true,
        pauseOnHover:false, 
        arrows:true,
        prevArrow:".left_test",
        nextArrow:".right_test",
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true, 
              }
            }, 
          ],
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true, 
              }
            }, 
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true, 
              }
            }, 
          ]
    
  });
      
 
    $('.latest_slider_main').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:true,
        pauseOnHover:false, 
        arrows:true,
        prevArrow:".left_latest",
        nextArrow:".right_latest",
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true, 
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true, 
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true, 
              }
            },
            
          ] 

      }); 
    // slick slider js end here 



    // sticky menu jquery start here
    $(window).scroll(function(){
        var top = $(this).scrollTop()
        if(top > 300){
            $(".navbar").addClass("sticky_menu")
        }
        else{
            $(".navbar").removeClass("sticky_menu")
        } 
        if(top > 300){
            $(".back_to_top").fadeIn(300)
        }
        else{
            $(".back_to_top").fadeOut(300)
        }
    }) 
    // sticky menu jquery end here 

    $(".back_to_top").click(function(){
        $("html,body").animate({scrollTop:0}, 1000)
    })

    // venobox js start here
    new VenoBox({
        selector: '.my-video-links',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
    });
 
    // venobox js end here 

    // hamburger js start here 
    $(() => {
      $('.hamburger').on('click', () => {
        $('.hamburger').toggleClass('active');
      })
    })
// hamburger js end here 


// scroll spy js start here
var scrollLink = $('.scroll-link');
$(scrollLink).on('click', function (event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: $(this.hash).offset().top - 40
  }, 1000);
});
$(window).on('scroll', function () {
  var scrollTop = $(this).scrollTop();
  scrollLink.each(function () {
    var sectionhead = $(this.hash).offset().top - 40;
    if (scrollTop >= sectionhead) {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    }
  });
}); 
// scroll spy js end here 

// scroll aos animations 
AOS.init();
// scroll aos animations 





})