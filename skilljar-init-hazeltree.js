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
   <h2>
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
