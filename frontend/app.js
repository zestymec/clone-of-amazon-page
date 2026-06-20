let menubtn = document.querySelector(".menu-btn");
let overlay = document.querySelector(".overlay");
let menu = document.querySelector(".menu");
let closebutton = document.querySelector(".close-btn")

menubtn.addEventListener("click", function () {
    overlay.classList.add("overlayopen");
    menu.classList.remove("menu-display")
})

overlay.addEventListener("click", function () {
    overlay.classList.remove("overlayopen");
    menu.classList.add("menu-display")
})
closebutton.addEventListener("click", function () {
    overlay.classList.remove("overlayopen");
    menu.classList.add("menu-display")
})

let checkboxes = document.querySelectorAll(".filter-col input[type='checkbox']");
let products = document.querySelectorAll(".product-card");

checkboxes.forEach(function (checkbox) {

    checkbox.addEventListener("change", function () {

        let filterClass = checkbox.classList[1];

        products.forEach(function (card) {

            let parentProduct = card.parentElement;

            if (checkbox.checked) {

                if (parentProduct.classList.contains(filterClass)) {
                    parentProduct.style.display = "block";
                } else {
                    parentProduct.style.display = "none";
                }

            } else {
                parentProduct.style.display = "block";
            }

        });

    });

});

