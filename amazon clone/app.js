let menubtn = document.querySelector(".menu-btn");
let overlay = document.querySelector(".overlay");
let menu = document.querySelector(".menu");

menubtn.addEventListener("click", function () {
    overlay.classList.add("overlayopen");
})

overlay.addEventListener("click", function () {
    overlay.classList.remove("overlayopen");
})
menu.addEventListener("click", function () {
    menu.classList.remove("overlayopen");
})