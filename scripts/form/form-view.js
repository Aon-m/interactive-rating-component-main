export default class FormView {
  constructor() {
    this.message = document.querySelector(".error__message");
    this.buttons = document.querySelectorAll(".form__radio");
    this.rated = document.querySelector("#rated");
  }

  select(button) {
    this.buttons.forEach((btn) => {
      btn.classList.remove("button--selected");
      btn.setAttribute("aria-checked", "false");
    });

    button.classList.add("button--selected");
    button.setAttribute("aria-checked", "true");
  }

  deselect() {
    this.buttons.forEach((btn) => {
      btn.classList.remove("button--selected");
      btn.setAttribute("aria-checked", "false");
    });
  }

  push(rating) {
    this.rated.textContent = rating;
  }

  error() {
    this.buttons.forEach((btn) => {
      btn.classList.add("error");
      btn.classList.add("error__input");
    });
    this.message.classList.remove("hidden");
  }

  fixedError() {
    this.buttons.forEach((btn) => {
      btn.classList.remove("error");
      btn.classList.remove("error__input");
    });
    this.message.classList.add("hidden");
  }
}
