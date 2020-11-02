document.addEventListener("DOMContentLoaded", () => {
    let acc = document.querySelectorAll(".nav__item-header");
    let arrows = document.querySelectorAll(".item__header-arrow");

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            arrows[i].classList.toggle("arrow-active");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});
