let end = window.location.pathname;
let sourceLink = "https://ayazemregm.github.io/hazeltreeassets/";

console.log("loaded");
//   defaultActions();

window.addEventListener("load", () => {
  switch (end) {
    case "/":
      console.log("Main Page");
      break;
    case "/page/hazeltree-university":
      console.log("testPage");
      let css = `<link rel="stylesheet" href="${sourceLink}catalog-hazeltree.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"/>`;
      let script = `<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
    <script src="${sourceLink}catalog-page.js"></script>`;
      document.head.insertAdjacentHTML("beforeend", css);
      document.body.insertAdjacentHTML("afterend", script);

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
