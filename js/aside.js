
let buttonElement = document.querySelector(".js-aside__button");
let sideBarElement = document.querySelector(".aside");
let showBarElement = document.querySelector(".js-aside__article");


buttonElement.addEventListener("click", () =>{
    sideBarElement.classList.toggle("aside__article--show");
    setTimeout(() => {
        buttonElement.innerText = (buttonElement.innerText === "<") ? ">" : "<";
    }, 500);
    if (showBarElement.classList.contains("aside__article--display")) {
        showBarElement.classList.remove("aside__article--display");
    } else {
    setTimeout(() => {
        showBarElement.classList.add("aside__article--display");
    }, 500);
    }
});


   