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

let submit = document.getElementById("submit")
submit.addEventListener("click",()=>{
    
})