// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()

//Price Page
const checkbox = document.querySelector('#checkbox')
const label = document.querySelector('#label')
checkbox.addEventListener('change', showPlan)

function showPlan() {
    label.classList.toggle ('selected');
    displayPrice();
}

function displayPrice() {
    const prices = document.querySelectorAll('.subscription__price')
    prices.forEach(price => {
        price.classList.toggle('show-price')
    });
}

function faq() {
    const items = document.querySelectorAll('.faq__item-trigger');
    items.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentNode;
            parent.classList.toggle('faq__item-active');
            document
                .querySelectorAll('.faq__item')
                .forEach(child => {
                    if (child !== parent) {
                        child.classList.remove('faq__item-active');
                    }
                });
        });
    });
}
faq();
 