// menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// menu show

if(navToggle){
    navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu');
    })
}

// menu hidden

if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu');
  })
}


// remove menu mobile
// when we click on each nav__link, we remove  the show-menu close. 
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
  // const navMenu = document.getElementById('nav-menu'); no es necesario volverla a declarar.
  navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


// Swiper

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 breakpoints: {
    // When the viewport is 640px or larger
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // When the viewport is 1024px or larger
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});


