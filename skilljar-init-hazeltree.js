let end = window.location.pathname;
let sourceLink = "https://ayazemregm.github.io/hazeltreeassets/";

window.addEventListener("load", () => {
  console.log("loaded");
  defaultActions();

  switch (end) {
    case "/":
      console.log("Main Page");
      break;
    case "/page/hazeltree-university":
      console.log("testPage");
      let template = `<link rel="stylesheet" href="${sourceLink}catalog-hazeltree.css">`;
      document.head.insertAdjacentHTML("beforeend", template);
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
  console.log(footer);
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
  let catalogContent = document.getElementById("catalog-content");
  catalogContent.style = "display:none";
  console.log(catalogContent.children);
  let swiperTemplate = `  
<!-- Slider main container -->
<div class="swiper swiper1">
  <p class="mt-12 mb-10 font-bold text-lg md:text-2xl px-4 md:px-0">Assets Managers</p>
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper ">
    <!-- Slides -->
      <div class="swiper-slide md:md:max-w-lg space-y-6 ">
      </div>
      <div class="swiper-slide md:max-w-lg space-y-6 ">
      
        </div>
            <div class="swiper-slide md:max-w-lg space-y-6 "></div>
            <div class="swiper-slide md:max-w-lg space-y-6 "></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev "></div>
  <div class="swiper-button-next"></div>

</div>`;
  const swiper = new Swiper(".swiper1", {
    // Optional parameters

    loop: false,

    // If we need pagination

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    slidesPerView: 3,
    spaceBetween: 10,
    // using "ratio" endpoints
    breakpoints: {
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

  let catalogCourses = document.getElementById("catalog-courses");
  console.log(swiperTemplate);
  catalogContent.insertAdjacentHTML("beforeend", swiperTemplate);
}
