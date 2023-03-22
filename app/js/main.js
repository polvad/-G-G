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

const fieldAdvice = document.querySelectorAll('.form-advice__field');

fieldAdvice.forEach(item => item.addEventListener('input', hint))

function hint() {
    const textHint = this.parentElement.querySelector('.form-advice__hint');
    if (this.value.length > 0) {
        textHint.classList.add('active');
    } else {
        textHint.classList.remove('active');

    }

}