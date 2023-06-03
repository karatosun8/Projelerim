console.log("Merhaba Dünya");
const btnClick =document.getElementById("change")
const btnOver =document.getElementById("over")
let text =document.querySelector("#text")
const colorPrint =document.createElement("p")
text.appendChild(colorPrint)

btnClick.onclick= () => {
    let color1 = Math.trunc(Math.random()*255);
    let color2 = Math.trunc(Math.random()*255);
    let color3 = Math.trunc(Math.random()*255);
    document.body.style.backgroundColor = "rgb("+color1+","+color2+","+color3+")";
} 

btnOver.onmouseover = () =>{
    let color1 = Math.trunc(Math.random()*255);
    let color2 = Math.trunc(Math.random()*255);
    let color3 = Math.trunc(Math.random()*255);
    document.body.style.backgroundColor = "rgb("+color1+","+color2+","+color3+")"; 
    text.innerHTML = document.body.style.backgroundColor;
   
}