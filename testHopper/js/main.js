/* validator */
const rules = {
  length: 0,
  email: /^\w{1,}@\S{1,}\.\w/i,
  rusWordsAndSpaces: /[А-ЯЁ ]/i,
  phone: /\+\d\s\(...\)\s\d{3}\-\d{2}\-\d{2}/,
};

const messages = {
  empty: `Поле не может содержать менеее ${rules.length} символов`,
  rusWordsAndSpaces: "Алиас не может содержать русские буквы и пробелы",
  email: "Некорректно введён Email",
  phone: "Телефон должен быть в формате +7 (ХХХ) ХХХ-ХХ-ХХ",
};

const classes = {
  fieldWrapper: "form__fieldWrapper",
  label: "form__label",
  input: "form__input",
  message: "form__errorMessage-js",
};

let inputsValidate = document.querySelectorAll("." + classes.input + "[data-validate]");
inputsValidate = Array.from(inputsValidate);

/* event handlers */
for (const i of inputsValidate) {
  i.addEventListener("input", function () {
    validate.call(this);
  });

  i.addEventListener("blur", function () {
    validate.call(this);
  });

  i.addEventListener("focus", function () {
    validate.call(this);
  });
}

/* validator */
function validate() {
  let inputWrapper = this.closest("." + classes.fieldWrapper);
  let label = this.previousElementSibling;
  let message = inputWrapper.lastElementChild;

  if (!inputWrapper.lastElementChild.classList.contains(classes.message)) {
    message = document.createElement("p");
    inputWrapper.appendChild(message);
    message.classList.add(classes.message);
  }

  const invalid = (errorText) => {
    /* remove valid if it was */
    inputWrapper.classList.remove(classes.fieldWrapper + "_valid");
    label.classList.remove(classes.label + "_valid");

    /* add invalid  */
    inputWrapper.classList.add(classes.fieldWrapper + "_invalid");
    label.classList.add(classes.label + "_invalid");
    message.classList.add(classes.message, classes.message + "_active");
    message.innerHTML = errorText;

    /* focused input */
    this.classList.add(classes.input + "_active");
  };

  const valid = () => {
    /* remove invalid */
    inputWrapper.classList.remove(classes.fieldWrapper + "_invalid");
    message.classList.remove(classes.message + "_active");

    /* add valid */
    inputWrapper.classList.add(classes.fieldWrapper + "_valid");
    label.classList.add(classes.label + "_valid");
  };

  /* check valid/invalid input.value */
  let value = this.value;
  let validateHtmlArray = this.dataset.validate.split(",");

  for (let index = 0; index < validateHtmlArray.length; index++) {
    switch (validateHtmlArray[index]) {
      case "email":
        !rules.email.test(value) ? invalid(messages.email) : false;
        break;
      case "rusWordsAndSpaces":
        rules.rusWordsAndSpaces.test(value) ? invalid(messages.rusWordsAndSpaces) : false;
        break;
      case "phone":
        !rules.phone.test(value) ? invalid(messages.phone) : false;
        break;
      case "length":
        value.length > rules.length ? valid() : invalid(messages.empty);
        break;
    }
  }

  /* debug for true order of elements */
  if (!inputWrapper.firstElementChild.classList.contains(classes.label)) {
    console.log("Label have to be before input!!!");
  }
}
;

/* alert with local storage */
let allInputsArray = document.querySelectorAll("." + classes.input);
allInputsArray = Array.from(allInputsArray).map((item) => item.getAttribute("id"));
let invalidInputsWrapper = document.querySelectorAll("." + classes.fieldWrapper + "_invalid");

const alertBanner = document.querySelector(".alert");

document.addEventListener("DOMContentLoaded", () => {
  for (let i of allInputsArray) {
    let input = document.getElementById(i);
    input.value = localStorage.getItem(i);
    (function (i, input) {
      input.addEventListener("change", function () {
        localStorage.setItem(i, input.value);
      });
    })(i, input);
  }

  if (localStorage.length > 0) {
    slideToggle("alert", alertBanner, false);
    for (let index = 0; index < inputsValidate.length; index++) {
      validate.call(inputsValidate[index]);
    }
  }
});

const slideToggle = (selector, wrapper, state) => {
  if (state) {
    wrapper.classList.remove(selector + "_active");
    wrapper.style.maxHeight = 0;
  } else {
    wrapper.classList.add(selector + "_active");
    wrapper.style.maxHeight = wrapper.scrollHeight + "px";
  }
};

const form = document.querySelector(".form").addEventListener("submit", function (event) {
  invalidInputsWrapper.length != 0 ? event.preventDefault() : slideToggle("alert", alertBanner, true);
});
;
