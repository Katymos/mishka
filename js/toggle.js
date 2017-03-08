var navToggle = document.querySelector('.main-nav__toggle');
var navWrapper = document.querySelector('.main-nav__wrapper');

navToggle.addEventListener('click', function(){
  if (navToggle.classList.contains('main-nav__toggle--closed')) {
    navToggle.classList.remove('main-nav__toggle--closed');
    navToggle.classList.add('main-nav__toggle--opened');
    navWrapper.classList.remove('main-nav__wrapper--closed');
    navWrapper.classList.add('main-nav__wrapper---opened');
  } else {
    navToggle.classList.add('main-nav__toggle--closed');
    navToggle.classList.remove('main-nav__toggle--opened');
    navWrapper.classList.add('main-nav__wrapper--closed');
    navWrapper.classList.remove('main-nav__wrapper--opened');
  }
});
