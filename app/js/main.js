// off-scroll body ----------------
function offScroll() {
    const body = document.querySelector('body');

    if (body.classList.contains('off-scroll')) {
        body.classList.remove('off-scroll');
    } else {
        body.classList.add('off-scroll');
    }
}

// Menu burger -----------------------
const menuBtn = document.querySelector('.header__burger-btn')
const mobileMenu = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {
    this.classList.toggle('open');
    mobileMenu.classList.toggle('show');
});

// Slider ----------------------
const swiper = new Swiper('.card-product__slider', {
    loop: true,
    pagination: {
        el: '.card-product__slider-dots',
    },

});


// input --------------------------
const fieldInput = document.querySelectorAll('.field__input');
fieldInput.forEach(item => item.addEventListener('input', hint))

function hint() {
    const textHint = this.parentElement.querySelector('.field__hint');
    if (this.value.length > 0) {
        textHint.classList.add('active');
    } else {
        textHint.classList.remove('active');

    }

}

// Modal --------------------------------
const modalOpen = document.querySelectorAll('[data-modal-btn]');
const modalClose = document.querySelectorAll('.modal__close')

modalOpen.forEach((item) => {
    item.addEventListener('click', openModal);
})

modalClose.forEach((item) => {
    item.addEventListener('click', addHidden)
})

function openModal() {
    const dataModal = this.dataset.modalBtn
    const modal = document.querySelector('#' + dataModal);
    modal.addEventListener('click', function () {
        modal.classList.add('hidden');
    })
    modal.classList.remove('hidden')

    const containerModal = modal.querySelector('.modal__container');
    containerModal.addEventListener('click', function (e) {
        e.stopPropagation()
    })

}

function addHidden(e) {
    const modal = this.closest('[data-modal]');
    modal.classList.add('hidden');

}


// Accordion ---------------------
const filterBtn = document.querySelectorAll('.filter-form__title');

filterBtn.forEach(item => {
    item.addEventListener('click', showBody);
})

function showBody() {
    const parent = this.parentElement;
    const body = this.nextElementSibling;
    body.classList.toggle('open')
    parent.classList.toggle('active')
}

// Slider price ----------------------
const priceMin = document.querySelector('.filter-price__field-min');
const priceMax = document.querySelector('.filter-price__field-max');
const priceSlider = document.querySelector('.filter-price__slider');

// Select category ----------------
const btnCategory = document.querySelector('.category__btn');
const selectList = document.querySelector('.category__list');

btnCategory.addEventListener('click', showSelect);

function showSelect() {
    this.classList.toggle('rotate')
    selectList.classList.toggle('active');
    selectList.addEventListener('click', selectValue);
}

function selectValue(e) {
    const span = document.querySelector('.category__btn-text')
    if (e.target.closest('.category__link')) {
        span.innerHTML = e.target.innerHTML
        selectList.classList.remove('active')
        btnCategory.classList.remove('rotate')
    }
}

// Mobile filter -------------------------------
const filter = document.querySelector('.filter');
const openFilter = document.querySelector('.filter-btn');

openFilter.addEventListener('click', () => {
    filter.classList.add('open');
    offScroll();
})

const closeFilter = document.querySelector('.filter__btn-hide');

closeFilter.addEventListener('click', () => {
    filter.classList.remove('open');
    offScroll();
})