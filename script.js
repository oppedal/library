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

console.log(myLibrary[2]);

const card = () => {
  console.log(document.querySelector('.library'));
};

card();
