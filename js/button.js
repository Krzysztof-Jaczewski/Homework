let themeButton__indicatorElement = document.querySelector(".js-themeButton__indicator");
let themeButtonElement = document.querySelector(".js-themeButton");
let body = document.querySelector("body");
let table__captionNodeList = document.querySelectorAll(".js-table__caption");

themeButtonElement.addEventListener("click", () => {
    themeButton__indicatorElement.classList.toggle("themeButton--active");
    themeButton__indicatorElement.classList.toggle("themeButton--background");
    themeButtonElement.classList.toggle("themeButton--background");
    body.classList.toggle("themeButton--background");
    for(let checkbox of table__captionNodeList){
        checkbox.classList.toggle("table__caption--font");
    }
});