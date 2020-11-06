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
const box = document.querySelectorAll(".fieldSetWrapper__box");
const column = document.querySelectorAll(".fieldSetWrapper__column");
let columnArr = Array.from(column);

const responsiveFieldSet = (boolean) => {
  if (boolean) {
    for (let index = 0; index < column.length; index++) {
      box[0].appendChild(columnArr[index]);
    }
  } else {
    for (let index = 0; index < column.length; index++) {
      index <= 2 ? box[0].appendChild(column[index]) : box[1].appendChild(column[index]);
    }
  }
};

window.addEventListener("resize", function () {
  window.innerWidth <= 700 ? responsiveFieldSet(true) : responsiveFieldSet(false);
});

if (window.innerWidth <= 700) responsiveFieldSet();

/* calculcator start */

let oneTankCompanyCoef = 10;

window.addEventListener("DOMContentLoaded", () => {
  let range1 = new Calculator({
    select: ".custom-options",
    wrapper: ".fieldSetWrapper",
    totalSum: "#totalSum",
    companyName: "#choosenTankCompany",
    form: ".applicationForm__form",
    columns: ".fieldSetWrapper__column",
    oneCompany: "#oneFullCompany",
    checkBoxSoloSection: ".applicationForm__checkBox",
    allCompanies: "#allCompanies",
    selectorWrapper: ".custom-select-wrapper",
    selectorArrow: ".arrow",
  });
});

class Calculator {
  constructor(props) {
    this.wrapper = document.querySelector(props.wrapper);
    this.totalSum = document.querySelector(props.totalSum);
    this.companyName = document.querySelector(props.companyName);
    this.form = document.querySelector(props.form);
    this.columns = document.querySelectorAll(props.columns);
    this.oneCompany = document.querySelector(props.oneCompany);
    this.allCompanies = document.querySelector(props.allCompanies);
    this.checkBoxSoloSection = document.querySelector(props.checkBoxSoloSection);

    /* selector */
    this.selects = document.querySelector(props.select);
    this.selectorWrapper = document.querySelector(props.selectorWrapper);
    this.selectorArrow = document.querySelector(props.selectorArrow);

    this.inputsCheckboxes = this.wrapper.getElementsByTagName("input");
    this.choosenSelectValue = 0;
    this.changeValue(true);

    /* for each column */
    this.createArraysForCount();

    /* main calculator */
    this.calculate();

    this.result;

    /* pick full company for choosen tank */
    this.pickOneCompany();

    /* pick ALL companies */
    this.pickAllCompanies();

    /* select with calculator */
    this.selects.addEventListener("click", () => {
      this.choosenSelectValue = event.target.dataset.price_margin;
      this.changeCompanyName();
      this.changeValue(false);

      this.createArraysForCount();
      this.pickOneCompany();
      if (this.oneCompany.checked == true) {
        this.totalSum.innerText = Number(this.oneCompany.value) + " рублей";
      } else {
        let checkedCheckboxes = document.querySelectorAll(":checked");

        Array.from(checkedCheckboxes).forEach((element) => {
          if (Array.from(this.columns).indexOf(element.offsetParent) == element.dataset.parent_id) {
            this.columnsAllArr[element.dataset.parent_id].push(Number(element.value));
          }
        });

        this.count();
      }
    });
  }

  changeValue(standart) {
    /* for checkboxes in columns.*/
    if (standart) {
      for (let index = 0; index < this.inputsCheckboxes.length; index++) {
        this.inputsCheckboxes[index].setAttribute(
          "data-default",
          this.inputsCheckboxes[index].value
        );

        this.inputsCheckboxes[index].setAttribute(
          "data-parent_id",
          Array.from(this.columns).indexOf(this.inputsCheckboxes[index].offsetParent)
        );
      }
    } else {
      for (let index = 0; index < this.inputsCheckboxes.length; index++) {
        /* change value */
        this.inputsCheckboxes[index].value =
          Number(this.choosenSelectValue) + Number(this.inputsCheckboxes[index].dataset.default);

        /* change text */
        this.inputsCheckboxes[index].nextElementSibling.innerText = this.inputsCheckboxes[
          index
        ].nextElementSibling.innerText.replace(
          /\(\d{1,}.{1}\)/g,
          "(" + this.inputsCheckboxes[index].value + "р" + ")"
        );
      }
      /* one tank company */
      this.oneCompany.value =
        Number(this.oneCompany.dataset.default) +
        Number(this.choosenSelectValue) * oneTankCompanyCoef;

      this.oneCompany.nextElementSibling.innerText =
        Number(this.oneCompany.dataset.default) +
        Number(this.choosenSelectValue) * oneTankCompanyCoef +
        " р.";
    }
  }

