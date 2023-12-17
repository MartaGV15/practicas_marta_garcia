const menuBtn = document.querySelector('.header-responsiveMenuButton');
const menuResponsive = document.querySelector('.responsiveMenu');
const closeBtn = document.querySelector('.responsiveMenu-close');

menuBtn.addEventListener('click', function(){
    menuResponsive.classList.add('is-active');
})

closeBtn.addEventListener('click', function(){
    menuResponsive.classList.remove('is-active');
})