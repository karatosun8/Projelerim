const form = document.querySelector("form");
const input = document.querySelector("form  #input-alani");
// const input = document.querySelector("form#input-alani");
// const input = document.querySelector("form  > #input-alani");

form.addEventListener("click", (e) => {
  e.preventDefault();
  //   input.value = "";
  //   form.reset();
  //   e.target.reset();

    // console.log(e.target);
    // console.log(e.currentTarget);
  getData();
  e.currentTarget.reset();
});

// async function name(params) {

// }

// const getData = async function(){

// }

const getData = async () => {
  // api key'imizi değişken olarak atadık.
  const API_KEY = "66d68b83cc1917c740dcc7ba91c868a1";
  const cityName = input.value;
  const units = "metric";

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=${units}&lang=tr
`;

  try {
    const res = await fetch(URL);

    //     console.log(res);

    if (!res.ok) {
      throw new Error(res.status);
      //  console.log(res.status);
    }
    const data = await res.json();
    weatherDataDom(data);
  } catch (error) {
    //     console.log(error);
  }
};

const weatherDataDom = (data) => {
      // ! data bize object verdiği için objeck destructiring yaptık ve verileri bu şekilde aldık.
// peki destructiring yapmasaydık data.içerisinde veriye göre girip almamız gerekirdi.
  const {
    name,
    sys: { country },
    main: { temp, feels_like, humidity },
    weather: [{ main, description, icon }], 
    wind: { speed },
  } = data;
//   console.log(data);
//   console.log(speed);
// ! 1.yöntem göndereceğimiz yerleri seçip inner textine verileri eklemek
  //   const şehir = document.querySelector("#şehir-adi");
  //   const ülke = document.querySelector("#ülke");
  //   const havaDurumuDerece = document.querySelector("#derece");
  //   const havaDurumu = document.querySelector("#hissedilen-hava");
  //   const hissedilenDerece = document.querySelector("#hissedilen-derece");
  //   const rüzgarHizi = document.querySelector("#rüzgar-hizi");
  //   const nemOrani = document.querySelector("#nem-orani");
  // //   const cardImages = document.querySelector(".card-img-top");
  //   şehir.innerText = name;
  //   ülke.innerText = country;
  //   havaDurumuDerece.innerText = Math.round(temp);
  //   havaDurumu.innerText = description;
  //   hissedilenDerece.innerText = Math.round(feels_like);
  //   rüzgarHizi.innerText = Math.round(speed);
  //   nemOrani.innerText = humidity;
// ! 2.yöntem innerHtml ile oluşturduğumuz html kalıbını bacdick ile açarak dolar süslü ile api'deki verileri buraya ekledik.
  const container = document.querySelector(".container");
  container.innerHTML = `
  <div class="card p-4 text-center " style="width: 18rem;">
  <!--* Resim Alanı -->
  <img src="" class="card-img-top mx-auto icon-img" alt="...">
  <!--* Şehir-Ulke-Alani -->
  <div class="card-body">
    <h2 class="card-title " id="şehir-adi">${name} </h2><span class="ülke" id="ülke">${country}</span>
  </div>
  <ul class="list-group list-group-flush h3">
    <li class="list-group-item ">
        <div class="div">
              <p class="hava-durumu-derece"> <span id="derece" class="h1">${temp} </span></p> <i class="fa-regular fa-circle"></i>  <i class="fa-solid fa-c"></i>
       </div>
    </li>
    <li class="list-group-item">
  <div class="hava-nasil mt-3">
        <p class="hava-nasil-text text-capitalize" id="hissedilen-hava">${feels_like}</p>
  </div>
  </li>
    <li class="list-group-item">
        <div class="div">
              <p class="hava-durumu-derece"> <span id="hissedilen-derece" class="h1"> ${description} </span></p> <i class="fa-regular fa-circle"></i>  <i class="fa-solid fa-c"></i>
       </div>
    </li>
  </ul>
  
  <div class="card-body d-flex justify-content-between border  p-4 ">
  <div class="rüzgar-hizi d-flex align-items-center gap-1 ">
  <img src="images/rüzgar.png" alt="" width="40%" class="mt-4">
               <div class=" mt-4">
                     <div class="d-flex align-items-center">
                          <span class="wind h1" id="rüzgar-hizi">${speed} </span> <strong class="h3 mx-2">km/h</strong>
                    </div>
               </div>
  
              </div>
  
  <div class="nem-durumu d-flex align-items-center mx-5  gap-1 ">
  <img src="images/nem.jpg" alt="" width="50%" class="mt-4 ">
  
        <div class="d-flex mt-4">
              <span class="wind h1" id="nem-orani">${humidity}</span> <span class="h1">%</span>
        </div>
  </div>
  
  </div>
  
  </div>

  `;
  //   https://openweathermap.org/img/wn/10d@2x.png

//! APİ'den havanın durumuna göre iconlar çağırdık img'nin srcsine ekledik.
  const cardImg = document.querySelector(".card-img-top");
  cardImg.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

// ! 2.yöntem ise havanın durumuna göre if else if ile hava nasılsa ona göre lokalimizdeki resimleri images srcsine ekledik.
  //   if (main == "Clouds") {
  //     cardImages.src = "images/clouds.png";
  //   } else if (main == "Clear") {
  //     cardImages.src = "images/clear.png";
  //   } else if (main == "Rain") {
  //     cardImages.src = "images/rain.png";
  //   } else if (main == "Drizzle") {
  //     cardImages.src = "images/drizzle.png";
  //   } else if (main == "Mist") {
  //     cardImages.src = "images/mixt.png";
  //   }
};