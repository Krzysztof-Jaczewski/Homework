{
    const themeButtonElement = document.querySelector(".js-themeButton");
    
    const toggleBackgroundColor = () => {
        const themeButton__indicatorElement = document.querySelector(".js-themeButton__indicator");
        const body = document.querySelector("body");

        themeButton__indicatorElement.classList.toggle("themeButton--active");
        themeButton__indicatorElement.classList.toggle("themeButton--background");
        themeButtonElement.classList.toggle("themeButton--background");
        body.classList.toggle("themeButton--background");
    };
    const changingFontColotOfTableCaptions = () =>{
        const table__captionNodeList = document.querySelectorAll(".js-table__caption");
        for (let checkbox of table__captionNodeList) {
            checkbox.classList.toggle("table__caption--font");
        }
    };

    themeButtonElement.addEventListener("click", () => {
        toggleBackgroundColor();
        changingFontColotOfTableCaptions();
    });
}