const apiKey = "2eda6779c78c8cd57e52a6a4442d807d";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
 const searchBox = document.querySelector(".search input");
 const searchBtn = document.querySelector(".search button");
 const cloudsImg = document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "inline";
    }
    
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
    
    if(data.weather[0].main == "Clouds"){
        cloudsImg.src = "./images/clouds.png";

    }else if(data.weather[0].main == "Clear"){
        cloudsImg.src = "./images/clear.png";

    }else if(data.weather[0].main == "Rain"){
        cloudsImg.src = "./images/rain.png";

    }else if(data.weather[0].main == "Mist"){
        cloudsImg.src = "./images/mist.png";

    }else if(data.weather[0].main == "Drazzile"){
        cloudsImg.src = "./images/drizzle.png";

    }

}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value;
    checkWeather(city);
   
});
