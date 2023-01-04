let bookArr;

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

createBtn = document.querySelector(".create button");
subBtn = document.querySelector("#formButton");
uploadForm = document.querySelector("form");
newBook = document.querySelector(".newBook");
addBtn = document.querySelector("button.add");
inputsArr = new Array(...document.querySelectorAll("input"));
inputsArr = inputsArr.map(function (e) {
  e.addEventListener('input', getFormValue);
});

createBtn.addEventListener('click', function (e) {
  bookArr = [];
  newBook.classList.toggle("hidden");
  createBtn.classList.toggle("hidden");  
});

addBtn.addEventListener('click', function (e) {
  uploadForm.classList.toggle("hidden");
});

subBtn.addEventListener('click', function (e) {
  uploadForm.classList.toggle("hidden");
  e.preventDefault();
});