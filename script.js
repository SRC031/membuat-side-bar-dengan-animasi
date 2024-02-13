const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitich = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close")
    });
    searchBtn.addEventListener("click", () => {
        sidebar.classList.remove("close")
    });



    modeSwitich.addEventListener("click", () => {
        body.classList.toggle("dark")

        if(body.classList.contsins("drak")) {
            modeText.innerText = "Light Mode"
        }else{
            modeText.innerText = "Dark Mode"
        }
    });