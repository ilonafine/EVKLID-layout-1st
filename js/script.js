new Accordion('.accordion-container');
const $burger = document.getElementById("burger"),
  $search = document.getElementById("search-icon"),
  $searchBtn = document.getElementById("header__close-svg"),
  $searchForm = document.querySelector(".header__wrap-input"),
  $burgerMenu = document.querySelector(".header"),
  $stepsLink = document.querySelectorAll(".ul__steps-btn"),
  $stepsInfo = document.querySelectorAll(".tab-content")

const swiper = new Swiper('.swiper-container', {
  // Цикличность
  loop: true,
  // Пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  a11y: {
    paginationBulletMessage: 'Тут название слайда {{index}}',
  }
});


document.addEventListener("DOMContentLoaded", function () {
  $burger.addEventListener("click", function () {
    $searchForm.classList.remove("open")
    $burgerMenu.classList.toggle("open")
  })
})

document.addEventListener("DOMContentLoaded", function () {
  $search.addEventListener("click", function () {
    $burgerMenu.classList.remove("open")
    $searchForm.classList.toggle("open")
  })
})

document.addEventListener("DOMContentLoaded", function () {
  $searchBtn.addEventListener("click", function () {
    $searchForm.classList.remove("open")
  })
})

$stepsLink.forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    $stepsLink.forEach(function (btn) {
      btn.classList.remove('ul__steps-btn--active')
    });
    e.currentTarget.classList.add('ul__steps-btn--active');

    $stepsInfo.forEach(function (tab) {
      tab.classList.remove('tab-content--active')
    });

    document.querySelectorAll(`[data-target="${path}"]`).forEach(function (tab) {
      tab.classList.add('tab-content--active');
    });
  });
});

