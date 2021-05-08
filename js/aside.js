{
    const toggleShowAsideBar = () => {
        const sideBarElement = document.querySelector(".aside");
        sideBarElement.classList.toggle("aside__article--show");
    };

    const changeButtonInnerText = (buttonElement) => {
        setTimeout(() => {
            buttonElement.innerText = (buttonElement.innerText === "<") ? ">" : "<";
        }, 500);
    };

    const changeAsideDisplay = () => {
        const showBarElement = document.querySelector(".js-aside__article");

        if (showBarElement.classList.contains("aside__article--display")) {
            showBarElement.classList.remove("aside__article--display");
        } else {
            setTimeout(() => {
                showBarElement.classList.add("aside__article--display");
            }, 500);
        }
    }

    const init = () => {
        const buttonElement = document.querySelector(".js-aside__button");

        buttonElement.addEventListener("click", () => {
            toggleShowAsideBar();
            changeButtonInnerText(buttonElement);
            changeAsideDisplay();
        });
    }

    init();
}