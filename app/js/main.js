const menuBtn = document.querySelector('.header__burger-btn')
const mobileMenu = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {
    this.classList.toggle('open');
    mobileMenu.classList.toggle('show');
});