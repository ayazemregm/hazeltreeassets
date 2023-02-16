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
      const catalogContent = document.getElementById("#catalog-content");
      catalogContent.insertAdjacentHTML("afterbegin", test);
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
let test = `
 <div >
   <h2 >
     How Hazeltree University works for you?
   </h2>
   <p c>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
     libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
     sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
   </p>
 </div>`;

const catalogContent = document.getElementById("#catalog-content");
catalogContent.insertAdjacentHTML("afterbegin", test);
