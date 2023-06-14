const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const body= document.getElementById("body")
const text = document.querySelector("#text")



btn1.addEventListener("click",() => {
    let num1 = Math.floor(Math.random() * 255)
    let num2 = Math.floor(Math.random() * 255)
    let num3 = Math.floor(Math.random() * 255)

    let renk = `rgb(${num1},${num2},${num3})`//Background rengini belirledim.
    
    body.style.backgroundColor = renk;
    document.getElementById("text").innerText = renk;//Backgorund ismini ekrana yazdırma
    
})



btn2.addEventListener("mouseover",()=> {
    let num1 = Math.floor(Math.random() * 255)
    let num2 = Math.floor(Math.random() * 255)
    let num3 = Math.floor(Math.random() * 255)

    let renk = `rgb(${num1},${num2},${num3})`//Background rengini belirledim.
    
    body.style.backgroundColor = renk
    document.getElementById("text").innerText = renk;//Backgorund ismini ekrana yazdırma
    
})