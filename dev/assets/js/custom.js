$(document).ready(function() {

    $('.first-screen-slider').slick({
        dots: true,
        appendArrows: '.first-screen-nav',
        responsive: [
            {
              breakpoint: 991,
              settings: {
                arrows: false,
              }
            },
          ]
    });

    // $('.first-screen').slick({
    //     infinite: true,
    //     dots: true,
    //     appendArrows: '.first-screen-nav',
    //     responsive: [
    //         {
    //           breakpoint: 991,
    //           settings: {
    //             arrows: false,
    //           }
    //         },
    //       ]
    // });
    // $('.first-screen').append($('.first-screen-nav'));


    mobileOnlySlider("#advantages-slider", true, false, 991);

    function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
        var slider = $($slidername);
        var settings = {
            mobileFirst: true,
            dots: $dots,
            arrows: $arrows,
            responsive: [{
                breakpoint: $breakpoint,
                settings: "unslick"
            }]
        };

        slider.slick(settings);

        $(window).on("resize", function() {
            if ($(window).width() > $breakpoint) {
                return;
            }
            if (!slider.hasClass("slick-initialized")) {
                return slider.slick(settings);
            }
        });
    } // Mobile Only Slider


 

$('.dilivery-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint:991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      },
      
    ]
});

});

const burger = document.querySelector('.hamburger');

burger.addEventListener('click', function() {
    // burger.classList.replace("test-delete", "bar");
    burger.classList.toggle('is-active')
})

 

document.getElementById('fileInput').onchange = function () {
    //short name
    //document.getElementById('file-name').innerHTML = this.files[0].name;

    //long name
    document.getElementById('file-name').innerHTML = this.value;
};

 











const checkButton = document.querySelectorAll('[type="checkbox"]');

checkButton.forEach((item, index) => {
    item.closest('.input-column').style.marginBottom = "-10px"; 
    index === 0? item.closest('.input-box').classList.add('has-checkbox'): null;
})









   

 















// const checkButtons = document.querySelectorAll('.check-button');
// console.log(checkButtons);

// checkButtons.forEach((item, index) => {
//   const colParent = item.closest('.col-lg-6');
//    colParent ? colParent.classList.add('padding-bottom') : null;

//    index === 5 ? item.classList.add("bg-warning") : null;
// });

// document.querySelectorAll('.check-button')[1].classList.add("this-is-legasy-code")
 

