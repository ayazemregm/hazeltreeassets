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
      addCourseTitle();
      initializeSwiper();
      console.log("testPage");
      let css = `<link rel="stylesheet" href="${sourceLink}catalog-hazeltree.css">`;
      let script = `<script type="text/javascript"  src="${sourceLink}catalog-page.js"></script>`;
      document.head.insertAdjacentHTML("beforeend", css);
      document.body.insertAdjacentHTML("beforeend", script);

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

  let swiperSlide = `  <div class="swiper-slide md:md:max-w-lg space-y-6 ">
      </div>`;

  let swiperTemplate = `  
<!-- Slider main container -->
<div class="swiper">

  <!-- Additional required wrapper -->
  <div id="sliders" class="swiper-wrapper ">
    <!-- Slides --></div>
  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

</div>`;

  catalogContent.insertAdjacentHTML("beforeend", swiperTemplate);
  let catalogCourses = document.getElementById("catalog-courses");
  let sliders = document.getElementById("sliders");
  for (let i = 0; i < catalogCourses.children.length; i++) {
    console.log("loop start");
    let temp = document.createElement("div");
    temp.appendChild(catalogCourses.children[i]);
    let swiperSlide = `<div class="swiper-slide">${temp.innerHTML}</div>`;
    sliders.insertAdjacentHTML("beforeend", swiperSlide);
    console.log("loop end");
  }
  console.log(catalogCourses.children);

  console.log(swiperTemplate);

  const swiper = new Swiper(".swiper", {
    loop: true,
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
