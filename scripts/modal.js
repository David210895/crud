function Modal(options = {}) {
  this.element = options.element;
  this.callback = options.callback;

  this.btnsClose = this.element.querySelectorAll("[data-btn='close']");
  this.btnAcept = this.element.querySelector("[data-btn='accept']");
  this.form = this.element.querySelector("form");
  
  this.init();
}

Modal.prototype.open = function() {
  if (this.form) {
    this.form.reset();
  }
  this.element.classList.add("is-active");
};

Modal.prototype.edit = function() {
  this.element.classList.add("is-active");
};

Modal.prototype.close = function() {
  this.element.classList.remove("is-active");
};

Modal.prototype.init = function() {
  this.addEvents();
};

Modal.prototype.addEvents = function() {
  this.btnsClose.forEach(button => {
    button.onclick = () => this.close();
  });

  if (this.form) {
    this.form.onsubmit = e => {
      e.preventDefault();
      this.callback();
      this.close();
    };
  } else {
    this.btnAcept.onclick = e => {
      e.preventDefault();
      this.callback();
      this.close();
    };
  }
};

export { Modal };
