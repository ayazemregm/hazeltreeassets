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
      footer();
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
<div id="swiper0">
  <!-- Additional required wrapper -->
  <div id="course-sliders" class="swiper-wrapper ">
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
    if (
      !catalogCourses.children.item(i).classList.contains("not-found") &&
      catalogCourses.children.item(i).dataset["type"] == "-c"
    ) {
      let sliders = document.getElementById("course-sliders");
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

  const swiper = new Swiper("#swiper0", {
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
  <div class="tabs-center">
    <div class="tabs-text-content">
      <p>Hazeltree University brings all your creativity together ! </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
    </div>
    
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
    </div>
    </div>`;

  let tabTemplate = `  
<!-- Slider main container -->
<div  id="swiper1">
  <!-- Additional required wrapper -->
  <div id="tab-sliders" class="swiper-wrapper ">
  <div class="swiper-slide">1</div>
  <div class="swiper-slide">2</div>
  <div class="swiper-slide">3</div>
  <div class="swiper-slide">4</div>
  <div class="swiper-slide">5</div>
    <!-- Slides --></div>
  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
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

  console.log("test");

  document
    .getElementById("asset-managers")
    .insertAdjacentHTML("afterbegin", tabTemplate);

  const swiper1 = new Swiper("#swiper1", {
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
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
     <footer id="footer" class=" ">
    <div
      class="">

      <div class=">
        <p class="">About Us</p>
        <div>
          <ul class="">
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Leaderships</a>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Diversity</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>


      <div >
        <p >Community</p>
        <div>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Forum</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Community Standards</a>
            </li>
          </ul>
        </div>
      </div>


      <div class="space-y-4">
        <p class="font-bold text-xl">Terms</p>
        <div>
          <ul class="flex flex-col space-y-4">
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div class="border rounded-md border-teal-500 text-teal-500 px-8 py-4  space-y-6">
          <div class="space-y-4">
            <p class="text-center">Contact Us</p>
            <p class="font-thin text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit
              interdum, ac
              aliquet odio
              mattis.</p>
          </div>
          <div class="space-y-4 flex flex-col ">
            <p>E-mail: <a class="underline" href="mailto:info@hazeltree.com"><span
                  class="font-light">info@hazeltree.com</span></a></p>
            <p>Tel. No. :<span class="font-light">(212) 651-4072</span>
          </div>
        </div>
      </div>
    </div>

    <div
      class="container  mx-auto max-w-6xl mt-12 border-t border-gray-800 pt-6  text-white flex items-center justify-between px-4 md:px-0">
      <div class="flex items-center space-x-6">
        <div>
          <img class="object-cover" src="/src/img/HazeltreeUniversityLogo.svg" alt="">
        </div>
        <div>
          <ul class="flex space-x-4 text-[0.6rem] text-xs font-light">
            <li>
              Copyright © 2023, Hazeltree</li>

            <li>
              <a href="">
                Personal Data Protection
              </a>
            </li>

            <li>
              <a href="">
                Privacy Statement
              </a>
            </li>
            <li>
              <a href="">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Logo -->
      <div>
        <ul class="flex space-x-4">
          <li>
            <a href="#">
              <svg viewbox="0 0 32 32" width="20" height="20" stroke="currentColor" fill="currentColor"
                class="text-trueGray500">
                <path
                  d="M17.4 18l0.9-5.8h-5.5v-3.8c0-1.6 0.8-3.1 3.2-3.1h2.6V0.4S16.3 0 14.1 0c-4.6 0-7.6 2.8-7.6 7.8v4.4H1.4V18h5.1v14h6.3V18z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg viewbox="0 0 32 32" width="20" height="20" stroke="currentColor" fill="currentColor"
                class="text-trueGray500">
                <path
                  d="M28.7 9.5c0 0.3 0 0.6 0 0.8 0 8.7-6.6 18.7-18.6 18.7-3.7 0-7.2-1.1-10.1-2.9 0.5 0.1 1 0.1 1.6 0 3.1 0 5.9-1 8.1-2.8-2.9-0.1-5.3-1.9-6.1-4.5 0.4 0.1 0.8 0.1 1.2 0.1 0.6 0 1.2-0.1 1.8-0.2-3-0.6-5.3-3.3-5.3-6.5v-0.1c0.9 0.5 1.9 0.8 3 0.9-1.8-1.2-2.9-3.2-3-5.5 0-1.2 0.3-2.3 0.9-3.3 3.2 4 8.1 6.6 13.6 6.9-0.1-0.5-0.2-1-0.2-1.5 0-3.6 2.9-6.6 6.6-6.6 1.9 0 3.6 0.8 4.7 2.1 1.5-0.3 2.9-0.8 4.2-1.6-0.5 1.5-1.5 2.8-2.9 3.6 1.3-0.1 2.6-0.5 3.8-1-0.9 1.3-2 2.5-3.3 3.4z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg viewbox="0 0 32 32" width="20" height="20" stroke="currentColor" fill="currentColor"
                class="text-trueGray500">
                <path
                  d="M14 8.8c-4 0-7.2 3.2-7.2 7.2s3.2 7.2 7.2 7.2S21.2 20 21.2 16 18 8.8 14 8.8z m0 11.9c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7-2.1 4.7-4.7 4.7z m9.2-12.2c0 0.9-0.8 1.7-1.7 1.7-0.9 0-1.7-0.8-1.7-1.7s0.8-1.7 1.7-1.7 1.7 0.8 1.7 1.7z m4.7 1.7c-0.1-2.2-0.6-4.2-2.3-5.9-1.6-1.6-3.6-2.1-5.8-2.2-2.3-0.1-9.2-0.1-11.6 0-2.2 0.1-4.2 0.6-5.8 2.2s-2.1 3.6-2.3 5.9c-0.1 2.3-0.1 9.2 0 11.6 0.1 2.2 0.6 4.2 2.3 5.8s3.6 2.1 5.8 2.3c2.3 0.1 9.2 0.1 11.6 0 2.2-0.1 4.2-0.6 5.8-2.3 1.6-1.6 2.1-3.6 2.3-5.8 0.1-2.3 0.1-9.2 0-11.6zM24.9 24.3c-0.5 1.2-1.4 2.2-2.6 2.6-1.8 0.7-6.2 0.6-8.3 0.6s-6.4 0.2-8.2-0.6c-1.2-0.5-2.2-1.4-2.7-2.7-0.7-1.8-0.6-6.2-0.6-8.2s-0.2-6.4 0.6-8.3c0.5-1.2 1.4-2.2 2.7-2.6 1.8-0.7 6.2-0.6 8.2-0.6s6.4-0.2 8.3 0.6c1.2 0.5 2.2 1.4 2.6 2.6 0.7 1.8 0.6 6.2 0.6 8.3s0.2 6.4-0.6 8.2z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg viewbox="0 0 32 32" width="20" height="20" stroke="currentColor" fill="currentColor"
                class="text-trueGray500">
                <path
                  d="M6.3 28H0.5V9.3h5.8zM3.4 6.8C1.5 6.8 0 5.2 0 3.4a3.4 3.4 0 0 1 6.7 0c0 1.9-1.5 3.4-3.3 3.4zM28 28h-5.8V18.9c0-2.2 0-5-3-5-3 0-3.5 2.4-3.5 4.8V28h-5.8V9.3h5.6v2.6h0.1c0.8-1.5 2.7-3 5.4-3.1 5.9 0 7 3.9 7 8.9V28z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

    </div>

  </footer>
  </footer>
  `;

  let skilljarContent = document.getElementById("skilljar-content");

  skilljarContent.insertAdjacentHTML("beforeend", footer);
}
