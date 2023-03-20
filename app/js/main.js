const menuBtn = document.querySelector('.header__burger-btn')
const mobileMenu = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {
    this.classList.toggle('open');
    mobileMenu.classList.toggle('show');
});


const swiper = new Swiper('.card-product__slider', {
    loop: true,
    pagination: {
        el: '.card-product__slider-dots',
    },

});

