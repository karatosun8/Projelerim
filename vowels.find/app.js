let input = document.getElementById("input")
let result =document.getElementById("result")
const btn =document.getElementById("btn")



let sesliHarfler = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];
let sesliHarfSayisi = 0;

  
btn.addEventListener('click',()=>{
    let h= input.value
    // console.log(input.value.toLowerCase());
    for (let i = 0; i < h.length; i++) {
        let karakter = h[i].toLowerCase();
        if (sesliHarfler.includes(karakter)) {
          sesliHarfSayisi++;
        }
      }
    result.innerText = `There are ${sesliHarfSayisi} vowel in` + input.value
    input.value = "" //input.value yi boşaltır
})
















