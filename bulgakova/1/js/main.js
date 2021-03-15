var navPanel = new Swiper(".navigationSlider__container", {
  spaceBetween: 20,
  watchOverflow: true,
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    // when window width is >= 320px

    480: {
      slidesPerView: 1,
    },

    // when window width is >= 480px
    600: {
      slidesPerView: 2,
    },

    // when window width is >= 640px
    769: {
      slidesPerView: 4,
    },
  },
});
;
const watchVideo = () => {
  const $container = document.querySelector(".description");

  $container.addEventListener("click", () => {
    if (event.target.classList.contains("videoCard__video") ) {
      let iFrame = event.target.querySelector(".videoCard__iframeVideo");
      iFrame.setAttribute("src", iFrame.dataset.src);
      event.target.classList.add("active");
    }
  });
};

watchVideo();
;
const customNavigation = () => {
  const $sliderParent = document.querySelectorAll(".mainSlider");

  const createEl = (names, wrapper) => {
    names.forEach((n, index) =>
      wrapper.insertAdjacentHTML(
        "beforeend",
        `<div class="sliderNavigation__button" custom_index = ${index}>${n.innerText}</div>`
      )
    );
  };

  $sliderParent.forEach((value) => {
    const $navigationWrapper = value.querySelector(".sliderNavigation");
    const names = value.querySelectorAll(".videoCard__name");

    createEl(names, $navigationWrapper);
  });
};

customNavigation();

var descriptionSlider = new Swiper(".mainSlider__slider", {
  watchOverflow: true,
  speed: 600,
  slidesPerView: 2,

  observer: true,
  observeParents: true,
  observeSlideChildren: true,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },

    // when window width is >= 640px
    480: {
      slidesPerView: 2,
    },
  },
  on: {
    activeIndexChange: function () {
      let nav = this.$el[0].parentNode.querySelectorAll(".sliderNavigation__button");
      nav[this.activeIndex].classList.add("active");
      nav[this.previousIndex].classList.remove("active");
    },

    init: function () {
      // const $lastSlide = this.slides[this.slides.length - 1];

      if (this.wrapperEl.querySelectorAll(".videoCard").length == 1) {
        this.$el[0].parentNode.classList.add("overflowFalse");
        // $lastSlide.remove();
      }
    },

    afterInit: function () {
      // && this.$wrapperEl[0].children.length != 1
      if (window.innerWidth > 480) {
        this.$wrapperEl[0].insertAdjacentHTML(
          "beforeend",
          `<div class="swiper-slide dummySlide" style="opacity:0;visibility:hidden"></div>`
        );
      }

      let nav = this.$el[0].parentNode.querySelectorAll(".sliderNavigation__button");
      nav[this.activeIndex].classList.add("active");

      this.$el[0].parentNode.addEventListener("click", () => {
        if (event.target.classList.contains("sliderNavigation__button")) {
          this.slideTo(event.target.getAttribute("custom_index"));
        }
      });
    },

    resize: function () {
      const $lastSlide = this.slides[this.slides.length - 1];
      if (window.innerWidth < 480 && $lastSlide.classList.contains("dummySlide")) {
        $lastSlide.remove();
      } else if (window.innerWidth > 480 && !$lastSlide.classList.contains("dummySlide")) {
        this.$wrapperEl[0].insertAdjacentHTML(
          "beforeend",
          `<div class="swiper-slide dummySlide" style="opacity:0,visibility:hidden"></div>`
        );
      }
    },
  },
});
;
class Tabs {
  constructor(props) {
    this.$container = document.querySelector("." + props.container);
    this.$button = this.$container.querySelectorAll("." + props.button.selector);
    this.$tabContent = this.$container.querySelectorAll("." + props.tabContent.selector);
    this.data_button = props.button.data;
    this.data_tabContent = props.tabContent.data;

    this.$current_counter = document.querySelector("." + props.counter.current_counter_el);
    this.$next_counter = document.querySelector("." + props.counter.next_counter_el);

    this.startLoop(props.startedSlider);
    this.getCurrentTab();
    this.setupCounter(props);

    /* стрелки - навигация */
    this.arrow_prev = document.querySelector("." + props.arrows.prev);
    this.arrow_next = document.querySelector("." + props.arrows.next);
    this.arrowsClickHandler(this.arrow_prev, this.arrow_next, props);

    /* main handler click */
    this.containerClickHandler(props);
  }

