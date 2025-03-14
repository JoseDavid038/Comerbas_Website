

document.addEventListener('DOMContentLoaded', function() {
  loadComponent("header", "/components/header.html" , () => {
    
    setNavLinks();
    // Modify button text based on the page
    setupNavButtons();   // Ensure nav button updates correctly
    setupMenu();  // Ensure hamburger menu works after header loads

  });

  loadComponent("footer", "/components/footer.html");
});

// Function to fetch and load components
function loadComponent(tag, file, callback = null){
  fetch(file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(tag).innerHTML = data;
        if (callback) callback();  // Ensure the callback runs after loading
      })
      .catch(error => console.error(`Error loading ${file}:`,error));
}


// Function to update the call-to-action button in the navbar
function setupNavButtons(){

  const textCallToActionButton = document.querySelector('.js-text-button');
  const iconElement = document.querySelector('.js-ri-handbag-line');
  const CallToActionButton = document.querySelector('.js-button-menu');
  navLinks = document.querySelectorAll('.js-nav__link');

  // Check if the button exists before modifying it
 if (!textCallToActionButton || !iconElement) return;

 if (window.location.pathname.includes("empresas.html")) {

   textCallToActionButton.textContent = "Trámites empresariales";
   // Remove any existing <i> before adding a new one
   iconElement.classList.replace("ri-handbag-line", "ri-device-line");
   CallToActionButton.classList.add('button--menu-tramites');


 }else if (window.location.pathname.includes("ips.html")){
   textCallToActionButton.textContent = "Afilia tu empresa ahora";

    // Redirect **when the button is clicked**
    textCallToActionButton.closest(".nav__link").addEventListener('click', function(event) {
     event.preventDefault(); // Prevent default link behavior
     window.location.href = "/pages/afiliate.html";
    });

 }else{
   textCallToActionButton.textContent = textCallToActionButton.dataset.text || "Tienda en línea Comerbas"; // Default text
   iconElement.classList.replace( "ri-device-line" ,"ri-handbag-line"); // Ensure default icon
 };

};


// Function to handle navigation links and active class

function setNavLinks(){

  const navLinks = document.querySelectorAll('.js-nav__link');

  navLinks.forEach(link => {

    // handle navigation links

      const pageMap = {
        "Para Empresas": "/pages/empresas.html",
        "Para Personas": "/pages/index.html",
        "IPS": "/pages/ips.html",
        "Sobre nosotros": "/pages/nosotros.html"
      };

       // Add active class based on the current page
    if (window.location.pathname === pageMap[link.textContent.trim()]) {
      navLinks.forEach(l => l.classList.remove("active-link")); // Remove from all
      link.classList.add("active-link");
    }

    // Add event listener for clicks
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const page = link.textContent.trim();

      if (pageMap[page]) {
        window.location.href = pageMap[page];
      };
    });
  });

};


 