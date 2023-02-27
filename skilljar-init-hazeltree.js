"use strict";
let end = window.location.pathname;
let sourceLink = "https://ayazemregm.github.io/hazeltreeassets/";

console.log("loaded");

window.addEventListener("load", () => {
  defaultActions();
  console.log(end);
  switch (end) {
    case "/":
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
      addLoginText();
      break;
    case "/accounts/signup/":
      console.log("signup");
      let signUp = `<link rel="stylesheet" href="${sourceLink}login-hazeltree.css">`;
      document.head.insertAdjacentHTML("beforeend", signUp);
      removeHeader();
      addLoginText();

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

  let filteredCourses = [];

  for (let i = 0; i < courses.length; i++) {
    if (
      !catalogCourses.children.item(i).classList.contains("not-found") &&
      catalogCourses.children.item(i).dataset["type"] == "-c"
    ) {
      let sliders = document.getElementById("course-sliders");

      let swiperSlide = `<div class="swiper-slide"></div>`;
      sliders.insertAdjacentHTML("beforeend", swiperSlide);
      filteredCourses.push(courses.item(i));
    }
  }

  let swiperSliders = document.querySelectorAll(".swiper-slide");

  for (let i = 0; i < filteredCourses.length; i++) {
    let courseNode = filteredCourses[i];

    let image = courseNode.children.item(1).firstChild.currentSrc;
    // courseNode.childNodes[3].childNodes[1].attributes[1].textContent;
    let title = courseNode.children.item(2).innerText;
    let description = courseNode.children.item(3).innerText;

    let courseBoxTemplate = `
 <div class="card">
      <!-- card image -->
      <div class="card-image">
        <img src="${image}" alt="">
      </div>
      <!-- card text -->
      <div>
        <p style="font-weight: 600; margin-bottom: 0.5rem;">${title}</p>
        <p style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;  
  overflow: hidden;">${description}</p>
      </div>
    </div>
`;
    let element = courseBoxTemplate;
    // swiperSliders.item(i).appendChild(filteredCourses[i]);
    swiperSliders.item(i).insertAdjacentHTML("afterbegin", courseBoxTemplate);
  }

  const swiper = new Swiper(".swiper", {
    loop: false,
    initialSlide: 2,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 5,
    spaceBetween: 0,
    breakpoints: {
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
      
      </div>
    </div>
      </section>
    </div>
    </div>`;

  let catalogContent = document.getElementById("catalog-content");
  catalogContent.insertAdjacentHTML("beforeend", tabsText);

  let tabsNav = document.querySelector(".tabs-nav");

  let catalogCourses = document.getElementById("catalog-courses");

  let courses = catalogCourses.children;

  let filteredPaths = [];

  for (let i = 0; i < courses.length; i++) {
    if (
      !catalogCourses.children.item(i).classList.contains("not-found") &&
      catalogCourses.children.item(i).dataset["type"] == "-x"
    ) {
      filteredPaths.push(courses.item(i));
      // courses.item(i).remove();
    }
  }

  for (let i = 1; i <= filteredPaths.length; i++) {
    let tabTemplate = `  
    <!-- Slider main container -->
    <div  class="swiper swiper${i}">
      <!-- Additional required wrapper -->
      <div id="tab-sliders${i}" class="swiper-wrapper">
     
        <!-- Slides --></div>
      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>`;

    let tab = filteredPaths[i - 1].children.item(2).innerText;
    // console.log(filteredPaths[i - 1]);
    console.log(filteredPaths[i - 1].href);
    let elBtnTemplate = `<button id="pathTab${i}" class="tab-nav-item">${tab}</button> `;

    filteredPaths[i - 1].children.item(2);
    if (i === 1) {
      elBtnTemplate = `<button  id="pathTab1"  class="tab-nav-item tab-nav-item-active ">${tab}</button> `;
    }
    tabsNav.insertAdjacentHTML("beforeend", elBtnTemplate);
    document
      .getElementById("tabs-content")
      .insertAdjacentHTML("afterbegin", tabTemplate);

    let axiosUrl = `${filteredPaths[i - 1].href}`;
    axios
      .get(axiosUrl)
      .then((e) => {
        let parsedDom = new DOMParser().parseFromString(e.data, "text/html");
        let pathCourses = parsedDom.getElementById("catalog-courses").children;

        for (let k = 0; k < pathCourses.length; k++) {
          let tabSliders = document.getElementById(`tab-sliders${i}`);

          let courseNode = pathCourses[k];

          let image =
            courseNode.childNodes[3].childNodes[1].attributes[1].textContent;
          let title = courseNode.children.item(2).innerText;
          let description = courseNode.children.item(3).innerText;

          let courseBoxTemplate = `
   <div class="card">
      <!-- card image -->
      <div class="card-image">
        <img src="${image}" alt="">
      </div>
      <!-- card text -->
      <div>
        <p style="font-weight: 600; margin-bottom: 0.5rem;">${title}</p>
        <p style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;  
  overflow: hidden;">${description}</p>
      </div>
    </div>
`;
          let swiperSlideElement = `<div class="swiper-slide">${courseBoxTemplate}</div>`;

          // swiperSliders.item(i).appendChild(filteredCourses[i]);
          tabSliders.insertAdjacentHTML("afterbegin", swiperSlideElement);
        }

        const swiper = new Swiper(`.swiper${i}`, {
          loop: false,
          initialSlide: 3,

          centeredSlides: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          slidesPerView: 5,
          spaceBetween: 0,
          breakpoints: {
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

        if (i !== 1) {
          document.querySelector(`.swiper${i}`).style = "display: none";
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        document.getElementById(`pathTab${i}`).addEventListener("click", () => {
          let tabContent = document.getElementById("tabs-content");
          /*   let children = Array.from(tabContent.children);
          children.forEach((child) => {
            console.log(child);
            child.style = "display: none";
          });
          console.log([...tabContent.children]); */

          for (let s = 0; s < tabContent.children.length; s++) {
            tabContent.children.item(s).style = "display:none";
          }

          let tabNav = document.querySelector(".tabs-nav");
          for (let z = 0; z < tabNav.children.length; z++) {
            tabNav.children.item(z).classList.remove("tab-nav-item-active");
          }
          document
            .getElementById(`pathTab${i}`)
            .classList.add("tab-nav-item-active");
          document.querySelector(`.swiper${i}`).style = "display: block";
        });
      });
  }
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
  socialAccountProviders.parentNode.remove();
}

function addLoginText() {
  let template = `
   <div>
        <div>
          <img src="https://cc.sj-cdn.net/instructor/1tohle0jm7gj4-hazeltree-university/themes/k9ioygic70ad/header-logo.1676544242.svg" alt="">
              </div>

              <div style="color:white;">
                <p>Hazeltree's innovative cloud-based treasury solutions deliver enhanced transparency, liquidity,
                  improved performance and risk mitigation.</p>
                <div>

                </div>
              </div>
            </div>
  `;
  document
    .querySelectorAll(".row")[2]
    .insertAdjacentHTML("afterbegin", template);
}
