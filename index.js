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

function displayBooks(){
    card.innerHTML += `<div class="item">
    <div>Title</div>
    <div>Title1</div>
    <div>Author</div>
    <div>Author1</div>
    <div>Number Of Pages</div>
    <div>100</div>
    <div>Read</div>
    <div>Yes</div>
    <button>remove</button>
    <button>Read</button>
</div>`;
    for(let i=0;i<myLibrary.length;i++){
        console.log(myLibrary[i].title);
    }
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
