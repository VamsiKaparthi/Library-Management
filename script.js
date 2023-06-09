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
let i=0;
function createCard(book){
    let card = document.createElement('div');
    card.classList.add('book-card');
    let books = document.getElementById("books");
    books.appendChild(card);
    let title = book.bookName;
    let author = book.authorName;
    let pages = book.pagesNo;
    let read = book.checkBox;
    let backgroundColor = 'red';
    if(read==true){
        read='Read'
        backgroundColor='green';
    }
    else{
        read='Not-read'
        backgroundColor='red'
    }
    let card_details=`<img id="close-${i}" src="image/cross.svg" height="40px" style="align-self: flex-end;" >
        <label style="font-size: 28px; height: 15%; align-self: center;">${title}</label>
        <label style="font-size: 20px; padding-left: 18%;margin-bottom:10px;">By: ${author}</label>
        <label style="font-size: 20px; padding-left: 18%; margin-bottom: 20%;">Pages: ${pages}</label>
        <button id="rd-${i}" style="opacity: 70%;font-size:18px;background-color:${backgroundColor}; border:none; height:30px; width:70%;justify-self: end; margin-left: 18%; border-radius:2px;">${read}</button>`
    card.style.backgroundColor=color();
    card.insertAdjacentHTML('beforeend',card_details);
    function color(){
        let x = Math.floor((Math.random() * 3) + 1);
        console.log(x);
        if(x==1){
            return("#5263FF")
        }
        else if(x==2){
           return("C379FF")
        }
        return "red";
    }
    
    //if multiple identical EventListeners are registered on the same eventtarget wit the same parameters, the duplicate instances are discarded. They do not cause the the eventlistener to be called twice
    document.querySelector("#close-"+i).addEventListener('click',(e)=>{
        let removeEl = e.target.parentNode;
        books.removeChild(removeEl);
    })
    //adding eventlistenere to read status button
    let r = document.querySelector("#rd-"+i);
    r.addEventListener('click',(e)=>{
        if(r.innerHTML=="Read"){
            r.style.backgroundColor='red'
            r.innerHTML='Not Read'
        }
        else{
            r.style.backgroundColor='green'
            r.innerHTML='Read'
        }
    })
    i=i+1;
}
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