  /* цикл при запуске страницы */
  startLoop(order) {
    this.$button.forEach((i, index) => {
      this.$tabContent[index].classList.add("animate__animated");
      if (i.getAttribute(this.data_button) == order) i.classList.add("active");
      if (this.$tabContent[index].getAttribute(this.data_tabContent) == order) this.$tabContent[index].classList.add("active");
    });

    this.$container.setAttribute("current_tab", order);
  }

  /* счетчик слайдов */
  setupCounter(props) {
    if (props.counter.status) {
      this.$current_counter.innerText = "-" + this.getCurrentTab();

      if (this.getCurrentTab() == this.$tabContent.length) {
        this.$next_counter.innerText = "-1";
      } else {
        this.$next_counter.innerText = "-" + (this.getCurrentTab() + 1);
      }
    }
  }

  /* клик по контейнеру, в котором находятся все кнопки  */
  containerClickHandler(props) {
    this.$container.addEventListener("click", () => {
      if (event.target.classList.contains(props.button.selector)) {
        let eventTargetData = event.target.getAttribute(this.data_button);
        this.iteration(props, eventTargetData);
        event.target.classList.add("active");
      }
    });
  }

  /* итерация по массивам со сменой состояния */
  iteration(props, currentItem) {
    this.$button.forEach((item, index) => {
      item.classList.remove("active");
      this.$tabContent[index].classList.remove("active");
      if (this.$tabContent[index].getAttribute(this.data_tabContent) == currentItem) {
        this.$tabContent[index].classList.add("active", props.animation.animation_show);
      }

      if (item.getAttribute(this.data_button) == currentItem) {
        item.classList.add("active");
      }
    });
    this.setCurrentTab(currentItem);
    this.setupCounter(props);
  }

  /* ПОЛУЧИТЬ текущий активный таб в атрибуте контейнера */
  getCurrentTab = () => {
    let num = this.$container.getAttribute("current_tab");
    return Number(num);
  };

  /* ЗАПИСАТЬ текущий активный таб в атрибуте контейнера */
  setCurrentTab = (order) => this.$container.setAttribute("current_tab", order);

  /* клик по стрелкам*/
  arrowsClickHandler(prev, next, props) {
    const arrowClick = (prev, next) => {
      let tab_order;

      if (prev) {
        this.getCurrentTab() > 1 ? (tab_order = this.getCurrentTab() - 1) : (tab_order = this.$tabContent.length);
      }

      if (next) {
        this.getCurrentTab() >= this.$tabContent.length ? (tab_order = 1) : (tab_order = this.getCurrentTab() + 1);
 
      }

      this.iteration(props, tab_order);
    };

    if (props.arrows.status) {
      prev.addEventListener("click", () => arrowClick(prev, false));
      next.addEventListener("click", () => arrowClick(false, next));
    }
  }
}

const tabs = new Tabs({
  button: {
    selector: "tabButton-js",
    data: "tab_button",
  },

  tabContent: {
    selector: "mainSlider",
    data: "tab_content",
  },

  /* контейнер с табами  */
  container: "description__container",

  /* стартовый таб */
  startedSlider: 0,

  /* счетчик табов */
  counter: {
    status: false,
    current_counter_el: "tabsControlPanel__currentTab",
    next_counter_el: "tabsControlPanel__nextTab",
  },

  /* стрелки */
  arrows: {
    status: false,
    next: "tabsControlPanel__arrow-next",
    prev: "tabsControlPanel__arrow-prev",
  },

  /* анимация появления */
  animation: {
    animation_show: "animate__fadeInUp",
  },
});
;
