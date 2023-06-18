fetch("https://restcountries.com/v3.1/name/{name}?fullText=true")
.then(res=>res.json())
.then(resJson => {
    console.log(resJson)
})