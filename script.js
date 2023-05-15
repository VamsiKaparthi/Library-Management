let add = document.getElementById("add");
add.addEventListener("click",()=>{
    document.getElementById("form").style.display = "flex";
    console.log("hi");
})
let myLibrary=[];
function Book(book,author,pages,check){
    this.bookName=book;
    this.authorName=author;
    this.pagesNo=pages;
    this.checkBox=check;
}
function addBookToLibrary(book){
    myLibrary.push(book)
}
function createCard(book){
    let card = document.createElement('div');
    let bookCards = document.getElementById("books");
    card.classList.add('book-card');
    card.style.backgroundColor="#5163ff";
    bookCards.append(card);
}
let r = document.getElementById("rd");
r.addEventListener("click",(e)=>{
    if(r.innerHTML=="Read"){
        console.log("hello")
        r.style.backgroundColor='red'
        r.innerHTML='Not Read'
    }
    else{
        console.log("hi");
        r.style.backgroundColor='green'
        r.innerHTML='Read'
    }
})
let cl = document.getElementById("close")
cl.addEventListener("click",(e)=>{
    let x = cl.parentNode;
    x.style.display="none";
})
let submit = document.getElementById("submit")
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    let bookName = document.getElementById("Book-name");
    let author = document.getElementById("Author");
    let no= document.getElementById("pages");
    if(bookName.value==""||author.value==""||no.value==""){
        alert("Ensure you fill in all fields");
    }
    else{
        let book = new Book(document.getElementById("Book-name").value,document.getElementById("Author").value,document.getElementById("pages").value,document.getElementById("read").checked);
        console.log(document.getElementById("Book-name").value)
        addBookToLibrary(book);
        bookName.value=""
        author.value=""
        no.value=""
        document.getElementById("form").style.display="none";
        console.log(myLibrary)
        createCard(book)
    }
})