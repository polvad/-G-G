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

const caseBtn = document.querySelector('.showcase__btn-all');

caseBtn.addEventListener('click', function () {
    const showList = document.querySelector('.showcase__list-product')
    const itemCard = document.querySelectorAll('.showcase__item-product');
    itemCard.forEach(item => item.classList.toggle('show'));

    this.remove()
})

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