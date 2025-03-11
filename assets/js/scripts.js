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
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: true,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 breakpoints: {
    // When the viewport is 640px or larger
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // When the viewport is 1024px or larger
    1024: {
      slidesPerView: 1,
      spaceBetween: 30,
    }
  }
});


var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,

  spaceBetween: 2,
  centeredSlides: true,
  pagination: {
    el: ".mySwiper2 .swiper-pagination",
    clickable: true,
  },
  loop: false,
  on: {
    slideChange: function () {
      updateActiveTab(swiper2.realIndex);
    },
  },

 breakpoints: {
    // When the viewport is 640px or larger
    640: {
      slidesPerView: 1,
      spaceBetween: 1,
    },
    // When the viewport is 1024px or larger
    1024: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});


// var swiper = new Swiper(".mySwiper2", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: false,
//   on: {
//     slideChange: function () {
//       updateActiveTab(swiper2.realIndex);
//     },
//   },
// });

// Select all tab buttons
const tabButtons = document.querySelectorAll(".tab-buttons");
const menuTab = document.querySelector(".menu-tab"); // The tab container

// Add event listeners for clicks on tabs
tabButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    swiper2.slideTo(index);
    updateActiveTab(index);

    // Scroll the menu-tab to bring the clicked tab into view
    menuTab.scrollTo({
      left: button.offsetLeft - menuTab.offsetLeft, // Move tab toward left
      behavior: "smooth",
    });


  });
});

// Function to update the active tab style
function updateActiveTab(activeIndex) {
  tabButtons.forEach((button, index) => {
    button.classList.toggle("active", index === activeIndex);
  });

 
}



