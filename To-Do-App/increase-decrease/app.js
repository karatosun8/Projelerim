//Butonları al
const increaseButton = document.querySelector(".increase");
const decreaseButton = document.querySelector(".decrease")
const number =document.querySelector("#number")
console.log(number);
let initialNumber =0;
//butonlar btıklanmış mı dinle
increaseButton.addEventListener("click",() =>{
    initialNumber++;
    number.innerHTML =`<span>${initialNumber}</span>`;
});

decreaseButton.addEventListener("click",()=>{
    initialNumber--;
    number.innerHTML=`<span> ${initialNumber} </span>`
})
//eğer tıklanırsa artır ya da azalt
//Title'yi bul ve onu artır veya azalt