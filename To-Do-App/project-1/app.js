let click = document.getElementsByTagName("input")
let text = document.getElementById("h2")
let checkbox = document.getElementsByClassName("checkbox")

document.querySelector("label").addEventListener("click",()=> {
   if(checkbox.checked) {
    text.style.backgroundColor ="red"
   }else{
    text.style.backgroundColor ="black"
   }

})