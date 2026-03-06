import FormView from "./form-view.js";

class FormController {
  constructor() {
    this.rating = 0;
    this.view = new FormView();
    this.buttons = document.querySelectorAll(".form__radio");
    this.form = document.querySelector("form");
    this.dialog = document.querySelector("dialog");
    this.onClick();
  }

  onClick() {
    this.buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.select(btn);
      });
    });
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      this.submit();
    });
    this.dialog.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.close();
        this.clear();
      }
    });
  }

  select(button) {
    this.view.fixedError();
    this.view.select(button);
    this.rating = Number(button.textContent.trim());
  }

  open() {
    this.dialog.show();
  }

  close() {
    this.dialog.close();
  }

  submit() {
    if (!this.validation()) return;

    const rating = Number(this.rating);

    this.view.push(rating);

    this.open();
  }

  clear() {
    this.view.fixedError();
    this.view.deselect();
  }

  validation() {
    switch (true) {
      case this.rating === 0:
        this.view.error();
        return false;
    }

    return true;
  }
}

export default FormController;
