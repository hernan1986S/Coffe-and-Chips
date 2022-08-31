document.querySelectorAll('.image-slider img').forEach(images =>{
    images.onclick= () =>{ 
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider",{
    spaceBetween: 20 ,
    pagination: {
        el:".swiper-pagination",
        clickable: true
    },
    loop:true,
    grabCursor : true,
    autoplay : {
        delay : 7500,
        disableOnInteraction : false,
    },
    breakpoints : {
        0: {
            slidesPerview: 1 ,
        },
        768 : {
            slidesPerview: 2,
        },
    },
});

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

Window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};