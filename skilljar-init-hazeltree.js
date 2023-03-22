let end = window.location.pathname;
let sourceLink = "https://ayazemregm.github.io/hazeltreeassets/";
let allcourseswiper = [];

let allCourses = [];

window.addEventListener("load", () => {
  defaultActions();
  footer();
  let footerCss = `<link rel="stylesheet" href="${sourceLink}footer.css">`;
  document.head.insertAdjacentHTML("beforeend", footerCss);
  switch (end) {
    case "/":
      console.log("landingpage");
      let catalogCss = `<link rel="stylesheet" href="${sourceLink}catalog-hazeltree.css">`;
      document.head.insertAdjacentHTML("beforeend", catalogCss);
      if (!window.location.href.includes("?q=")) {
        tabs();
      }
      addCourseTitle();
      initializeSwiper();
      break;
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
      document.body.style = "visibility: visible;";
      break;
    default:
      console.log("Default Fired");
      document.body.style = "visibility: visible;";
      break;
  }
  let sjPageDetail = document.querySelector(".sj-page-detail-course");
  let sjPageCurriculum = document.querySelector(".sj-page-curriculum");

  if (sjPageDetail !== null || sjPageCurriculum !== null) {
    let course_detail = `<link rel="stylesheet" href="${sourceLink}course-detail.css">`;
    document.head.insertAdjacentHTML("beforeend", course_detail);
    document.body.style = "visibility: visible;";
  }
  console.log(window.location.pathname);
  if (window.location.pathname) {
  }

  /*  let videoContent = document.querySelector(".course-fixed-content-video");
  if (videoContent) {
    window.dispatchEvent(new Event("resize"));
  } */

  // Search Event Listener
  let searchBox = document.getElementById("catalogSearchInput");
  console.log(searchBox);
  if (window.location.href.includes("?q=")) {
    let skilljarContent = document.getElementById("skilljar-content");
    let searchInfo = document.getElementById("catalog-search-info");
    let catalogContent = document.getElementById("catalog-content");

    skilljarContent.style = "visibility: hidden;"
    if (searchInfo) {
      searchInfo.remove();
    }
    if (catalogContent) {
      catalogContent.style = "max-width: unset;"
      catalogContent.style = "display: none;";
    }
    let searchResHeader = `<div id="searchRes" style="background-color: black; padding: 50px; margin-top: 30px;">
      <h1 style="color:#fff">
        Search Results
      </h1>
    </div>
    <div id="searchresflex" style="display: flex; flex-wrap: wrap; width: 100%; padding: 50px;"></div>`;
    if (!document.getElementById("searchRes")) {
      skilljarContent.insertAdjacentHTML("afterbegin", searchResHeader);
    }
    let searchRes = document.getElementById("searchresflex");
    searchRes.innerHTML = "";

    allCourses.forEach((e) => {
      if (!e.classList.contains("not-found")) {
        let node = e.cloneNode(true);
        searchRes.appendChild(node);
      }
    });
    document.body.style = "visibility: visible;";
    skilljarContent.style = "visibility: visible;"

  }
  if (searchBox) {
    searchBox.addEventListener("input", (event) => {
      console.log(event);
      let skilljarContent = document.getElementById("skilljar-content");
      let searchInfo = document.getElementById("catalog-search-info");
      let mainContent = document.querySelector(".top-row");

      skilljarContent.style = "visibility: hidden;"
      if (searchInfo) {
        searchInfo.remove();
      }
      if (mainContent) {
        mainContent.style = "max-width: unset;"
        mainContent.style = "display: none;";
      }
      let searchResHeader = `<div id="searchRes" style="background-color: black; padding: 20px 50px; display: flex; justify-content: space-between; align-items: center;">
      <h1 style="color:#fff">
        Search Results
      </h1>
      <a href="/"><button type="button">Back</button></a>
      </div>
      <div id="searchresflex" style="display: flex; flex-wrap: wrap; width: 100%; padding: 5rem; gap: 1rem; justify-content: center;"></div>`;
      if (!document.getElementById("searchRes")) {
        skilljarContent.insertAdjacentHTML("afterbegin", searchResHeader);
      }
      let searchRes = document.getElementById("searchresflex");
      searchRes.innerHTML = "";

      allCourses.forEach((e) => {
        if (event.data === null) {
          let node = e.cloneNode(true);
          node.classList.remove("not-found");
          searchRes.appendChild(node);
        } else if (!e.classList.contains("not-found")) {
          let node = e.cloneNode(true);
          searchRes.appendChild(node);
        }
      });
      document.body.style = "visibility: visible;";
      skilljarContent.style = "visibility: visible;";

    });
  }

});

function defaultActions() {
  let ep_footer = document.getElementById("ep-footer");
  let lp_footer = document.getElementById("lp-footer");
  let lessonbody = document.querySelector(".sj-page-lesson");
  console.log(lessonbody);
  if (ep_footer !== null && ep_footer !== undefined) {
    ep_footer.remove();
  }
  if (lp_footer !== null && lp_footer !== undefined && !lessonbody) {
    lp_footer.remove();
  }
}

// add course
function addCourseTitle() {
  let courseTitles = `
<div id="courseTitle">
   <h1 style="color:#fff" >
     Available Courses
   </h1>
   <p>
   You can view all of the courses available to you below.
   </p>
 </div>`;
  let catalogContent = document.getElementById("catalog-content");
  catalogContent.insertAdjacentHTML("beforeend", courseTitles);

  document.getElementById("getStartedBtn").onclick = function () {
    let catalogContent = document.getElementById("catalog-content");
    let offset = catalogContent.getBoundingClientRect().top;
    window.scrollTo({ top: offset - 50 });

  };
}

