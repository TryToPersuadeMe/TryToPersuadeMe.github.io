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
const totalInput = document.getElementById("totalQuantity");

/* coef per 1 step */
let tickCoef = 1000000;

/* price per 1 step */
let pricePerStep = 100;

/* turn on/off discount */
let discount = true;

let totalSumPerTick;

window.addEventListener("DOMContentLoaded", () => {
  let range1 = new rSlider({
    element: "#sliderRange",
    tick: 1,
    totalSum: "#totalSum",
  });

  let formCount = new FormCount({
    form: ".applicationForm",
    buttons: "input",
  });
});
class rSlider {
  constructor(args) {
    this.el = document.querySelector(args.element);
    this.totalSum = document.querySelector(args.totalSum);
    this.min = +this.el.min || 0;
    this.max = +this.el.max || 100;
    this.step = +this.el.step || 1;
    this.tick = args.tick || this.step;
    this.addTicks();
    this.dataRange = document.createElement("div");
    this.dataRange.className = "data-range";
    this.el.parentElement.appendChild(this.dataRange, this.el);
    totalSumPerTick = this.step * pricePerStep;
    this.updatePos();

    this.el.addEventListener("input", () => {
      this.updatePos();
      this.totalSum.innerText = totalSumPerTick + " рублей";
    });

    this.totalSum.innerText = totalSumPerTick + " рублей";
  }
  addTicks() {
    let wrap = document.createElement("div");
    wrap.className = "range";
    this.el.parentElement.insertBefore(wrap, this.el);
    wrap.appendChild(this.el);
    let ticks = document.createElement("div");
    ticks.className = "range-ticks";
    wrap.appendChild(ticks);
    for (let t = this.min; t <= this.max; t += this.tick) {
      let tick = document.createElement("span");
      tick.className = "range-tick";
      ticks.appendChild(tick);
      let tickText = document.createElement("span");
      tickText.className = "range-tick-text";
      tick.appendChild(tickText);
    }
  }
  getRangePercent() {
    let max = this.el.max,
      min = this.el.min,
      relativeValue = this.el.value - min,
      ticks = max - min,
      percent = relativeValue / ticks;
    return percent;
  }
  updatePos() {
    let percent = this.getRangePercent(),
      left = percent * 100,
      emAdjust = percent * 3;
    this.dataRange.style.left = `calc(${left}% - ${emAdjust}em)`;

    totalInput.value = this.el.value * tickCoef;

    totalSumPerTick = this.el.value * pricePerStep;
    totalInput.value = totalInput.value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
  }
}

// totalSum

class FormCount {
  constructor(props) {
    this.buttons = document.querySelectorAll(props.buttons);
    this.form = document.querySelector(props.form);

    this.handleEvent();
  }

  handleEvent() {
    for (let index = 0; index < this.buttons.length; index++) {
      if (!this.buttons[index].hasAttribute("value") && this.buttons[index].type == "radio") {
        this.buttons[index].setAttribute("value", "+0");
      }

      this.buttons[index].addEventListener("input", () => {
        totalSum.value = Number(totalSum.innerText.match(/[0-9/.]+/g));
        let checkedInputs = document.querySelectorAll(":checked");
        let multiplication = [0];
        let addition = [0];

        /* распределение на категории сложение или умножение */
        checkedInputs.forEach((el) => {
          if (el.value.includes("+") || el.value.includes("+0")) {
            addition.push(Number(el.value.replace(/\+/, "")));
          } else if (el.value.includes("*")) {
            multiplication.push(Number(el.value.replace(/\*/, "")));
          }
        });

        /* сложение всех значений */
        let resultAddition = addition.reduce((a, b) => a + b);
        let resultMultiplication = multiplication.reduce((a, b) => a + b);
        /* discount */
        let discountSum;
        this.discount(discount);

        /* если нет никакого множителя. Иначе будет умножение на ноль */
        if (resultMultiplication == 0) {
          resultMultiplication = 0.000000000001;
        }
        /* формула итогового подсчета */

        totalSum.value =
          totalSumPerTick +
          totalSumPerTick * resultMultiplication +
          resultAddition -
          this.discountSum;
        totalSum.innerText = Math.floor(totalSum.value) + " рублей";
      });
    }
  }

  discount(status) {
    if (status) {
      let value = totalInput.value.replace(/\s+/g, "");
      if (value > 10000000) {
        this.discountSum = (totalSum.value / 100) * 15;
      } else if (value > 40000000) {
        this.discountSum = (totalSum.value / 100) * 20;
      } else {
        this.discountSum = 0;
      }
    } else {
      this.discountSum = 0;
    }
  }
}
const form = document.getElementById("silverFarmForm");
const name = document.getElementById("name");
const inputs = form.getElementsByTagName("input");

const radioSets = document.querySelectorAll(".applicationForm__radioFieldSet");
radioSets.forEach((value) => (value.getElementsByTagName("input")[0].checked = true));

form.addEventListener("submit", function () {
  let object = {
    price: totalSum.innerText,
    matches: totalQuantity.value,
    name: name.value,
    email: email.value,
    contacts: contacts.value,
  };

  for (let index = 0; index < inputs.length; index++) {
    if (inputs[index].type == "radio" && inputs[index].checked == true) {
      key = inputs[index].getAttribute("name");
      value = inputs[index].nextElementSibling.innerText;
      object[key] = value;
    }
  }

  /* dates */

  console.log(object);

  /* event */
  event.preventDefault();

  const jsonString = JSON.stringify(object);
  const xhr = new XMLHttpRequest();

  xhr.open("POST", "../php/index.php");

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.send(jsonString);

  console.log(jsonString);
});
