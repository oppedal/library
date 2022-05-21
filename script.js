'use strict:';

let myLibrary = [
  {
    title: `Snorres Dagbok`,
    author: `Snorre Sjaatil`,
    pages: 1100,
    haveRead: true,
  },
  {
    title: `Fredds Dagbok`,
    author: `Fred Eveb`,
    pages: 100,
    haveRead: false,
  },
];

function Book(title, author, pages, haveRead) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.haveRead = haveRead);
}

const bookOne = new Book('Snorres Kongerike', `Snorre Sjaatil`, 100, true);

const addBookToLibrary = (book) => {
  myLibrary.push(book);
};
addBookToLibrary(bookOne);

const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open-modal');

openModal.addEventListener('click', () => {
  console.log(`click`);
  modal.style.display = 'block';
});

// const addBookToLibraryBtn = document.querySelector('.submit');
// addBookToLibraryBtn.addEventListener('click', () => {
//   card();
// });
const card = () => {
  const library = document.querySelector('.library');
  const createCard = document.createElement('div');
  library.appendChild(createCard).classList.add('card');
};

// const addClassToCard = (())
