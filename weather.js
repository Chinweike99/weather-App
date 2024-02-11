const apiKey = "cd63fdeeec1046ac261ad4b24ed3a89c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

var searcBox = document.querySelector(".search input");
var searchIcon = document.querySelector(".search button");
const weatherIcon = document.querySelector(".condition");

async function weatherCheck(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response == 404){
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".country").innerHTML = data.name;
        document.querySelector(".percent").innerHTML = data.main.humidity + "%";
        document.querySelector(".km_hr").innerHTML = data.wind.speed + "km/hr";
    }

    if (data.weather[0].main == "Rain"){
        weatherIcon.src = "icons/cloud-snow.svg";
    }
    else if (data.weather[0].main == "clear"){
        weatherIcon.src = "icons/cloud-sun.svg";
    }
    else if (data.weather[0].main == "clouds"){
        weatherIcon.src = "icons/clouds.svg";
    }
    document.querySelector(".weather").style.display = "block";
}

searchIcon.addEventListener("click", ()=>{
    weatherCheck(searcBox.value);
})