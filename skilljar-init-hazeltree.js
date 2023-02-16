let end = window.location.pathname;

window.addEventListener("load", () => {
    console.log("loaded");
    defaultActions();
    switch (end) {
        case "/":
            console.log("Main Page");
            break;
        case "/page/hazeltree-university":
            console.log("testPage");
            let template = `<link rel="stylesheet" href="https://hc.greenmusk.com/assets/hazeltree/catalog-hazeltree.css">`;
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





