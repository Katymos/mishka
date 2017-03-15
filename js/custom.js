var navToggle = document.querySelector('.main-nav__toggle');
var navWrapper = document.querySelector('.main-nav__wrapper');

var link = document.querySelector('.order-popup-link');
var popup = document.querySelector('.order-popup');
var overlay = document.querySelector('.order-popup-overlay');

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

link.addEventListener('click', function(even){
  event.preventDefault();
  popup.classList.add('order-popup--show');
  overlay.classList.add('order-popup-overlay--show')
});

overlay.addEventListener('click', function(event){
  popup.classList.remove('order-popup--show');
  overlay.classList.remove('order-popup-overlay--show');
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains('order-popup')) {
      popup.classList.remove('order-popup--show');
      overlay.classList.remove('order-popup-overlay--show');
    }
  }
});
