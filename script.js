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
let randomNumber = (maxLimit = 50) => {
  let rand = Math.random() * maxLimit;
  rand = Math.floor(rand);
  return rand;
};
//Book object.//
function Book(title, author, pages, haveRead) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.haveRead = haveRead);
}

openModal.addEventListener('click', () => {
  modal.style.display = 'block';
});
function spliceArr(a, b) {
  a = a - 1;
  myLibrary.splice(a, b);
}

//Buttons on the cards.//
const getButtons = () => {
  const btnTarget = document.querySelectorAll('button');
  btnTarget.forEach(function (button) {
    if (button.classList.contains('btn--card')) {
      button.addEventListener('click', (e) => {
        let btnToggle = document.querySelector(`.${e.target.classList[1]}`);

        if (read) {
          read = false;
          btnToggle.classList.remove('book--read');
          btnToggle.classList.add('book--not--read');
          btnToggle.textContent = `I have not read this`;
        } else {
          read = true;
          btnToggle.classList.remove('book--not--read');
          btnToggle.classList.add('book--read');
          btnToggle.textContent = `I have read this`;
        }
      });
    }
    if (button.classList.contains('btn--remove')) {
      button.addEventListener('click', (e) => {
        let remove = e.target.classList[1];
        remove = remove.slice(-1);
        // let child = document.getElementById(`#card--${remove}`);
        // library.removeChild(child);
        // library.querySelector(`#card--${remove}`).style.display = 'none';
        document.querySelector(`#card--${remove}`).remove();
        if (myLibrary.length <= 1) {
          myLibrary.splice(0);
        } else {
          spliceArr(remove, remove);
        }
      });
    }
  });
};

//Populate library with books.//

const cardAdd = () => {
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
                              <button class='btn--card card--read--${i - 1}'>${
      read ? `I have read this` : `I have not read this`
    }</button>
                              <button class='btn--remove remove--${
                                i - 1
                              }' >Remove book</button>`;
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
  }
  getButtons();
  modal.style.display = 'none';
};

const addNewBookBtn = document
  .querySelector('.submit')
  .addEventListener('click', cardAdd);
