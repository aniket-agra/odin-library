let bookArr = [];

function addBook(book) {
  bookArr.push(book);
}

function Book(name, author, pages, haveRead) {
  this.name = name;
  this.author = author;
  this.pages = Number(pages);
  this.haveRead = Boolean(haveRead);
}

Book.prototype.printDetail = function () {
  return `${this.name}, written by ${this.author}, ${this.pages} pages, ` + 
  `${this.haveRead ? "read" : "not yet read"}`;
}