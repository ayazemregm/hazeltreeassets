let end = window.location.pathname;
let sourceLink = "https://ayazemregm.github.io/hazeltreeassets/";

console.log("loaded");

window.addEventListener("load", () => {
  defaultActions();
  switch (end) {
    case "/":
      console.log("Main Page");
      break;
    case "/page/hazeltree-university":
      console.log("testPage");
      let css = `<link rel="stylesheet" href="${sourceLink}catalog-hazeltree.css">`;
      document.head.insertAdjacentHTML("beforeend", css);
      addCourseTitle();
      initializeSwiper();
      break;
    default:
      console.log("Default Fired");
      break;
  }
});

function defaultActions() {
  let footer = document.getElementById("ep-footer");
  footer.remove();
}

function addCourseTitle() {
  let courseTitles = `
<div id="courseTitle">
   <h2 id="availableCourses">
     Available Courses
   </h2>
   <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
     libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
     sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
   </p>
 </div>`;
  let catalogContent = document.getElementById("catalog-content");
  catalogContent.insertAdjacentHTML("afterbegin", courseTitles);
}

function initializeSwiper() {
  let swiperTemplate = `  
<!-- Slider main container -->
<div class="courses-swiper">
  <!-- Additional required wrapper -->
  <div id="sliders" class="swiper-wrapper ">
    <!-- Slides --></div>
  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</div>`;

  let catalogCourses = document.getElementById("catalog-courses");
  let catalogContent = document.getElementById("catalog-content");

  catalogContent.insertAdjacentHTML("beforeend", swiperTemplate);
  let loopCount = catalogContent.children.length;
  for (let i = 0; i < loopCount; i++) {
    let sliders = document.getElementById("sliders");
    console.log("loop " + i);

    let swiperSlide = `<div class="swiper-slide">aasdadasd</div>`;
    sliders.insertAdjacentHTML("beforeend", swiperSlide);
  }

  document.querySelectorAll(".swiper-slide").forEach((el) => {
    console.log(el);
  });

  const swiper = new Swiper(".courses-swiper", {
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 5,
    paginationClickable: false,

    breakpoints: {
      1280: {
        slidesPerView: 4,
      },
      960: {
        slidesPerView: 3,
      },
      600: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 1,
      },
    },
  });
}
