
// Carousel

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

const owl = $('.owl-carousel');
owl.owlCarousel({
    center:true,
    loop:true,
    margin:30,
    items:3,
    responsive : {
        320 : {
            items:1,
        },
        
        430 : {
            margin:15,
            items:2,
        },
        850 : {
            items: 2,
        },
        1000 : {
            margin:20,
            items:3,
        },
        1200 : {
            margin:30,
        }
    },
});
// Go to the next item
$('.slider__btn_next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.slider__btn_prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})

// Navigation

const navBtn = document.querySelector('.nav-btn')
const menuIcon = document.querySelector('.menu-icon')
const nav = document.querySelector('.header__nav')

navBtn.addEventListener('click',function(){
    menuIcon.classList.toggle('menu-icon_active')
    nav.classList.toggle('nav__mobile')
})