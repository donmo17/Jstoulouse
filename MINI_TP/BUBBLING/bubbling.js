document.addEventListener("DOMContentLoaded", function () {
    const menus = document.querySelectorAll(".menu");

    menus.forEach(function (menu) {
        const button = menu.querySelector(".menu-btn");
        const dropdown = menu.querySelector(".dropdown-content");

        button.addEventListener("click", function (event) {
            event.stopPropagation();
            closeAllDropdowns();
            dropdown.classList.toggle("show");
        });
    });

    function closeAllDropdowns() {
        const dropdowns = document.querySelectorAll(".dropdown-content");
        dropdowns.forEach(function (dropdown) {
            dropdown.classList.remove("show");
        });
    }

    window.addEventListener("click", function () {
        closeAllDropdowns();
    });
});
