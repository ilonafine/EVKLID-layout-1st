new Accordion('.accordion-container');
const $burger = document.getElementById("burger"),
  $search = document.getElementById("search-icon"),
  $searchForm = document.querySelector(".header__wrap-input"),
  $burgerMenu = document.querySelector(".header"),
  $stepsLink = document.querySelectorAll(".ul__steps-link"),
  $stepsImg = document.querySelectorAll(".tab-img")


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

for (let link of $stepsLink) {
  link.addEventListener('click', function() {

    for (let element of $stepsImg) {
      element.classList.add('hidden')
    }
    
    const content = document.querySelector('#' + link.dataset.tab);
    content.classList.remove('hidden')
  })
}
