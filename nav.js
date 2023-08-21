const headerNav = document.querySelector(".header__nav");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener('click', () => {
    if (navToggle.getAttribute("aria-expanded") == "false") {
        navToggle.setAttribute("aria-expanded", true);
    } else {
        navToggle.setAttribute("aria-expanded", false);
    }

    if (headerNav.getAttribute("data-visibility") == "false") {
        headerNav.setAttribute("data-visibility", true);
    } else {
        headerNav.setAttribute("data-visibility", false);
    }
}) 