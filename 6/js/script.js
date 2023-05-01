let navMain = document.querySelector('.header__navigation');
let navToggleOpen = document.querySelector('.header__navigation-burger');
let navToggleClose = document.querySelector('.header__navigation-close-button');

navMain.classList.remove('header__navigation--nojs');

navToggleOpen.addEventListener('click', function () {
  if (navMain.classList.contains('header__navigation--closed')) {
    navMain.classList.remove('header__navigation--closed');
    navMain.classList.add('header__navigation--opened');
  } else {
    navMain.classList.remove('header__navigation--opened');
    navMain.classList.add('header__navigation--closed');
  }
});

navToggleClose.addEventListener('click', function () {
  if (navMain.classList.contains('header__navigation--opened')) {
    navMain.classList.remove('header__navigation--opened');
    navMain.classList.add('header__navigation--closed');
  } else {
    navMain.classList.remove('header__navigation--closed');
    navMain.classList.add('header__navigation--opened');
  }
});
