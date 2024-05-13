import '../scss/style.scss'
console.log('Works!')

const brands = document.querySelector('.remontBrands')
const techno = document.querySelector('.remontTechno')

brands.querySelector('.button-show-more').onclick = readMoreB
techno.querySelector('.button-show-more').onclick = readMoreT

function readMoreB() {
  let more = brands.querySelector('.swiper-wrapper')
  let btn = brands.querySelector('.button-show-more')
  if (more.style.overflow !== 'visible') {
    more.style.overflow = 'visible'
    more.style.height = 'auto'
    btn.innerHTML = 'Скрыть'
    btn.style.background = 'url(../img/expand_alt.svg) no-repeat'
  } else {
    more.style.overflow = 'hidden'
    more.style.height = '173px'
    btn.innerHTML = 'Показать всё'
    btn.style.background = 'url(../img/expand.svg) no-repeat'
  }
}

function readMoreT() {
  let more = techno.querySelector('.swiper-wrapper')
  let btn = techno.querySelector('.button-show-more')
  if (more.style.overflow !== 'visible') {
    more.style.overflow = 'visible'
    more.style.height = 'auto'
    btn.innerHTML = 'Скрыть'
    btn.style.background = 'url(../img/expand_alt.svg) no-repeat'
  } else {
    more.style.overflow = 'hidden'
    more.style.height = '173px'
    btn.innerHTML = 'Показать всё'
    btn.style.background = 'url(../img/expand.svg) no-repeat'
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    buttonSelector
  ) => {
    let swiper
    let btn = buttonSelector.querySelector('.button-show-more')

    breakpoint = window.matchMedia(breakpoint)
    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings)
    }

    const checker = function () {
      if (breakpoint.matches) {
        btn.innerHTML = 'Показать всё'
        return enableSwiper(swiperClass, swiperSettings)
      } else {
        if (swiper !== undefined) swiper.destroy(true, true)
        return
      }
    }
    breakpoint.addEventListener('change', checker)
    checker()
  }

  resizableSwiper(
    '(max-width: 768px)',
    '.swiper-techno',
    {
      spaceBetween: 20,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    },
    techno
  )

  resizableSwiper(
    '(max-width: 768px)',
    '.swiper-brands',
    {
      spaceBetween: 20,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    },
    brands
  )
})

/*
let menu = document.querySelector('.menu');
let openMenuButton = document.querySelector('.button-burger');
let closeMenuButton = menu.querySelector('.button-alt-burger');
let main = document.querySelector('.main');
let header = document.querySelector('.header');

openMenuButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    menu.classList.add('menu--show');
    main.classList.add('blur');
    header.classList.add('blur');
});




closeMenuButton.addEventListener('click', function() {
    menu.classList.remove('menu--show');
    main.classList.remove('blur');
    header.classList.remove('blur');
    isClick = false;
});

document.addEventListener('keydown', (evt) =>{
    if (evt.key = 'Escape') {
        menu.classList.remove('menu--show');
        main.classList.remove('blur');
        header.classList.remove('blur');
        isClick = false;
    }
})
*/
