let add = document.getElementById("add");
add.addEventListener("click",()=>{
    document.getElementById("form").style.display = "flex";
    console.log("hi");
})
let submit = document.getElementById("submit")
submit.addEventListener("click",()=>{
    console.log(document.getElementById("Book-name").value)
    console.log(document.getElementById("Author").value)
    console.log(document.getElementById("pages").value)
})