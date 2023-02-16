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
      let template = `<link rel="stylesheet" href="${sourceLink}catalog-hazeltree.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"/>
      <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
       <script defer src="${sourceLink}catalog-page.js></script>
      `;

      document.head.insertAdjacentHTML("beforeend", template);

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
