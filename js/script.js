let bookArr;
let bookData;

function addBook(book) {
  bookArr.push(book);
}

function generateBookCard(book) {
  let bookDiv = document.createElement("div");
  bookDiv.classList.add("book");
  for(let key in book) {
    if (book.hasOwnProperty(key)) {
      let elem = document.createElement("div");
      elem.classList.add(key);
      elem.textContent = book[key];
      bookDiv.appendChild(elem);
    }
  }
  bookDiv.style.border = "1px solid black";
  bookDiv.style.borderRadius = "4px";
  bookDiv.style.display = "flex";
  bookDiv.style.flexDirection = "column";
  return bookDiv;
}

function Book(name, author, pages, haveRead) {
  this.name = name;
  this.author = author;
  this.pages = Number(pages);
  this.haveRead = haveRead === "Have Read" ? true : false;
}

Book.prototype.printDetail = function () {
  return `${this.name}, written by ${this.author}, ${this.pages} pages, ` + 
  `${this.haveRead ? "read" : "not yet read"}`;
}

const createBtn = document.querySelector(".create button");
const subBtn = document.querySelector("#formButton");
const uploadForm = document.querySelector("form");
const newBook = document.querySelector(".newBook");
const addBtn = document.querySelector("button.add");
let inputsArr = new Array(...document.querySelectorAll("input"));
inputsArr = inputsArr.map(function (e) {
  e.addEventListener('change', getFormValue);
});
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener('click', function (e) {
  bookArr = null;
  newBook.classList.toggle("hidden");
  createBtn.classList.toggle("hidden");
});

function getFormValue(e) {
  bookData[e.target.getAttribute("name")] = e.target.value;
};

createBtn.addEventListener('click', function (e) {
  bookArr = [];
  newBook.classList.toggle("hidden");
  createBtn.classList.toggle("hidden");  
});

addBtn.addEventListener('click', function (e) {
  uploadForm.classList.toggle("hidden");
  bookData = {};
});

subBtn.addEventListener('click', function (e) {
  uploadForm.classList.toggle("hidden");
  document.querySelectorAll("form > input").forEach(function (e, i) {
    e.value = (i === 0 || i === 1) ? "" : (i === 2 ? "0" : "Have Read");
  });
  bookArr.push(new Book(bookData["title"], bookData["author"], bookData["pages"], bookData["status"]));
  e.preventDefault();
});