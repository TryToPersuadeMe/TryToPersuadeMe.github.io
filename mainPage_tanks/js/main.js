$(document).ready(() => {
  /* /*   /* navigation and footer js. Global JS */
  // its check browser for suppport WEBp img
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector("body").classList.add("webp");
    }
  });

  const slickSettings = () => {
  $(".boxes__row").slick({
    responsive: [
      { breakpoint: 10000, settings: "unslick" },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: true,
          dots: false,
          infinite: false,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          centerMode: true,
          infinite: false,
          variableWidth: true,
          initialSlide: 2,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: false,
          initialSlide: 2,
          centerMode: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          infinite: false,
          centerMode: true,
          initialSlide: 2,
          variableWidth: true,
          slidesToShow: 1,
        },
      },
    ],
  });
};

slickSettings();

$(window).on("resize", function () {
  if ($(window).width() < 1600) {
    slickSettings();
  } else {
    $(".boxes__row").slick("unslick");
  }
});
;
});

const header = {
  button: "header__burgerMenu",
  navigation: "navigation",
  screen: "wrapper",
  logo: "header__logo",
  language: "language",
};

const handleClick = document.querySelector("." + header.button);
const nav = document.querySelector("." + header.navigation);
const body = document.getElementsByTagName("body")[0];
const screen = document.querySelector("." + header.screen);

const logo = document.querySelector("." + header.logo);
const language = document.querySelector("." + header.language);
const chooseLanguage = document.querySelectorAll("." + header.language);

handleClick.addEventListener("click", function () {
  this.classList.toggle(header.button + "_active");
  nav.classList.toggle(header.navigation + "_active");

  screen.classList.toggle("shadow");
  body.classList.toggle("block");

  if (handleClick.classList.contains(header.button + "_active")) {
    logo.style.opacity = 0;
    language.style.opacity = 0;
  } else {
    logo.style.opacity = 1;
    language.style.opacity = 1;
  }
});

window.addEventListener("click", function () {
  if (
    event.target == nav &&
    nav.classList.contains(header.navigation + "_active") &&
    event.target != handleClick
  ) {
    body.classList.remove("block");
    handleClick.classList.remove(header.button + "_active");
    nav.classList.remove(header.navigation + "_active");
    screen.classList.remove("shadow");
    logo.style.opacity = 1;
    language.style.opacity = 1;
  }
});

/* navigation */

const menuLink = document.querySelector(".navigation__links_service");
const subMenu = document.querySelector(".subMenu");

menuLink.addEventListener("mouseenter", function () {
  let menu = event.currentTarget.nextElementSibling;

  menu.classList.add("subMenu_active");
  menu.style.maxHeight = menu.scrollHeight * 10 + "px";
});

subMenu.addEventListener("mouseleave", function () {
  subMenu.classList.remove("subMenu_active");
  subMenu.style.maxHeight = subMenu.style.maxHeight = 0;
});

screen.addEventListener("click", function () {
  if (event.target != subMenu) {
    subMenu.style.maxHeight = subMenu.style.maxHeight = 0;
    subMenu.classList.remove("subMenu_active");
  }
});

/* change language */

language.addEventListener("click", function () {
  this.querySelector("." + header.language + "__wrapper").classList.toggle(
    header.language + "_open"
  );
});

for (const option of document.querySelectorAll("." + header.language + "__item")) {
  option.addEventListener("click", function () {
    if (!this.classList.contains("." + header.language + "__item_selected")) {
      this.parentNode
        .querySelector("." + header.language + "__item" + "." + header.language + "__item_selected")
        .classList.remove("." + header.language + "__item_selected");
      this.classList.add(header.language + "__item_selected");
      this.closest("." + header.language + "__wrapper").querySelector(
        "." + header.language + "__choosen"
      ).innerHTML = this.innerHTML;
    }
  });
}

window.addEventListener("click", function (e) {
  const select = document.querySelector("." + header.language + "__wrapper");
  if (!select.contains(e.target)) {
    select.classList.remove(header.language + "_open");
  }
});
;
