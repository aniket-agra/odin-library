let bookArr;
let bookData;

function addBook(book) {
  bookArr.push(book);
  let libDiv = document.querySelector("div.library");
  if (libDiv === null) {
    let newLibDiv = document.createElement("div");
    newLibDiv.classList.add("library");
    newLibDiv.appendChild(generateBookCard(book));
    document.querySelector("div.newBook").insertBefore(newLibDiv, uploadForm);
  }
  else
    libDiv.appendChild(generateBookCard(book));
}

function generateBookCard(book) {
  let bookDiv = document.createElement("div");
  bookDiv.classList.add("book");
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.addEventListener('click', function (e) {
    document.querySelector("div.library").removeChild((e.target.parentElement));
  });
  bookDiv.appendChild(deleteButton);
  let dataDiv = document.createElement("div");
  dataDiv.classList.add("data");
  for(let key in book) {
    if (book.hasOwnProperty(key)) {
      let elem = document.createElement("div");
      elem.classList.add(key);
      elem.textContent = `${key} : ${book[key]}`;
      dataDiv.appendChild(elem);
    }
  }
  bookDiv.appendChild(dataDiv);
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
  let libDiv = document.querySelector("div.library");
  if (libDiv !== null && libDiv !== undefined)
    document.querySelector("div.newBook").removeChild(libDiv);
  uploadForm.classList.add("hidden");
  newBook.classList.add("hidden");
  createBtn.classList.remove("hidden");
  document.querySelector("body").classList.toggle("lib2");
  document.querySelectorAll(".credits").forEach(e => {e.classList.toggle("hidden")});
});

function getFormValue(e) {
  bookData[e.target.getAttribute("name")] = e.target.value;
};

createBtn.addEventListener('click', function (e) {
  bookArr = [];
  newBook.classList.toggle("hidden");
  createBtn.classList.toggle("hidden");  
  document.querySelector("body").classList.toggle("lib2");
  document.querySelectorAll(".credits").forEach(e => {e.classList.toggle("hidden")});
});

addBtn.addEventListener('click', function (e) {
  uploadForm.classList.toggle("hidden");
  bookData = {};
});

document.querySelector("form .close").addEventListener('click', function (e) {
  e.preventDefault();
  uploadForm.classList.toggle("hidden");
})

subBtn.addEventListener('click', function (e) {
  uploadForm.classList.toggle("hidden");
  // reset each field to its default value for re-capturing new book data
  document.querySelectorAll("form input").forEach(function (e, i) {
    e.value = (i === 0 || i === 1) ? "" : (i === 2 ? "0" : "Have Read");
  });
  addBook(new Book(bookData["title"], bookData["author"], bookData["pages"], bookData["status"]));
  e.preventDefault();
});