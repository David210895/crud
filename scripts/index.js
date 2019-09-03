// "use strict";

// /**
//  * Muestra y oculta modal
//  * @param {*} element
//  */
// function showHideModal(element) {
//   const modal = document.querySelector(element);
//   modal.classList.toggle("is-active");
// }

// /**
//  * Eventos abrir y cerrar modal
//  */
// const addUser = document.querySelector(".js_addUser");
// document.addEventListener("click", e => {
//   if (e.target.getAttribute("data-button") === "addUser") {
//     showHideModal(".modal");
//   }
// });

// const form = document.querySelector("form");
// const buttons = document.querySelectorAll(".js_btn");
// form.addEventListener("submit", function(e) {
//   e.preventDefault();
//   createCard();
//   showHideModal(".modal");
// });

// buttons.forEach(button => {
//   button.addEventListener("click", function(e) {
//     form.removeAttribute("novalidate");
//     if (this.dataset.btn === "close") {
//       form.setAttribute("novalidate", "");
//       showHideModal(".modal");
//     }
//   });
// });

// /**
//  * Preguntara si existen usuarios
//  */
// function hasUser() {
//   const containerUsers = document.querySelector("#users");
//   if (containerUsers.childElementCount > 0) {
//     document.body.classList.add("has-user");
//   }
// }

// function getValues() {
//   const ref = {
//     name: document.querySelector("[data-form='name']"),
//     lastname: document.querySelector("[data-form='lastname']"),
//     email: document.querySelector("[data-form='email']"),
//     phone: document.querySelector("[data-form='country']"),
//     photo: document.querySelector("[data-form='photo']"),
//     about: document.querySelector("[data-form='about']")
//   };

//   const values = {
//     name: ref.name.value,
//     lastname: ref.lastname.value,
//     email: ref.email.value,
//     phone: ref.phone.value,
//     photo: ref.photo.value,
//     about: ref.about.value
//   };

//   return {
//     ref,
//     values
//   };
// }

// /**
//  * CREA CARDS
//  */
// function createCard() {
//   // const [name, lastname, email, phone, country, photo, about] = document.querySelectorAll('[data-form]');
//   const values = getValues().values;
//   const containerUsers = document.querySelector("#users");

//   const card = document.createElement("article");
//   card.classList.add("card");

//   card.innerHTML = `
//         <button class="js_edit">Edit</button>
//         <button class="js_delete">Delete</button>
//         <figure>
//             <img src=${values.photo} />
//         </figure>
//         <div class="text">
//             <h2>
//                 ${values.name} ${values.lastname}
//             </h2>
//             <ul>
//                 <li>${values.phone}</li>
//                 <li>${values.email}</li>
//                 <li>${values.country}</li>
//             </ul>
//             <p>${values.about}</p>
//         </div>
//     `;

//   card.querySelector(".js_edit").addEventListener("click", function() {
//     // console.log('edit', name.value, lastname.value, email.value, phone.value, country.value, photo.value, about.value);
//     console.log("values", values);
//     card.innerHTML = ``;
//     showHideModal(".modal");
//   });

//   card.querySelector(".js_delete").addEventListener("click", function() {
//     console.log("delete");
//   });

//   containerUsers.appendChild(card);
//   hasUser();
// }

// hasUser();



'use strict';
// MOSTRAR MODAL
/*INICIO*/
    /*
        1) DECLARAR VARIABLE BUTTON
        2) ATRAPAR BOTONES
        3) RECORRER BOTONES Y AGREGAR EVENTO CLICK A CADA BOTON
        4) CREAR FUNCION QUE MUESTRE Y OCULTE MODAL ASOCIADA AL EVENTO DEL BOTON
    */
/*FIN*/
function showHiddenModal(element) {
    const modal = document.querySelector(element);
    modal.classList.toggle('is-active');
}
// MOSTRAR MODAL
const button = document.querySelectorAll("[data-button='addUser']");
button.forEach(function(btn) {
    btn.addEventListener('click', function() {
        document.querySelector(".formulario").reset();
        showHiddenModal('.modal');
    });
});

// OCULTAR MODAL
/*INICIO*/
    /*
        1) DECLARAR VARIABLES DE BOTONES DE CIERRE
        2) ATRAPAR BOTONES
        3) RECORRER BOTONES Y AGREGARLE UN EVENTO CLICK
        4) AGREGARLE AL EVENTO LA FUNCION QUE MUESTRE Y OCULTE MODAL
    */
/*FIN*/
// OCULTAR MODAL
//const buttonsClose = document.querySelectorAll('.js_btn');
const buttonClose = document.querySelectorAll('.js_btn');
buttonClose.forEach(function(btn){
    btn.addEventListener('click',function(e){
        e.preventDefault();
        if (this.dataset.btn === 'accept'){
            showHiddenModal(".modal");
            makeCard(getValuesForm());
            document.querySelector(".formulario").reset();
        }
        else if (this.dataset.btn === 'close'){
            showHiddenModal('.modal');
            document.querySelector(".formulario").reset();
        }
        else if (this.dataset.btn === 'editar'){
            console.log("editar");
            editCard();
            showHiddenModal('.modal');
        }
    });
});
// buttonsClose.forEach(function(btn) {
//     btn.addEventListener('click', function() {
//         if (this.dataset.btn === 'accept') {
//             makeCard(getValuesForm());
//             showHiddenModal('.modal');
//         } else if (this.dataset.btn === 'edit') {
//             showHiddenModal('.modal');
//             editCard();
//         }
//     })
// })

