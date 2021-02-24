<<<<<<< HEAD
const toggleElements = (form, button, container) => {
  const $container = document.querySelector(container);

  $container.addEventListener("click", function (e) {
    if (event.target.classList.contains(form)) {
      const $button = $container.querySelectorAll("." + button);
      const $forms = $container.querySelectorAll("." + form);

      let data = event.target.dataset.form_button;
      const anchoredForm = $container.querySelector("#" + data);

      Array.from($button).forEach((item, index) => {
        item.classList.remove("active");
        $forms[index].classList.remove("active");
      });

      anchoredForm.classList.add("active", "animate__animated");
      event.target.classList.add("active");
    }
  });
};

toggleElements("authorization__titleLink", "authorization__form", ".authorization");

const validation = () => {
  const $form = document.querySelector("#loginInForm");
  const passwordFields = $form.querySelectorAll(`input[type="password"]`);
  const $errorMessage = $form.querySelector(".form__errorMessage");

  passwordFields.forEach((el) => {
    el.addEventListener("input", () => {
      if (passwordFields[0].value != passwordFields[1].value && passwordFields[0].value.length > 0) {
        $errorMessage.classList.add("active");
        $form.classList.add("error");
      } else {
        $form.classList.remove("error");
        $errorMessage.classList.remove("active");
      }
    });
  });

  $form.addEventListener("submit", () => {
    if (event.currentTarget.classList.contains("error")) return event.preventDefault();
  });
};

validation();
;
=======
const toggleElements = (form, button, container) => {
  const $container = document.querySelector(container);

  $container.addEventListener("click", function (e) {
    if (event.target.classList.contains(form)) {
      const $button = $container.querySelectorAll("." + button);
      const $forms = $container.querySelectorAll("." + form);

      let data = event.target.dataset.form_button;
      const anchoredForm = $container.querySelector("#" + data);

      Array.from($button).forEach((item, index) => {
        item.classList.remove("active");
        $forms[index].classList.remove("active");
      });

      anchoredForm.classList.add("active", "animate__animated");
      event.target.classList.add("active");
    }
  });
};

toggleElements("authorization__titleLink", "authorization__form", ".authorization");

const validation = () => {
  const $form = document.querySelector("#loginInForm");
  const passwordFields = $form.querySelectorAll(`input[type="password"]`);
  const $errorMessage = $form.querySelector(".form__errorMessage");

  passwordFields.forEach((el) => {
    el.addEventListener("input", () => {
      if (passwordFields[0].value != passwordFields[1].value && passwordFields[0].value.length > 0) {
        $errorMessage.classList.add("active");
        $form.classList.add("error");
      } else {
        $form.classList.remove("error");
        $errorMessage.classList.remove("active");
      }
    });
  });

  $form.addEventListener("submit", () => {
    if (event.currentTarget.classList.contains("error")) return event.preventDefault();
  });
};

validation();
;
>>>>>>> f935f812fd7300c2365d9124319a7dcba95c545b
