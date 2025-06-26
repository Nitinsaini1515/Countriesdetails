console.log("Hello world");
const inputCountry = document.querySelector('.inputcountry')
const searchCountry = document.querySelector(".searchbutton")
const loading = document.querySelector('.loading')
const flagsdata = []


async function countryData() {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,currencies,flags,capital"
    );
    const data = await response.json();

// handle loading or error 

if(!data){
  loading.innerHTML = "loading....."
  setTimeout(() => {
    alert("Please check your internet connection")
    console.log("Hey how are you")
  }, 1000);
}
else{
  loading.innerHTML = ""
}
   

    const container = document.getElementById("container2");

    data.forEach((data) => {
      const datadiv = document.createElement("div");
      flagsdata.push(datadiv)
      datadiv.className = "datadiv";
      datadiv.innerHTML = `

      <div class = "datadiv2 ">
    <img alt = "${data.flags.alt}" src = "${data.flags.png}"/>
    <div>Country name : ${data.name.common}.</div>
    <div>Capital is: ${data.capital}.</div>
<div>Currency is:${
        data.currencies ? Object.values(data.currencies)[0].name : "N/A"
      }.</div>
    <div>Symbol is: ${
      data.currencies ? Object.values(data.currencies)[0].symbol : "N/A"
    }</div>     
    </div>
    `
      container.appendChild(datadiv);
    });
  } 
  catch (error) {
    console.error("Getting error to fetch data",error);
  }
}

countryData();

// theme js

const themechange = document.getElementById("themeToggle");
let dark = false;
const container3 = document.querySelector(".container");
const navbar = document.querySelector(".navbar");
themechange.addEventListener("click", () => {
  if (dark === false) {
    container3.style.backgroundColor = "black";
    container3.style.color = "white";
    themechange.innerHTML = "☀️";
    navbar.style.color = "white";
    dark = true;
  } else {
    container3.style.backgroundColor = "white";
    container3.style.color = "black";
    themechange.innerHTML = "🌙";
    navbar.style.color = "";
    dark = false;
  }
});


//search js

const searchdata = ()=>{
inputCountry.addEventListener("input",(e)=>{
  const textEntered = e.target.value.toLowerCase() 

flagsdata.forEach(curElem=>{
  const textApi = curElem.textContent.toLowerCase()
  if(textApi.includes(textEntered)){
curElem.classList.remove('hide')
  }
  else{
    curElem.classList.add('hide')
  }
})  
})
}
searchdata()


