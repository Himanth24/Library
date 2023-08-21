const add_book_btn = document.querySelector('#add-book');
const form_container = document.querySelector('.form-container');
const form = document.querySelector('.form');
const submit_btn = document.querySelector('#submit');
const card = document.querySelector('.books');

const myLibrary = [];

function Book(title,author,pages,status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function remove(i){
    myLibrary.splice(i,1);
    const r = document.querySelector(`.index-${i}`);
    card.removeChild(r);
}

function remover(){
    const r = document.querySelector(`.index-a`);
    card.removeChild(r);
}

function read(i){
    if(myLibrary[i].status === "Yes"){
        myLibrary[i].status = "No";
        const s = document.querySelector(`.read-${i}`);
        s.innerHTML = "No";
    }
    else {
        myLibrary[i].status = "Yes";
        const s = document.querySelector(`.read-${i}`);
        s.innerHTML = "Yes";
    }
}

function reader(){
    const s = document.querySelector(`.a`);
    if(s.innerHTML === "Yes"){
        s.innerHTML = "No";
    }
    else {
        s.innerHTML = "Yes";
    }
}

function displayBooks(){
    let i = myLibrary.length-1;
    card.innerHTML += `<div class="item index-${i}">
                            <div>Title</div>
                            <div>${myLibrary[i].title}</div>
                            <div>Author</div>
                            <div>${myLibrary[i].author}</div>
                            <div>Number Of Pages</div>
                            <div>${myLibrary[i].pages}</div>
                            <div>Read</div>
                            <div class="read-${i}">${myLibrary[i].status}</div>
                            <button onclick="remove(${i})">Remove</button>
                            <button onclick="read(${i})">Read</button>
                        </div>`;
}

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const status = document.getElementById('read').value;

    const new_book = new Book(title,author,pages,status);
    addBookToLibrary(new_book);
    form.reset();
    form_container.setAttribute('hidden',true);
    displayBooks();
})

add_book_btn.addEventListener('click',()=>{
    form_container.removeAttribute('hidden');
});