  calculate() {
    /* summ all columns and change price */
    this.count = () => {
      this.columnsAllArr.forEach((value, index) => {
        this.additionColumnSum[index] = value.reduce((a, b) => a + b);
      });

      this.result = this.additionColumnSum.reduce((a, b) => a + b);

      this.totalSum.innerText = this.result + " рублей";
    };

    /* for each column */
    for (let index = 0; index < this.columns.length; index++) {
      this.columns[index].addEventListener("input", () => {
        let siblingsInputs = event.target.offsetParent.getElementsByTagName("input");

        /* if its element with data-block + checked */
        if (event.target.hasAttribute("data-block") && event.target.checked == true) {
          this.columnsAllArr[index].push(Number(event.target.value));
          Array.from(siblingsInputs).forEach((element) => {
            if (element != event.target) {
              element.checked = false;
              element.setAttribute("disabled", "disabled");
              element.parentNode.style.opacity = 0.5;
            }
          });

          this.columnsAllArr[index] = this.columnsAllArr[index].slice(-1);

          this.count();
        } else if (event.target.hasAttribute("data-block") && event.target.checked == false) {
          /* if its element with data-block + UNchecked */

          this.columnsAllArr[index].push(Number(event.target.value));
          Array.from(siblingsInputs).forEach((element) => {
            if (element != event.target) {
              element.removeAttribute("disabled");
              element.parentNode.style.opacity = 1;
            }
          });

          this.columnsAllArr[index] = [0];
          this.count();
        } else if (event.target.checked == true) {
          this.columnsAllArr[index].push(Number(event.target.value));

          this.count();
        } else {
          const el = this.columnsAllArr[index].indexOf(Number(event.target.value));
          if (el > -1) this.columnsAllArr[index].splice(el, 1);
          this.count();
        }
      });
    }
  }

  changeCompanyName() {
    this.companyName.innerText = event.target.innerText;
  }

  createArraysForCount() {
    this.columnsAllArr = [];
    this.additionColumnSum = [];
    do {
      this.additionColumnSum.push([0]);
      this.columnsAllArr.push([0]);
    } while (this.additionColumnSum.length < this.columns.length);
  }

  pickOneCompany() {
    this.oneCompany.addEventListener("input", () => {
      /* reset storaged sum */
      this.createArraysForCount();

      if (event.target.checked == true) {
        this.checkBoxesToggle(this.inputsCheckboxes, true);
        this.totalSum.innerText = Number(event.target.value) + " рублей";
      } else {
        this.checkBoxesToggle(this.inputsCheckboxes, false);
        this.totalSum.innerText = 0 + " рублей";
      }
    });
  }

  pickAllCompanies() {
    this.allCompanies.addEventListener("input", () => {
      /* reset storaged sum */
      this.createArraysForCount();
      if (event.target.checked == true) {
        this.checkBoxesToggle(this.inputsCheckboxes, true);
        this.totalSum.innerText = Number(event.target.value) + " рублей";
        this.oneCompany.checked = false;
        this.oneCompany.setAttribute("disabled", "disabled");
        this.checkBoxSoloSection.style.opacity = 0.5;

        /* selector */
        this.selectorArrow.style.opacity = 0;
        this.selectorWrapper.style.overflow = "hidden";
      } else {
        this.checkBoxesToggle(this.inputsCheckboxes, false);
        this.totalSum.innerText = 0 + " рублей";
        this.checkBoxSoloSection.style.opacity = 1;
        this.oneCompany.removeAttribute("disabled", "disabled");

        /* selector */
        this.selectorArrow.style.opacity = 1;
        this.selectorWrapper.style.overflow = "visible";
      }
    });
  }

