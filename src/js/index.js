import '../scss/style.scss'
import Swiper from 'swiper'

window.addEventListener('DOMContentLoaded', () => {
  let brands = document.querySelector('.remontBrands')
  let techno = document.querySelector('.remontTechno')
  let content = document.querySelector('.content__text')

  brands.querySelector('.button-show-more').onclick = readMoreB
  techno.querySelector('.button-show-more').onclick = readMoreT
  content.querySelector('.button-show-more').onclick = readMoreContent

  function readMoreB() {
    const more = brands.querySelector('.swiper-wrapper')
    const btn = brands.querySelector('.button-show-more')
    if (more.style.overflow !== 'visible') {
      more.style.overflow = 'visible'
      more.style.height = 'auto'
      btn.innerHTML = 'Скрыть'
      btn.style.background = 'url(img/expand_alt.svg) no-repeat'
    } else {
      more.style.overflow = 'hidden'
      more.style.height = '173px'
      btn.innerHTML = 'Показать всё'
      btn.style.background = 'url(img/expand.svg) no-repeat'
    }
  }

  function readMoreT() {
    const more = techno.querySelector('.swiper-wrapper')
    const btn = techno.querySelector('.button-show-more')
    if (more.style.overflow !== 'visible') {
      more.style.overflow = 'visible'
      more.style.height = 'auto'
      btn.innerHTML = 'Скрыть'
      btn.style.background = 'url(img/expand_alt.svg) no-repeat'
    } else {
      more.style.overflow = 'hidden'
      more.style.height = '173px'
      btn.innerHTML = 'Показать всё'
      btn.style.background = 'url(img/expand.svg) no-repeat'
    }
  }

  function readMoreContent() {
    const width = window.outerWidth
    const text = content.querySelector('.content__full-text')
    const textMore = content.querySelector('.content__text-more')
    const textAll = content.querySelector('.content__text-all')
    const btn = content.querySelector('.button-show-more')
    if (width < 600) {
      if (btn.innerHTML !== 'Скрыть') {
        text.classList.add('content--show')
        textMore.classList.add('content--show')
        textAll.classList.add('content--show')
        btn.innerHTML = 'Скрыть'
        btn.style.background = 'url(img/expand_alt.svg) no-repeat'
      } else {
        text.classList.remove('content--show')
        textMore.classList.remove('content--show')
        textAll.classList.remove('content--show')
        btn.innerHTML = 'Читать далее'
        btn.style.background = 'url(img/expand.svg) no-repeat'
      }
    }
    if (width >= 600 && width < 1050) {
      if (btn.innerHTML !== 'Скрыть') {
        textMore.classList.add('content--show')
        textAll.classList.add('content--show')
        btn.innerHTML = 'Скрыть'
        btn.style.background = 'url(img/expand_alt.svg) no-repeat'
      } else {
        textMore.classList.remove('content--show')
        textAll.classList.remove('content--show')
        btn.innerHTML = 'Читать далее'
        btn.style.background = 'url(img/expand.svg) no-repeat'
      }
    }
    if (width >= 1050) {
      if (btn.innerHTML !== 'Скрыть') {
        textAll.classList.add('content--show')
        btn.innerHTML = 'Скрыть'
        btn.style.background = 'url(img/expand_alt.svg) no-repeat'
      } else {
        textAll.classList.remove('content--show')
        btn.innerHTML = 'Читать далее'
        btn.style.background = 'url(img/expand.svg) no-repeat'
      }
    }
  }

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper

    breakpoint = window.matchMedia(breakpoint)
    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings)
    }

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings)
      } else {
        if (swiper !== undefined) swiper.destroy(true, true)
        return
      }
    }
    breakpoint.addEventListener('change', checker)
    checker()
  }

  resizableSwiper('(max-width: 768px)', '.swiper-techno', {
    spaceBetween: 20,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  resizableSwiper('(max-width: 768px)', '.swiper-brands', {
    spaceBetween: 20,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  resizableSwiper('(max-width: 768px)', '.swiper-prices', {
    spaceBetween: 20,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  // Обработчик клика бургер меню
  let menu = document.querySelector('.menu')
  let openMenuButton = document.querySelector('.button-burger')
  let closeMenuButton = menu.querySelector('.button-alt-burger')
  let main = document.querySelector('.main')
  let header = document.querySelector('.header')

  openMenuButton.addEventListener('click', function (evt) {
    evt.preventDefault()
    menu.classList.add('menu--show')
    main.classList.add('blur')
    header.classList.add('blur')
  })

  closeMenuButton.addEventListener('click', function () {
    menu.classList.remove('menu--show')
    main.classList.remove('blur')
    header.classList.remove('blur')
  })

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      menu.classList.remove('menu--show')
      main.classList.remove('blur')
      header.classList.remove('blur')
    }
  })

  window.addEventListener('click', function (e) {
    if (!e.target.matches('.button-burger') && !e.target.closest('.menu')) {
      menu.classList.remove('menu--show')
      main.classList.remove('blur')
      header.classList.remove('blur')
    }
  })

  //обработчик клика модалок
  const openCall = menu.querySelector('.button-call')
  const openFeed = menu.querySelector('.button-chat')

  openFeed.addEventListener('click', () => {
    menu.classList.remove('menu--show')
    main.classList.add('blur')
    header.classList.add('blur')
  })
  openCall.addEventListener('click', () => {
    menu.classList.remove('menu--show')
    main.classList.add('blur')
    header.classList.add('blur')
  })
})
