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
  container.querySelector(".js-section-itemList").textContent = data.itemList || "Comerbas";
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



loadComponent("#section-1", "/components/section.html", {
  image: "/assets/images/services/service-optometria-test.png",
  title: "Optometria laboral",
  paragraph: "Ofrecemos evaluaciones precisas y certificadas permitiéndole a su empresa tomar decisiones informadas y garantizar un entorno laboral seguro",
  list: ["Evaluación completa de la agudeza visual lejana y cercana", "Pruebas de profundidad visual y discriminación de colores", "Recomendaciones específicas según el puesto de trabajo", "Prevención de riesgos visuales ocupacionales"],
  buttonText: "Contáctanos para saber más",
  buttonLink: "/index.html"
});