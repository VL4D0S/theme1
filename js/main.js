document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector(".content"),
          main = document.querySelector(".main__page"),
          acc = document.querySelectorAll(".nav__item-header"),
          arrows = document.querySelectorAll(".item__header-arrow"),
          productsList = document.querySelectorAll(".nav__content-item"),
          productsCat = document.querySelectorAll(".product__category"),
          header = document.querySelector(".header"),
          menu = document.querySelector(".header-menu");

    function hideContent(elem) {
        elem.classList.remove("show");
        elem.classList.add("hide"); 
    }

    function showContent(elem) {
        elem.classList.remove("hide");
        elem.classList.add("show");
    }

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
        menu.addEventListener("click", function () {
            acc[i].nextElementSibling.style.maxHeight = null;
            arrows[i].classList.remove("arrow-active");
        });
    }
    for (let j = 0; j < productsList.length; j++) {
        productsList[j].addEventListener("click", function () {
            header.classList.add("header__menu-active");
            menu.classList.add("menu-active");
            hideContent(main);
            content.style.backgroundImage = `url(./img/category-bg${j + 1}.jpg)`;
            showContent(productsCat[j]);
        });
        menu.addEventListener("click", function () {
            header.classList.remove("header__menu-active");
            menu.classList.remove("menu-active");
            hideContent(productsCat[j]);
            content.style.backgroundImage = "url(./img/main-bacground.jpg)";
            showContent(main);
        });
    }
});
