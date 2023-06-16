//Butonları al
const increaseButton = document.querySelector(".increase");
const decreaseButton = document.querySelector(".decrease")
const number =document.querySelector("#number")
console.log(number);
let initialNumber =0;
//butonlar btıklanmış mı dinle
//eğer tıklanırsa artır
increaseButton.addEventListener("click",() =>{
    initialNumber++;
    number.innerHTML =`<span>${initialNumber}</span>`;
});
//eğer tıklanırsa azalt
decreaseButton.addEventListener("click",()=>{
    initialNumber--;
    number.innerHTML=`<span> ${initialNumber} </span>`
})
 