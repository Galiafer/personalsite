// WEBP SUPPORT CODE
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});
// /WEBP SUPPORT CODE;
let burger = $(".header__menu");
let menuIconTop = $(".header__menu-icon--top");
let menuIconMiddle = $(".header__menu-icon--middle");
let menuIconEnd = $(".header__menu-icon--end");
let menuHover = $(".header__menu-hover");
let menuWrap = $(".header__hover-menu");

burger.on("click",function(e){
    e.preventDefault;
    function Clear() {
        menuHover.removeClass("header__menu-hover--display");
    };
    function ClearBack() {
        menuHover.removeClass("header__menu-hover--display-back");
    }
    // ICON ANIM
    burger.toggleClass("header__menu--active");
    menuIconTop.toggleClass("header__menu--active-icon--top-active");
    menuIconMiddle.toggleClass("header__menu--active-icon--middle-active");
    menuIconEnd.toggleClass("header__menu--active-icon--end-active");
    // ICON ANIM END

    
    // MENU ANIM
    setTimeout(() => {
        menuWrap.toggleClass("header__hover-menu--active");
    }, 650);
    if (menuHover.hasClass('click1')) {
        menuHover.addClass("header__menu-hover--display-back");
        setTimeout(Clear,500);
    } else {
        menuHover.toggleClass("header__menu-hover--display");
        setTimeout(ClearBack,500);
    };
    menuHover.toggleClass('click1');
    return false;
    // MENU ANIM END
});


;

$('.slider__container').slick({
    speed: 1000,
    cssEase: "ease-in-out",
    easing: 'ease-in-out',
    prevArrow: `<img class="slider__arrow arrow-left" src="./img/arrow-left.svg" alt="" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1200">`,
    nextArrow: `<img class="slider__arrow arrow-right" src="./img/arrow-right.svg" alt="" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1200">`,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "my-dots",
    autoplay: true,
    autoplaySpeed: 7000,
    waitForAnimate: false,
    variableWidth: true,
    adaptiveHeight: true,
    breakpoint: 1024,
    responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
    }
  ]
  });;
$(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"},1000);
            return false;
    });
});

AOS.init({disable: 'phone'});;




