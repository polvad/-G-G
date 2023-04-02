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
const priceSlider = document.querySelector('.filter-price__range');
const inputs = [priceMin, priceMax];
const clearFieldRange = document.querySelector('.filter-price__clear-btn');

if (priceSlider) {
    noUiSlider.create(priceSlider, {
        start: [2200, 147500],
        connect: true,
        range: {
            'min': [2200],
            'max': [147500]
        }
    });

    priceSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = Math.round(values[handle])
    });

    const setRangeSlider = (index, value) => {
        let arr = [null, null];
        arr[index] = value;

        priceSlider.noUiSlider.set(arr)
    }

    inputs.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            setRangeSlider(index, e.currentTarget.value)
        })
    })

    clearFieldRange.addEventListener('click', function () {
        priceMin.value = 2200
        priceMax.value = 147500
    })
}

// Select category ----------------
const btnCategory = document.querySelector('.category__btn');
const selectList = document.querySelector('.category__list');
if (btnCategory) {
    btnCategory.addEventListener('click', showSelect);
}

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
if (filter) {
    openFilter.addEventListener('click', () => {
        filter.classList.add('open');
        offScroll();
    })
}

const closeFilter = document.querySelector('.filter__btn-hide');
if (closeFilter) {
    closeFilter.addEventListener("click", () => {
        filter.classList.remove('open');
        offScroll();
    })
}


// Slider card --------------------------
const bigSliderImg = document.querySelector('.card-slider__big-img');
const minSliderImg = document.querySelectorAll('.card-slider__min-img');
const minSliderItem = document.querySelectorAll('.card-slider__min-item');


minSliderImg.forEach((item, index) => {

    item.addEventListener('click', function () {
        minSliderItem.forEach(el => el.classList.remove('active'))
        const li = this.parentElement;
        li.classList.add('active');
        bigSliderImg.src = this.src

    })
})

minSliderItem[0].classList.add('active');
bigSliderImg.src = minSliderImg[0].src

// sliderBtnPrev.addEventListener('click', function () {
//     minSliderItem.forEach((item, index) => {
//         item.classList.remove('active')
//         if (index == count) {
//             item.classList.add('active')
//             const img = item.querySelector('img').src;
//             bigSliderImg.src = img
//         }
//     })
// })

// sliderBtnNext.addEventListener('click', function () {

//     minSliderItem.forEach((item, index) => {
//         item.classList.add('active')
//         const img = item.querySelector('img').src;
//         bigSliderImg.src = img

//     })
// })

