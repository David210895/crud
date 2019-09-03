import { Modal } from "./modal";

function getValues() {
  const refs = {
    name: document.querySelector("[data-form='name']"),
    lastname: document.querySelector("[data-form='lastname']"),
    email: document.querySelector("[data-form='email']"),
    phone: document.querySelector("[data-form='phone']"),
    country: document.querySelector("[data-form='country']"),
    photo: document.querySelector("[data-form='photo']"),
    about: document.querySelector("[data-form='about']")
  };

  const values = {
    name: refs.name.value,
    lastname: refs.lastname.value,
    email: refs.email.value,
    phone: refs.phone.value,
    country: refs.country.value,
    photo: refs.photo.value,
    about: refs.about.value
  };

  return {refs, values};
}

function saveUser(values) {
  let usuarios = JSON.parse(localStorage.getItem('usuarios'));
  
  if(usuarios) {
    usuarios.push(values);
  } else {
    usuarios = [];
    usuarios.push(values);
  }

  console.log('usuarios', usuarios)
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function loadData() {
  let usuarios = JSON.parse(localStorage.getItem('usuarios'));

  if (usuarios.length) {
    usuarios.forEach(usuario => {
      addDom(makeCard(usuario))
    });
  }
}

function makeCard(value) {
  const card = document.createElement("article");
  card.innerHTML = makeCardHTML(value);

  card.addEventListener("click", function(event) {
    let {
      target: {
        dataset: { button }
      }
    } = event;

    if (button === "edit") {
      editCard(card, value);
    } else if (button === "delete") {

      const modal = new Modal({
        element: document.querySelector(".modal2"),
        callback: () => {
          deleteCard(card);
        }
      });
      modal.open();
    }
  });

  return card;
}

function addDom(element) {
  const container = document.querySelector("#users");
  container.appendChild(element);
}

function makeCardHTML(value) {
  return `
    <button data-button="edit">Edit</button>
    <button data-button="delete">Delete</button>
    <figure>
        <img src=${value.photo} />
    </figure>
    <div class="text">
        <h2>
            ${value.name} ${value.lastname}
        </h2>
        <ul>
            <li>${value.phone}</li>
            <li>${value.email}</li>
            <li>${value.country}</li>
        </ul>
        <p>${value.about}</p>
    </div>`;
}

function setValues(card) {
  const { values } = getValues();
  card.innerHTML = makeCardHTML(values);
}

function editCard(card, value) {
  
  const { refs } = getValues();
  for (const ref in refs) {
    refs[ref].value = value[ref];
  }

  const modal = new Modal({
    element: document.querySelector(".modal"),
    callback: () => {
      setValues(card)
    }
  });
  modal.edit();
}

function deleteCard(card) {
  card.remove();
}

function addCard() {
  addDom(makeCard(getValues().values));
  saveUser(getValues().values);
}

export {
  addCard,
  loadData
}
