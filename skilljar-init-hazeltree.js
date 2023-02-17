"use strict";
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
      tabs();
      // footer();
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

// add course
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

// swiper
function initializeSwiper() {
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

  let catalogCourses = document.getElementById("catalog-courses");
  let catalogContent = document.getElementById("catalog-content");

  catalogContent.insertAdjacentHTML("beforeend", swiperTemplate);
  let courses = catalogCourses.children;
  console.log(catalogCourses.children);
  let filteredCourses = [];

  for (let i = 0; i < courses.length; i++) {
    if (!catalogCourses.children.item(i).classList.contains("not-found")) {
      let sliders = document.getElementById("sliders");
      console.log("loop " + i);

      let swiperSlide = `<div class="swiper-slide"></div>`;
      sliders.insertAdjacentHTML("beforeend", swiperSlide);
      filteredCourses.push(courses.item(i));
    }
  }

  let swiperSliders = document.querySelectorAll(".swiper-slide");

  for (let i = 0; i < filteredCourses.length; i++) {
    swiperSliders.item(i).appendChild(filteredCourses[i]);
  }

  const swiper = new Swiper(".swiper", {
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

// tabs
function tabs() {
  let tabsText = `<div class="tabs-wrapper">
      <p>Hazeltree University brings all your creativity together ! </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
    
      <section class="tabs">
        <div id="tabs-title" >
        <div class="tabs-nav ">
          <button class="tab-nav-item active" data-tab="asset-managers">Asset
            Managers</button>
          <button class="tab-nav-item " data-tab="hedge-funs">Hedge
            Funs</button>
          <button class="tab-nav-item " data-tab="financial">Financial
            Institutions & Administrators</button>
          <button class="tab-nav-item" data-tab="pensions">Pensions
            &
            Endowments</button>
        </div>
      </div>

       <div id="tabs-content" class="tabs-content ">
        <div class="tab-content active " id="asset-managers">
tab-1
        </div>
        <div class="tab-content" id="hedge-funs">
          <div id="hedge-content" class="">
            tab-2
          </div>

        </div>
        <div class="tab-content " id="financial">
          tab-3
        </div>
        <div class="tab-content " id="pensions">
tab-4
        </div>
      </div>
      </section>
    
    </div>`;
  let catalogContent = document.getElementById("catalog-content");
  catalogContent.insertAdjacentHTML("beforeend", tabsText);
  console.log(tabsText);

  const tabsNav = document.querySelectorAll(".tab-nav-item");
  tabsNav.forEach((item) => {
    item.addEventListener("click", () => {
      const tabId = item.getAttribute("data-tab");
      const tabsContent = document.querySelectorAll(".tab-content");
      tabsContent.forEach((tabContent) => {
        tabContent.classList.remove("active");
        if (tabContent.getAttribute("id") === tabId) {
          tabContent.classList.add("active");
        }
      });
      tabsNav.forEach((tabNav) => {
        tabNav.classList.remove("active");
      });
      item.classList.add("active");
    });
  });

  document.getElementById("asset-managers").innerHTML = `  
<!-- Slider main container -->
<div class="swiper swiper1">
  <p class="mt-12 mb-10 font-bold text-lg md:text-2xl px-4 md:px-0">Assets Managers</p>
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper ">
    <!-- Slides -->
      <div class="swiper-slide md:md:max-w-lg space-y-6 ">
        <div>
          <img class="w-[360px] h-[250px]" src="img/slider1.png" alt="">
        </div>
            <div class="space-y-4 max-w-xs">
              <p class="font-medium text-lg">Lorem Ipsum</p>
              <p class="font-light leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                libero et velit interdum, ac
                aliquet odio
                mattis.</p>
            </div>
          </div>
                     <div class="swiper-slide md:max-w-lg space-y-6 ">
            <div>
              <img class="w-[360px] h-[250px]" src="img/slider1.png" alt="">
            </div>
            <div class="space-y-4 max-w-xs">
              <p class="font-medium text-lg">Lorem Ipsum</p>
              <p class="font-light leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                libero et velit interdum, ac
                aliquet odio
                mattis.</p>
            </div>
          </div>
            <div class="swiper-slide md:max-w-lg space-y-6 ">
            <div>
              <img class="w-[360px] h-[250px]" src="img/slider1.png" alt="">
            </div>
            <div class="space-y-4 max-w-xs">
              <p class="font-medium text-lg">Lorem Ipsum</p>
              <p class="font-light leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                libero et velit interdum, ac
                aliquet odio
                mattis.</p>
            </div>
          </div>

                      <div class="swiper-slide md:max-w-lg space-y-6 ">
            <div>
              <img class="w-[360px] h-[250px]" src="img/slider1.png" alt="">
            </div>
            <div class="space-y-4 max-w-xs">
              <p class="font-medium text-lg">Lorem Ipsum</p>
              <p class="font-light leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                libero et velit interdum, ac
                aliquet odio
                mattis.</p>
            </div>
          </div>
  </div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev "></div>
  <div class="swiper-button-next"></div>

</div>`;

  const swiper = new Swiper(".swiper1", {
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
// footer
function footer() {
  let footer = `
  <footer>
    <p>Footer</p>
  </footer>
  `;

  let skilljarContent = document.getElementById("skilljar-content");

  skilljarContent.insertAdjacentElement("beforeend", footer);
}