// ATRAPAR VALORES DEL FORMULARIO
/*INICIO*/
    /*
        1) DECLARAR FUNCION ATRAPE VALORES
        2) ATRAPAR INPUTS
        3) RECORRER INPUTS Y ATRAPAR SUS VALORES
    */
/*FIN*/
function getValuesForm(){
    const controlsForm = document.querySelectorAll("[data-form]");
    const obj = {
        name:controlsForm[0].value,
        lastname:controlsForm[1].value,
        email: controlsForm[2].value,
        phone: controlsForm[3].value,
        country: controlsForm[4].value,
        photo: controlsForm[5].value,
        about: controlsForm[6].value
    }
    return obj; 
}

// CREACION DE TARJETA // makecard
/*INICIO*/
    /*
        1) VALORES DE USUARIO
        2) CREAR TEMPLATE
        3) AGREGAR EVENTO EDITAR
        4) AGREGAR EVENTO ELIMINAR
        3) INSERTARLO EN DOM
    */
/*FIN*/
function pintarHTML(values){
    
}
function makeCard(values) {
    const card = document.createElement('article');
    const container = document.querySelector('#users');
    card.innerHTML = `
        <button class="js_edit">Editar</button>
        <button class="js_delete">Borrar</button>
        <figure>
            <img class="text" src=${values.photo} />
        </figure>
        <div>
            <h2 class="text">
                ${values.name} <h2 class="text">${values.lastname}</h2>
            </h2>
            <ul>
                <li class="text">${values.phone}</li>
                <li class="text">${values.email}</li>
                <li class="text">${values.country}</li>
            </ul>
            <p class="text">${values.about}</p>
        </div>`;

    
        card.querySelector('.js_edit').addEventListener('click', function() {
            card.classList.toggle('editando')
            showHiddenModal('.modal');
            const controlsForm = document.querySelectorAll("[data-form]");
            const xx=card.querySelectorAll(".text");
            console.log("contexto: ",xx);
            controlsForm[0].value = xx[1].textContent.trim();
            controlsForm[1].value = xx[2].textContent.trim();
            controlsForm[2].value = xx[4].textContent.trim();
            controlsForm[3].value = xx[3].textContent.trim();
            controlsForm[4].value = xx[5].textContent.trim();
            controlsForm[5].value = xx[0].src.trim();
            controlsForm[6].value = xx[6].textContent.trim();
        })

    card.querySelector('.js_delete').addEventListener('click', function() {
        card.remove();
    })
    container.appendChild(card);
    const xx=card.querySelectorAll(".text");
    console.log('cartas :', card, xx[1].textContent.trim());
    localStorage.setItem('elementos',JSON.stringify(xx[1].textContent.trim()));
}

// EDICION DE TARJETA
/*INICIO*/
    /*
        1) CREAR FUNCION DE EDICION
        2) ATRAPAR NUEVOS VALORES DE FORMULARIO
        3) 
    */
/*FIN*/


function editCard() {
    const values = getValuesForm();
    const card = document.querySelector('.editando');
    // console.log('contexto card: ',values);
    // card[1].textContent=values[1].values;
    card.innerHTML = `
    <button class="js_edit">Editar</button>
    <button class="js_delete">Borrar</button>
    <figure>
        <img class="text" src=${values.photo} />
    </figure>
    <div>
        <h2 class="text">
            ${values.name} <h2 class="text">${values.lastname}</h2>
        </h2>
        <ul>
            <li class="text">${values.phone}</li>
            <li class="text">${values.email}</li>
            <li class="text">${values.country}</li>
        </ul>
        <p class="text">${values.about}</p>
    </div>`;

    
    card.querySelector('.js_edit').addEventListener('click', function() {
        card.classList.toggle('editando')
        showHiddenModal('.modal');
        const controlsForm = document.querySelectorAll("[data-form]");
        const xx=card.querySelectorAll(".text");
        console.log("contexto: ",xx);
        controlsForm[0].value = xx[1].textContent.trim();
        controlsForm[1].value = xx[2].textContent.trim();
        controlsForm[2].value = xx[4].textContent.trim();
        controlsForm[3].value = xx[3].textContent.trim();
        controlsForm[4].value = xx[5].textContent.trim();
        controlsForm[5].value = xx[0].src.trim();
        controlsForm[6].value = xx[6].textContent.trim();
    })

    card.querySelector('.js_delete').addEventListener('click', function() {
        card.remove();
    })
    // card.classList.remove('editando');
    card.classList.toggle('editando')
}




