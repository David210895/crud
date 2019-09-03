"use strict";
import { Modal } from "./modal";
import { addCard, loadData } from "./card";
loadData();

const modal = new Modal({
  element: document.querySelector(".modal"),
  callback: addCard
});

const buttons = document.querySelectorAll('[data-button="addUser"]');
buttons.forEach(button =>
  button.addEventListener("click", () => {
    modal.open();
  })
);

// let carro = {
//   marca: "subaru",
//   getMarca: function() {
//     return `soy la marca ${this.marca}`;
//   }
// };

// let carro1 = {
//   marca: "honda",
//   getMarca: function() {
//     return `soy la marca ${this.marca}`;
//   }
// };

// console.log(carro);
// console.log(carro1);

// const modal3 = new Modal({
//   element: document.querySelector(".js_modal3"),
//   callback: function() {
//     alert("hola soy el modal 3");
//   }
// });

// document.querySelector(".js_btn_modal3").addEventListener("click", function() {
//   console.log(modal3);
//   modal3.open();
// });

// const modal4 = new Modal({
//   element: document.querySelector(".js_modal4"),
//   callback: function() {
//     alert("hola soy el modal 4");
//   }
// });

// document.querySelector(".js_btn_modal4").addEventListener("click", function() {
//   console.log(modal4);
//   modal4.open();
// });

// function Transporte() {
//   this.marca = "";
//   this.moverse = function() {
//     return `la ${this.marca} se mueve`;
//   };
// }

// function Moto(options = {}) {
//   this.marca = options.marca;
//   this.color = options.color;
// }

// Moto.prototype = new Transporte();

// function Auto(options = {}) {
//   this.velocidad = options.velocidad;
//   this.moverse = function() {};
// }

// Auto.prototype = new Transporte();

// const motoHonda = new Moto({
//   marca: "honda",
//   color: "negro"
// });
// console.log(motoHonda);
// console.log(motoHonda.moverse());
