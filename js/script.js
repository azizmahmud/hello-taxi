// progress bar start

$( document ).ready(function() {
    $('#Experienced').LineProgressbar({
        percentage:97,
        radius: '0px',
        height: '25px',
        fillBackgroundColor: '#FEB21B'
        });
        $('#Skilled_Capable').LineProgressbar({
        percentage:92,
        radius: '0px',
        height: '25px',
        fillBackgroundColor: '#FEB21B'
        });
        $('#Flexible').LineProgressbar({
        percentage:83,
        radius: '0px',
        height: '25px',
        fillBackgroundColor: '#FEB21B'
        });

});
    
$(window).scroll( function() {

    var scrolled_val = $(document).scrollTop();
        if( scrolled_val > 140 && scrolled_val < 250){
            $('#Experienced').LineProgressbar({
                    percentage:97,
                    radius: '0px',
                    height: '25px',
                    fillBackgroundColor: '#FEB21B'
            });
            $('#Skilled_Capable').LineProgressbar({
                    percentage:92,
                    radius: '0px',
                    height: '25px',
                    fillBackgroundColor: '#FEB21B'
            });
            $('#Flexible').LineProgressbar({
                    percentage:83,
                    radius: '0px',
                    height: '25px',
                    fillBackgroundColor: '#FEB21B'
            });
        }
})

// progress bar end
// countUp start
$( document ).ready(function() {
    $('.counter').countUp();
})
// countUp end
//aos start
AOS.init();
// aos end 
// slider start 
$(document).ready(function(){
    ('.slick-slider-wraper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 1000,
      });
  });  