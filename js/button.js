{
    const toggleBackgroundColor = (themeButtonElement) => {
        const themeIndicator = document.querySelector(".js-themeButton__indicator");
        const body = document.querySelector("body");

        themeButtonElement.classList.toggle("themeButton--background");
        themeIndicator.classList.toggle("themeButton--active");
        themeIndicator.classList.toggle("themeButton--background");
        body.classList.toggle("themeButton--background");
    };

    const changingFontColorOfTableCaptions = () => {
        const table__captionNodeList = document.querySelectorAll(".js-table__caption");
        for (let checkbox of table__captionNodeList) {
            checkbox.classList.toggle("table__caption--font");
        }
    };

    const init = () => {
        const themeButtonElement = document.querySelector(".js-themeButton");

        themeButtonElement.addEventListener("click", () => {
            toggleBackgroundColor(themeButtonElement);
            changingFontColorOfTableCaptions();
        });
    }
    init();
}