  checkBoxesToggle(arr, state) {
    if (state) {
      Array.from(arr).forEach((element) => {
        element.checked = false;
        element.setAttribute("disabled", "disabled");
        element.parentNode.style.opacity = 0.5;
      });
    } else {
      Array.from(arr).forEach((element) => {
        element.removeAttribute("disabled");
        element.parentNode.style.opacity = 1;
      });
    }
  }
}
;
document.querySelector(".custom-select-wrapper").addEventListener("click", function () {
  this.querySelector(".custom-select").classList.toggle("open");
});

// let selectedValue = document.getElementById("#selected-value");

let option = document.querySelectorAll(".custom-option");

for (let index = 0; index < option.length; index++) {
  // option[index].setAttribute("data-status", "false");
  option[index].addEventListener("click", function () {
    if (!this.classList.contains("selected")) {
      this.classList.add("selected");
      this.parentNode.querySelector(".custom-option.selected").classList.remove("selected");
      this.closest(".custom-select").querySelector(
        ".custom-select__trigger span"
      ).textContent = this.textContent;
    }
  });
}

window.addEventListener("click", function (e) {
  const select = document.querySelector(".custom-select");
  if (!select.contains(e.target)) {
    select.classList.remove("open");
  }
});
;
const form = document.getElementById("formLBZ");
const name = document.getElementById("name");
const allCompanies = document.getElementById("allCompanies");
const tankCompany = document.getElementById("oneFullCompany");
const tankCompanyName = document.getElementById("choosenTankCompany");
const checkBoxColumn = document.querySelectorAll(".fieldSetWrapper__column");

let columns;
let inputs = [];
let title = [];

let inputsArr = [];

form.addEventListener("submit", function () {
  event.preventDefault();
  let object = {
    select: selectedValue.innerText,
    name: name.value,
    email: email.value,
    contacts: contacts.value,
    totalSum: totalSum.innerText,
    lt: [],
    st: [],
    tt: [],
    pt: [],
    sau: [],
  };

  /* full company */
  if (tankCompany.checked == true) {
    object["Full-company"] = "true";
  }

  /* choose 1 tank */
  if (allCompanies.checked == true) {
    object["allCompanies"] = inputs;
  }

  /* inputs */
  /* inner Text */
  for (let index = 0; index < checkBoxColumn.length; index++) {
    columns = checkBoxColumn[index];
    title = columns.getElementsByTagName("legend")[0].innerText;

    let input = checkBoxColumn[index].getElementsByTagName("input");
    Array.from(input).forEach((value) => {
      if (value.checked == true) {
        inputsArr.push(value);
      }
    });
  }

  inputsArr.forEach((value) => {
    switch (value.getAttribute("data-parent_id")) {
      case "0":
        if (value.checked == true && !object.lt.includes(value.nextElementSibling.innerText)) {
          object.lt.push(value.nextElementSibling.innerText);
        }
        break;
      case "1":
        if (value.checked == true && !object.st.includes(value.nextElementSibling.innerText)) {
          object.st.push(value.nextElementSibling.innerText);
        }
        break;
      case "2":
        if (value.checked == true && !object.tt.includes(value.nextElementSibling.innerText)) {
          object.tt.push(value.nextElementSibling.innerText);
        }
        break;
      case "3":
        if (value.checked == true && !object.pt.includes(value.nextElementSibling.innerText)) {
          object.pt.push(value.nextElementSibling.innerText);
        }
        break;
      case "4":
        if (value.checked == true && !object.sau.includes(value.nextElementSibling.innerText)) {
          object.sau.push(value.nextElementSibling.innerText);
        }
        break;
    }
  });

  /* event */
  event.preventDefault();

  const jsonString = JSON.stringify(object);
  const xhr = new XMLHttpRequest();

  xhr.open("POST", "../php/index.php");

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.send(jsonString);

  console.log(jsonString);
});
;
