'use strict:';

let myLibrary = [];
let number;
const getTitle = document.getElementById('title');
const getAuthor = document.getElementById(`author`);
const getPages = document.getElementById(`pages`);
const readInput = document.getElementById(`read`);
const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open-modal');
const modalContent = document.querySelector('.modal-content');
const elementH3 = document.createElement('h3');
const elementH4 = document.createElement('h4');
const elementH4_2 = document.createElement('h4');
const elementButton = document.createElement('button');
const elementImg = document.createElement(`img`);
const library = document.querySelector('.library');
const btnRead = document.querySelector(`.card--read--${number}`);
//Random number for images.//
let randomNumber = (maxLimit = 1000) => {
  let rand = Math.random() * maxLimit;
  rand = Math.floor(rand);
  return rand;
};

function Book(title, author, pages, haveRead) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.haveRead = haveRead);
}

openModal.addEventListener('click', () => {
  modal.style.display = 'block';
});

let createCard = document.createElement('div');
let card = () => {
  for (let i = 0; i < myLibrary.length; i++) {
    let getCardById = document.getElementById(`card--${i}`);
    getCardById.appendChild(elementH3).classList.add(`card--title--${i}`);
  }
};
let cardAdd = () => {
  let title = getTitle.value;
  let author = getAuthor.value;
  let pages = getPages.value;
  let read = readInput.value;

  if (read === `yes`) {
    read = true;
  } else read = false;

  let aBook = new Book(`${title}`, `${author}`, `${pages}`, `${read}`);
  myLibrary.push(aBook);

  //Create cards with books.//

  for (let i = myLibrary.length; i < myLibrary.length + 1; i++) {
    let createCard = document.createElement('div');
    library.appendChild(createCard).classList.add('card');
    createCard.setAttribute(`id`, `card--${i - 1}`);

    createCard.innerHTML = `<img src='https://picsum.photos/id/${randomNumber()}/200'/>
      <h3>${myLibrary[i - 1].title}</h3>
                              <h4>Written by: ${myLibrary[i - 1].author}</h4>
                              <h4>There are ${myLibrary[i - 1].pages} pages</h4>
                              <button class='card--read--${i - 1}'>${
      read ? `I have read this` : `I have not read this`
    }</button>
                              <button id='remove--${
                                i - 1
                              }'>Remove book</button>`;
    if (read) {
      document
        .querySelector(`.card--read--${i - 1}`)
        .classList.add(`book--read`);
    } else {
      document
        .querySelector(`.card--read--${i - 1}`)
        .classList.add(`book--not--read`);
    }
    number = i - 1;
    console.log(number);
  }
  modal.style.display = 'none';
  document
    .querySelector(`.card--read--${number}`)
    .addEventListener('click', () => {
      if (read) {
        read = false;
        document
          .querySelector(`.card--read--${number}`)
          .classList.remove(`book--read`);
        document
          .querySelector(`.card--read--${number}`)
          .classList.add(`book--not--read`);
        document.querySelector(
          `.card--read--${number}`
        ).textContent = `I have not read this`;
      } else {
        read = true;
        document
          .querySelector(`.card--read--${number}`)
          .classList.remove(`book--not--read`);
        document
          .querySelector(`.card--read--${number}`)
          .classList.add(`book--read`);
        document.querySelector(
          `.card--read--${number}`
        ).textContent = `I have read this`;
      }
    });
};

const addNewBookBtn = document
  .querySelector('.submit')
  .addEventListener('click', cardAdd);
