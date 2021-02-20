const classes = {
  wrapper: "block__box",
  column: "block__column",
  image: "block__image",
  slider: "slider",
};

let block = document.querySelectorAll("." + classes.wrapper);
let image = document.querySelectorAll("." + classes.image);
let column = document.querySelectorAll("." + classes.column);
let slider = document.querySelector("." + classes.slider);

let scrollCoef = 0.0035;

document.addEventListener("scroll", function () {
  const boxesOpacity = () => {
    for (let index = 0; index < image.length; index++) {
      /* get position of image */
      let fromTop = block[index].getBoundingClientRect().top;
      let position = 1 - fromTop * scrollCoef;

      /* hide or show  */
      if (fromTop >= 0) {
        /* scroll DOWN */
        column[index].style.opacity = position + 0.5;
        image[index].style.opacity = position + 0.5;
        /* scroll UP */
      } else {
        column[index].style.opacity = 2.5 - position;
        image[index].style.opacity = 2.5 - position;
      }
    }
  };
  boxesOpacity();

  const sliderOpacity = () => {
    /* get position of slider */
    let fromTop = slider.getBoundingClientRect().top;
    let position = 1 - fromTop * scrollCoef;

    /* hide or show  */
    if (fromTop >= 0) {
      /* scroll DOWN */
      slider.style.opacity = position + 0.5;
      /* scroll UP */
    } else {
      slider.style.opacity = 2 - position;
    }
  };
  sliderOpacity();
});

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      const fromTop = entry.target.getBoundingClientRect().top;
      const position = 1 - fromTop * scrollCoef;
      if (entry.isIntersecting) {
        entry.target.lastElementChild.classList.add(classes.image + "_active");
      } else {
        entry.target.lastElementChild.classList.remove(classes.image + "_active");
      }
    });
  },
  {
    threshold: [
      0.1,
      0.15,
      0.2,
      0.25,
      0.3,
      0.35,
      0.4,
      0.45,
      0.5,
      0.55,
      0.6,
      0.65,
      0.7,
      0.75,
      0.8,
      0.85,
      0.9,
      0.95,
      1,
    ],
  }
);

block.forEach((value) => observer.observe(value));
;

$(document).ready(() => {
  $(".slider__wrapper").slick({
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
          dots: false,
        },
      },
    ],
  });

  $(".sliderImage").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
;