// swiper
function initializeSwiper() {
  let swiperTemplate = `  
<!-- Slider main container -->
<div class="swiper-container">
  <div class="swiper">
    <!-- Additional required wrapper -->
    <div id="course-sliders" class="swiper-wrapper">
      <!-- Slides --></div>
    <!-- If we need navigation buttons -->
    </div>
    <div class="swiper-button-prev-all swiper-button-prev"></div>
    <div class="swiper-button-next-all swiper-button-next"></div>
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
      allCourses.push(courses.item(i));
    }
  }

  let swiperSliders = document.querySelectorAll(".swiper-slide");

  for (let i = 0; i < filteredCourses.length; i++) {
    let courseNode = filteredCourses[i];

    swiperSliders.item(i).appendChild(courseNode);
  }

  const swiper = new Swiper(".swiper", {
    loop: true,
    initialSlide: 0,
    // centerInsufficientSlides: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 5,
    spaceBetween: 0,
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 30,
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

  allcourseswiper.push(swiper);
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
  <div class="tabs-center ">
   <h1 style="color:#fff;">Learning Paths</h1>
        <p style="font-size:1.125rem;">Find courses grouped by product type and user role in these tailored Learning Paths.</p>
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
    <div class="swiper-container swiper-container${i}">
    <div class="swiper${i}">
      <!-- Additional required wrapper -->
      <div id="tab-sliders${i}" class="swiper-wrapper">
      </div>
      <!-- If we need navigation buttons -->
      </div>
      <div class="swiper-button-prev-all swiper-button-prev${i}"></div>
      <div class="swiper-button-next-all swiper-button-next${i}"></div>
    </div>`;

    let tab = filteredPaths[i - 1].children.item(2).innerHTML;
    let elBtnTemplate = `<button id="pathTab${i}" class="tab-nav-item">${tab}</button>`;

    if (i === 1) {
      elBtnTemplate = `<button id="pathTab1" class="tab-nav-item tab-nav-item-active">${tab}</button>`;
    }
    tabsNav.insertAdjacentHTML("beforeend", elBtnTemplate);
    document
      .getElementById("tabs-content")
      .insertAdjacentHTML("afterbegin", tabTemplate);

    let axiosUrl = `${filteredPaths[i - 1].href}`;
    // console.log(filteredPaths);
    axios
      .get(axiosUrl)
      .then((e) => {
        let parsedDom = new DOMParser().parseFromString(e.data, "text/html");
        let pathCourses = parsedDom.getElementById("catalog-courses");

        if (pathCourses.children !== null && pathCourses.children.length > 0) {
          for (let k = 0; k < pathCourses.children.length; k++) {
            let tabSliders = document.getElementById(`tab-sliders${i}`);

            let courseNode = pathCourses.children[k];

            let courseNodeEl = document.createElement("div");
            courseNodeEl.classList.add("swiper-slide");

            let dataCourse = allCourses.filter((e) => {
              if (
                !e.classList.contains("not-found") &&
                e.dataset["type"] == "-c" &&
                e.dataset.course == courseNode.dataset.course
              ) {
                return e;
              }
            });

            dataCourse[0].children.item(1).firstChild.attributes[0].nodeValue =
              dataCourse[0].children.item(1).firstChild.attributes[1].nodeValue;
            let cloneNode = dataCourse[0].cloneNode(true);
            courseNodeEl.appendChild(cloneNode);
            tabSliders.insertAdjacentElement("afterbegin", courseNodeEl);
          }

          const swiper = new Swiper(`.swiper${i}`, {
            centerInsufficientSlides: true,
            initialSlide: 0,
            loop: false,
            navigation: {
              nextEl: `.swiper-button-next${i}`,
              prevEl: `.swiper-button-prev${i}`,
            },
            slidesPerView: 5,
            spaceBetween: 0,
            breakpoints: {
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 30,
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

          if (i !== 1) {
            document.querySelector(`.swiper-container${i}`).style =
              "display: none";
          }
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
          document.querySelector(`.swiper-container${i}`).style =
            "display: block";
        });
        document.body.style = "visibility:visible";
      });
  }
}
// footer
function footer() {
  let footer = `
     <footer id="hz-footer">
      <div class="footer-wrapper">  
      <div>
        <img height="17px" width="150px" src="https://hazeltree.com/wp-content/uploads/2020/04/Hazeltree-nav-logo.png" />
        <div>
          <a href="mailto:webmaster@example.com">info@hazeltree.com</a>
        </div>
      </div>
      <div >
        <p>New York(HQ)</p>
        <p>
          150 West 30th Street, 11th FL<br>
          New York, NY 10001<br>
         United States<br>
        </p>
        <p>
         Tel: <a href="tel:2127270883">(212) 727-0883</a>
        </p>
      </div>
      <div>
        <p>London</p>
        <p>
          20 North Audley Street,<br>
          London, W1K 6WE<br>
          United Kingdom<br>
        </p>
        <p>
          Tel: <a href="tel:442081583200">44 208 158 3200</a>
        </p>
      </div>
      <div>
        <p>Hong Kong</p>
        <p>
        Unit 905, 9/F, Kinwick Centre, 32<br>
        Hollywood Rd<br>
        Central, Hong Kong<br>
        </p>
        <p>
          Tel: <a href="tel:852 5808 2954">+852 5808 2954</a>
        </p>
      </div>
      </div>
    </footer>
  `;

  let skilljarContent = document.getElementById("skilljar-content");

  if (skilljarContent !== null && skilljarContent !== undefined) {
    skilljarContent.insertAdjacentHTML("beforeend", footer);
    document.getElementById("hz-footer").style = "width:100vw;";
  }
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
  document.body.style = "visibility: visible;";
}
