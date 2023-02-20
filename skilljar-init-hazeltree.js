"use strict";
let end = window.location.pathname;
let sourceLink = "https://ayazemregm.github.io/hazeltreeassets/";

console.log("loaded");

window.addEventListener("load", () => {
  defaultActions();
  console.log(end);
  switch (end) {
    case "/":
      console.log("Main Page");
      break;
    case "/page/hazeltree-university":
      console.log("testPage");
      let catalogCss = `<link rel="stylesheet" href="${sourceLink}catalog-hazeltree.css">`;
      document.head.insertAdjacentHTML("beforeend", catalogCss);
      addCourseTitle();
      initializeSwiper();
      tabs();
      footer();
      break;
    // /accounts/login/
    case "/accounts/login/":
      console.log("login");
      let loginCss = `<link rel="stylesheet" href="${sourceLink}login-hazeltree.css">`;
      document.head.insertAdjacentHTML("beforeend", loginCss);
      removeHeader();
      addClass();
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

  let courseBoxTemplate = `
 <div class="card">
      <!-- card image -->
      <div class="card-image">
        <img src="https://picsum.photos/seed/picsum/200/300" alt="">
      </div>
      <!-- card text -->
      <div>
        <p>Lorem Ipsum</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, eveniet?</p>
      </div>
    </div>
`;

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
    let element = courseBoxTemplate;
    // swiperSliders.item(i).appendChild(filteredCourses[i]);
    swiperSliders.item(i).appendChild(courseBoxTemplate);
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
  let tabContainer = `<div class="tab-contentBG">
  <div id="tabs-content" class="tabs-content">
    <div id="tab-container">

    </div>
  </div>
</div>`;

  let tabsText = `<div class="tabs-top">
  <div class="tabs-text-wrapper">
  <div class="tabs-center">
      <div class="tabs-text-content">
        <p>Hazeltree University brings all your creativity together ! </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
      </div>
    </div>
      <section class="tabs">
        <div id="tabs-title">
        <div class="tabs-nav">
       
        </div>
      </div>

       <div class="tab-contentBG">
      <div id="tabs-content" class="tabs-content">
        <div class="tab-content active" id="asset-managers">tab-1</div>
        <div class="tab-content" id="hedge-funs">
          <div id="hedge-content" class="">tab-2</div>
        </div>
        <div class="tab-content" id="financial">tab-3</div>
        <div class="tab-content" id="pensions">tab-4</div>
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
  let tabsNav = document.querySelector(".tabs-nav");

  let catalogCourses = document.getElementById("catalog-courses");

  let courses = catalogCourses.children;
  console.log(catalogCourses.children);
  let filteredCourses = [];

  for (let i = 0; i < courses.length; i++) {
    if (
      !catalogCourses.children.item(i).classList.contains("not-found") &&
      catalogCourses.children.item(i).dataset["type"] == "-x"
    ) {
      console.log("loop " + i);
      filteredCourses.push(courses.item(i));
      courses.item(i).remove();
    }
  }

  filteredCourses.forEach((e) => {
    console.log(e.children.item(2).innerText);
    let elBtnTemplate = `<button class="tab-nav-item">${
      e.children.item(2).innerText
    }</button> `;
    tabsNav.insertAdjacentHTML("beforeend", elBtnTemplate);
  });

  document
    .getElementById("asset-managers")
    .insertAdjacentHTML("afterbegin", tabTemplate);
}
// footer
function footer() {
  let footer = `
     <footer id="footer" class=" ">
      <div class="footer-wrapper">  
      <div>
        <img height="17px" width="150px" src="https://hazeltree.com/wp-content/uploads/2020/04/Hazeltree-nav-logo.png" />
        <div>
          <a href="mailto:webmaster@example.com">info@hazeltree.com</a>
        </div>
      </div>
      <div>
        <p>New York(HQ)</p>
        <address>
          150 West 30th Street, 11th FL<br>
          New York, NY 10001<br>
         United States<br>
        </address>
        <p>
         Tel: <a href="tel:2127270883">(212) 727-0883</a>
        </p>
      </div>
      <div>
        <p>London</p>
        <address>
          20 North Audley Street,<br>
          London, W1K 6WE<br>
          United Kingdom<br>
        </address>
        <p>
          Tel: <a href="tel:442081583200">44 208 158 3200</a>
        </p>
      </div>
      <div>
        <p>Hong Kong</p>
        <address>
        Unit 905, 9/F, Kinwick Centre, 32<br>
        Hollywood Rd<br>
        Central, Hong Kong<br>
        </address>
        <p>
          Tel: <a href="tel:852 5808 2954">+852 5808 2954</a>
        </p>
      </div>
      </div>
    </footer>
  `;

  let skilljarContent = document.getElementById("skilljar-content");

  skilljarContent.insertAdjacentHTML("beforeend", footer);
}

function removeHeader() {
  let headerLeft = document.getElementById("header-left");
  headerLeft.remove();

  let socialAccountProviders = document.querySelector(
    ".socialaccount_providers"
  );
  socialAccountProviders.remove();
}

function addClass() {
  let loginTabContainer = document.getElementById("login-tab-container");
  loginTabContainer.classList.add("custom-black");

  let loginTitle = document.querySelector(".loginNote span");
  loginTitle.classList.add("custom-white-text");
}
