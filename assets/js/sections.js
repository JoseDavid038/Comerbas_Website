async function loadComponent (selector, componentPath, data = {}) {
  const container = document.querySelector(selector);
  if(!container) return;

  //Fetch the HTML component
  const response = await fetch(componentPath);
  const html = await response.text();

  //Insert the component into the page
  container.innerHTML = html;

  //Populate dynamic content
  container.querySelector(".section-image").src = data.image || "/assets/images/company-logo.png";
  container.querySelector(".js-section-title").textContent = data.title || "Comerbas";
  container.querySelector(".js-section-paragraph").textContent = data.paragraph || "Comerbas";
  if (container.querySelector(".js-section-paragraph2")) {
    container.querySelector(".js-section-paragraph2").textContent = data.paragraph2 || "Comerbas";
  }
  if (container.querySelector(".js-section-itemList")) {
    container.querySelector(".js-section-itemList").textContent = data.itemList || "Comerbas";
  }
  container.querySelector(".js-section-button").textContent = data.buttonText || "Comerbas";
  container.querySelector(".button--services").href = data.buttonLink || "#";


 // Populate the list items
 const listItems = container.querySelectorAll(".js-section-itemList");
 if (data.list && data.list.length === listItems.length) {
   listItems.forEach((item, index) => {
     item.textContent = data.list[index];
   });
 }
}




loadComponent("#section-1", "/components/sections.html", {
  image: "/assets/images/services/service-optometria-test.png",
  title: "Optometria laboral",
  paragraph: "Ofrecemos evaluaciones precisas y certificadas permitiéndole a su empresa tomar decisiones informadas y garantizar un entorno laboral seguro.",
  list: ["Evaluación completa de la agudeza visual lejana y cercana", "Pruebas de profundidad visual y discriminación de colores", "Recomendaciones específicas según el puesto de trabajo", "Prevención de riesgos visuales ocupacionales"],
  buttonText: "Contáctanos para saber más",
  buttonLink: "/index.html"
});


loadComponent("#section-2", "/components/sections.html", {
  image: "/assets/images/services/service-psicology.png",
  title: "Psicología Laboral",
  paragraph: "Evaluamos los factores psicosociales que impactan en el desempeño y bienestar de sus colaboradores, identificando fortalezas y áreas de mejora para optimizar el ambiente laboral.",
  list: ["Evaluación de Riesgos Bio-Psicosociales", "Pruebas Psicotécnicas Laborales", "Capacitación en Salud Mental Laboral", "Control de Sustancias psicoactivas y Alcoholimetría."],
  buttonText: "Contáctanos para saber más",
  buttonLink: "/index.html"
});

loadComponent("#section-3", "/components/section3.html", {
  image: "/assets/images/services/service-certified.png",
  title: "Certificados especializados para seguridad.",
  paragraph: "Evaluaciones completas para porte y tenencia de armas con resultados confiables y rápidos.",
  paragraph2: "Entendemos las necesidades específicas del sector de seguridad privada. Ofrecemos un servicio integral que cumple con todos los requisitos legales para la certificación de su personal, garantizando procesos ágiles y resultados precisos.",
  buttonText: "Conoce nuestra IPS",
  buttonLink: "/index.html"
});

loadComponent("#section-4", "/components/section3.html", {
  image: "/assets/images/services/service-support-sg-sst.png",
  title: "Certificados especializados para seguridad.",
  paragraph: "Asesoría e Implementación de Sistemas de Gestión SG-SST",
  paragraph2: "Detectamos y evaluamos factores de riesgo críticos que pueden comprometer la seguridad operacional y el cumplimiento normativo, ofreciendo soluciones preventivas adaptadas a su sector.",
  buttonText: "Solicita una asesoria",
  buttonLink: "/index.html"
});


document.addEventListener('DOMContentLoaded', function() {
  loadComponent2("section-why", "/components/section-fixed.html");

  
});

// Function to fetch and load components
function loadComponent2(tag, file, callback = null){
  fetch(file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(tag).innerHTML = data;
        if (callback) callback();  // Ensure the callback runs after loading
      })
      .catch(error => console.error(`Error loading ${file}:`,error));
}

