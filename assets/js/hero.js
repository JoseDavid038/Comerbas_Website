document.addEventListener('DOMContentLoaded', function () {

  setupSwiper(); // Initialize Swiper after loading the component

  const heroSwiper = document.querySelector(".swiper-wrapper-1");

  if (!heroSwiper) return; // Stop execution if there's no swiper on the page

  let slidesContent = "";
  let swiperOptions = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 9000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 20 },
      1024: { slidesPerView: 1, spaceBetween: 30 },
    },
  };

  // Detect which page is currently loaded
  if (window.location.pathname.includes("empresas.html")) {
    slidesContent = `
      <div class="swiper-slide swiper-slide-e1">
        <div class="swiper-slide-hero">
              <div class="info-slider">
                <h1 class="title__slider title__slider-e">Expertos en <br>bienestar empresarial Y Salud Ocupacional</h1>
                <p class="text__slider text__slider-e">Apoyamos a las empresas en el cumplimiento de sus objetivos de bienestar y porcesos médicos de selección.</p>
                <a href="#" class="button button__slider button__slider-e">
                  <span>Afilia tu empresa ahora</span>
                  <i class="ri-arrow-right-line"></i>
                </a>
              </div>
              <div class="swiper-image-container">
                <img src="../assets/images/hero/hero-banner-employees.png" alt="" class="swiper__img">
              </div>
        </div>
      </div>
      <div class="swiper-slide swiper-slide-e2">
        <div class="swiper-slide-hero">
              <div class="info-slider">
                <h1 class="title__slider title__slider-e">Reducimos la rotación en tu empresa</h1>
                <p class="text__slider text__slider-e">Nuestros programas de bienestar financiero y atención médica especializada aumentan la fidelización de su equipo. Ofrecemos soluciones que mejoran la satisfacción laboral sin costos operativos adicionales para su compañía.</p>
                <a href="#" class="button button__slider button__slider-e">
                  <span>Conoce los servicios</span>
                  <i class="ri-arrow-right-line"></i>
                </a>
              </div>
              <div class="swiper-image-container">
                <img src="../assets/images/hero/hero-banner-employees.png" alt="" class="swiper__img">
              </div>
        </div>
      </div>
      <div class="swiper-slide swiper-slide-e3">
        <div class="swiper-slide-hero">
              <div class="info-slider">
                <h1 class="title__slider title__slider-e">Beneficios financieros para su equipo sin costo empresarial</h1>
                <p class="text__slider text__slider-e">Créditos y seguros exclusivos para sus colaboradores. Agregue valor a su empresa sin afectar su presupuesto.</p>
                <a href="#" class="button button__slider button__slider-e">
                  <span>Conoce los servicios</span>
                  <i class="ri-arrow-right-line"></i>
                </a>
              </div>
              <div class="swiper-image-container">
                <img src="../assets/images/hero/hero-banner-employees.png" alt="" class="swiper__img">
              </div>
        </div>
      </div>
      <div class="swiper-slide swiper-slide-e4">
        <div class="swiper-slide-hero">
              <div class="info-slider">
                <h1 class="title__slider title__slider-e">Expertos en bienestar empresarial Y Salud Ocupacional</h1>
                <p class="text__slider text__slider-e">Apoyamos a las empresas en el cumplimiento de sus objetivos de bienestar y porcesos médicos de selección.</p>
                <a href="#" class="button button__slider button__slider-e">
                  <span>Afilia tu empresa ahora</span>
                  <i class="ri-arrow-right-line"></i>
                </a>
              </div>
              <div class="swiper-image-container">
                <img src="../assets/images/hero/hero-banner-employees.png" alt="" class="swiper__img">
              </div>
        </div>
      </div>
    `;
    
  } else if (window.location.pathname.includes("index.html")){
    slidesContent = `
      <div class="swiper-slide swiper-slide-1">
        <div class="swiper-slide-hero">
              <div class="info-slider">
                <h1 class="title__slider">Accede al crédito que tú y tu familia necesita</h1>
                <p class="text__slider">Queremos lo mejor para ti y tu familia, solicita un crédito de consumo para que puedas cumplir ese sueño que tanto deseas.</p>
                <a href="#" class="button button__slider button__slider-1">
                  <span>Solicita tu crédito</span>
                  <i class="ri-arrow-right-line"></i>
                </a>
              </div>
              <div class="swiper-image-container">
                <img src="../assets/images/hero/hero-banner-family.png" alt="" class="swiper__img">
              </div>
        </div>
      </div>
      <div class="swiper-slide swiper-slide-2">
        <div class="swiper-slide-hero">
              <div class="info-slider">
                <h1 class="title__slider">Protege a los tuyos con un seguro exequial</h1>
                <p class="text__slider">Brinda tranquilidad a tu familia en los momentos más difíciles. Con nuestro seguro exequial, cuentas con respaldo financiero cuando más lo necesitas.</p>
                <a href="#" class="button button__slider">
                  <span>Solicíta tu seguro exequial </span>
                  <i class="ri-arrow-right-line"></i>
                </a>
              </div>
              <div class="swiper-image-container">
                <img src="../assets/images/hero/hero-banner-older.png" alt="" class="swiper__img">
              </div>
        </div>
      </div>
      <div class="swiper-slide swiper-slide-3">
        <div class="swiper-slide-hero">
              <div class="info-slider">
                <h1 class="title__slider">Te financiamos los productos que necesitas</h1>
                <p class="text__slider">Lleva a casa productos y electrodomésticos con  pagos accesibles para tí.</p>
                <a href="#" class="button button__slider">
                  <span>Compra en línea</span>
                  <i class="ri-arrow-right-line"></i>
                </a>
              </div>
              <div class="swiper-image-container">
                <img src="../assets/images/hero/hero-banner-appliances.png" alt="" class="swiper__img">
              </div>
        </div>
      </div>
      <div class="swiper-slide swiper-slide-4">
        <div class="swiper-slide-hero">
              <div class="info-slider">
                <h1 class="title__slider">Bonos de mercado para tus compras diarias</h1>
                <p class="text__slider">Solicita nuestros bonos de mercado hoy mismo y disfruta de descuentos exclusivos en los establecimientos asociados.</p>
                <a href="#" class="button button__slider">
                  <span>Solicíta tus bonos</span>
                  <i class="ri-arrow-right-line"></i>
                </a>
              </div>
              <div class="swiper-image-container">
                <img src="../assets/images/hero/hero-banner-groceries.png" alt="" class="swiper__img">
              </div>
        </div>
      </div>
    `;
  }

  // Inject slides into the Swiper container
  heroSwiper.innerHTML = slidesContent;

  // Wait for the DOM to update, then initialize Swiper
  setTimeout(() => {
    new Swiper(".mySwiper", swiperOptions);
  }, 100); // Small delay to ensure slides are rendered



});


