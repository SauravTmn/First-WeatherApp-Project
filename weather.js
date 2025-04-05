const apiKey = "86b8b538bd56794226c0f115ee77a565";
const city = "bidur";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");



async function weatherCheck(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.getElementById("cityName").innerHTML= data.name;
    document.getElementById("temperature").innerHTML= data.main.temp + "°C";
    document.getElementById("humidity").innerHTML= data.main.humidity + "%";
    document.getElementById("wind").innerHTML= data.wind.speed + " km/hr";
    document.getElementById("pressure").innerHTML= data.main.pessure + "hpa";
    document.getElementById("feel").innerHTML= data.main.feels_like + " °C";
    document.getElementById("image").innerHTML= weather.icon;
    document.getElementById("clear").innerHTML= data.weather[0];
    document.getElementById("weatherIcon").innerHTML= data.weather[0].icon;




}


searchBtn.addEventListener("click", ()=>{
    weatherCheck(searchBox.value);
})

