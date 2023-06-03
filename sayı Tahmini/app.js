
const input = document.getElementById("input");
const btn = document.getElementById("button");
const error = document.getElementById("error");
let hak = document.getElementById("hak");
let pcValue = 0;
let attempts = 2;


//kullanıcı aynı sayıyı girdiğinde hakkından düşmesin ve giridiği sayıyı kontrol etsin uyarı verisn bu sayıyı daha önce girdiniz desin.
//kullanıcının girdiği sayı pcden büyükse user.value max değer olacak (0-user value ) arası değer olacak. min-max arası değerler dinamik hale gelecek.
//hak bittiği zaman veya kazandığı zaman buton event reload (refresh) işlemi olacak.


btn.addEventListener("click", (e) => {

  pcValue = Math.floor(Math.random() * 100) + 1;

  if (input.value < 0 || input.value > 100) {

    error.innerHTML = "Lütfen 1 - 100 arasinda değer giriniz";
    error.style = "color:red";

  } else {

    if (attempts) {

      hak.innerHTML=Number(attempts--)

      if (input.value > pcValue) {

        error.innerHTML = "Daha küçük bir sayi giriniz";
        input.value = "";
        input.value.focus();

      } else if (input.value < pcValue) {

        error.innerHTML = "Daha büyük bir sayi giriniz";
        input.value = "";
        input.value.focus();

      } else if (input.vale == pcValue) {

        error.innerHTML = "Tebrikler bildiniz";
        error.style = "color: green; font-size: 50px";
      }
    } else {

      error.innerHTML = "Maalesef hiç hakkniz kalmamiştir.";
      
      hak.innerHTML=Number(attempts--)

      btn.style = "display: none";

    }
  }
});