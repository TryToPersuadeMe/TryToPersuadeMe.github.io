const calculator = () => {
  const $wrapper = document.querySelector(".calculator__gridWrapper");
  const $resultSum = $wrapper.querySelector("#resultSum");
  const $discount = $wrapper.querySelector("#discount");
  const $progressbarDate = $wrapper.querySelector(".progressBar__date");
  const $progressbarLine = $wrapper.querySelector(".progressBar__line");
  let allDateSum = 0;

  const countDatePercents = () => {
    const $allInputs = $wrapper.querySelectorAll("input");
    $allInputs.forEach((el) => {
      let date = el.getAttribute("date");
      allDateSum += Number(date);
    });
  };

  countDatePercents();

  $wrapper.addEventListener("click", () => {
    let result_sum = 0;
    let result_date = 0;

    /* parent = customCheckbox. Event target = input */
    let parent = event.target.offsetParent;
    if (event.target.classList.contains("customCheckbox__input")) {
      parent.classList.toggle("customCheckbox_active");
      count();
      processingResult();
      progressbarAnimate();
    }

    function count() {
      let activeCheckboxes = document.querySelectorAll(".customCheckbox_active");
      activeCheckboxes.forEach((el) => {
        let input = el.querySelector("input");
        let value = input.getAttribute("value");
        let date = input.getAttribute("date");
        result_sum += Number(value);
        result_date += Number(date);
      });
    }

    function progressbarAnimate() {
      /* получаем текущий процнт от всех выбранных инпутов */
      let currentPercents = Math.floor((result_date / allDateSum) * 100);

      let lineWidthPercents = $progressbarLine.offsetWidth * (currentPercents / 100);

      $progressbarDate.style.maxWidth = lineWidthPercents + "px";
    }

    function processingResult() {
      $resultSum.innerText = result_sum;
      $progressbarDate.innerText = result_date + " мес.";
    }
  });
};

calculator();
;
class ResponsiveBlock {
  constructor(props) {
    this.$block = document.querySelector(props.block);
    this.$newParent = document.querySelector(props.newParent);
    this.$oldParent = document.querySelector(props.oldParent);
    this.windowWidth = props.windowWidth;

    this.togglePosition();
    this.windowEventHandler();
  }

  moveBlock(parent) {
    parent.appendChild(this.$block);
  }

  togglePosition() {
    if (window.innerWidth < this.windowWidth) {
      this.moveBlock(this.$newParent);
    } else {
      this.moveBlock(this.$oldParent);
    }
  }

  windowEventHandler() {
    window.addEventListener("resize", () => {
      this.togglePosition();
    });
  }
}

const responsiveBlock = new ResponsiveBlock({
  block: ".firstScreen__video",
  oldParent: ".firstScreen__videoWrapper_desktop",
  newParent: ".firstScreen__videoWrapper_mobile",
  windowWidth: "1025",
});
;

function load() {
  let video = document.querySelector(".firstScreen__video");
  video.play();
  // var userAgent = navigator.userAgent.toLowerCase();
  // if (userAgent.indexOf("safari") != -1) {
  //   if (userAgent.indexOf("chrome") > -1) {
  //     video.play();
  //   } else {
  //     video.play();
  //     video.setAttribute("playsinline", "true");
  //   }
  // }
}

load();
;
