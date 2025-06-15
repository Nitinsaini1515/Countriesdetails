console.log("Hello world");
async function countryData() {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,currencies,flags,capital"
    );
    const data = await response.json();

    const container = document.getElementById("container2");

    data.forEach((data) => {
      const datadiv = document.createElement("div");
      datadiv.className = "datadiv";
      datadiv.innerHTML = `
    <img alt = "${data.flags.alt}" src = "${data.flags.png}"/>
    <div>Country name : ${data.name.common}.</div>
    <div>Capital is: ${data.capital}.</div>
<div>Currency is:${
        data.currencies ? Object.values(data.currencies)[0].name : "N/A"
      }.</div>
    <div>Symbol is: ${
      data.currencies ? Object.values(data.currencies)[0].symbol : "N/A"
    }</div>     
    `;
      container.appendChild(datadiv);
    });
  } 
  catch (error) {
    console.error("Getting error to fetch data",error);
  }
}

countryData();
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