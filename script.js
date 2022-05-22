'use strict:';

let myLibrary = [];

function Book(title, author, pages, haveRead) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.haveRead = haveRead);
}

const addBookToLibrary = (book) => {
  myLibrary.push(book);
};

const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open-modal');
const modalContent = document.querySelector('.modal-content');

openModal.addEventListener('click', () => {
  modal.style.display = 'block';
});
let number;
const elementH3 = document.createElement('h3');
const elementH4 = document.createElement('h4');
const elementH4_2 = document.createElement('h4');
const elementButton = document.createElement('button');
const elementImg = document.createElement(`img`);
const library = document.querySelector('.library');
let createCard = document.createElement('div');
let card = () => {
  // const library = document.querySelector('.library');
  // let createCard = document.createElement('div');
  // createCard.setAttribute(`id`, `card--${myLibrary.length - 1}`);
  // library.appendChild(createCard).classList.add('card');
  // let getCardById = document.getElementById(`card--${number}`);
  for (let i = 0; i < myLibrary.length; i++) {
    let getCardById = document.getElementById(`card--${i}`);

    getCardById.appendChild(elementH3).classList.add(`card--title--${i}`);
  }
};
// getCardById.appendChild(elementH3).classList.add(`card--title--${number}`);
// getCardById.appendChild(elementH4).classList.add(`card--author--${number}`);
// getCardById.appendChild(elementH4_2).classList.add(`card--pages--${number}`);
// getCardById.appendChild(elementImg).classList.add(`card--img--${number}`);

// library.appendChild(documentFragment);

// const addClassToCard = (())
const getTitle = document.getElementById('title');
const getAuthor = document.getElementById(`author`);
const getPages = document.getElementById(`pages`);
const readInput = document.getElementById(`read`);
const submitBook = document
  .querySelector('.submit')
  .addEventListener('click', () => {
    let title = getTitle.value;
    let author = getAuthor.value;
    let pages = getPages.value;
    let read = readInput.value;

    if (read === `yes`) read = true;
    else read = false;

    let aBook = new Book(`${title}`, `${author}`, `${pages}`, `${read}`);
    myLibrary.push(aBook);
    // card();
    for (let i = myLibrary.length; i < myLibrary.length + 1; i++) {
      number = i - 1;
      console.log(number);
      let createCard = document.createElement('div');
      library.appendChild(createCard).classList.add('card');
      createCard.setAttribute(`id`, `card--${i - 1}`);

      document.getElementById(`card--${i - 1}`).appendChild(elementH3);
    }
    // card();
  });
