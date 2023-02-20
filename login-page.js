let end = window.location.pathname;
let sourceLink = "https://ayazemregm.github.io/hazeltreeassets/";

console.log("Loaded");

window.addEventListener("load", () => {
  switch (end) {
    case "/":
      console.log("Main Page");
      break;
    case "...":
      console.log("Login Page");
      let css = `<link rel="stylesheet" href="${sourceLink}login-page.css">`;
      document.head.insertAdjacentHTML("beforeend", css);
      break;
    default:
      console.log("Default Fired");
      break;
  }
});

function defaultActions() {
  // let footer = document.getElementById("ep-footer");
  // footer.remove();
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
