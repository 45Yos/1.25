const API_KEY = '9eb73ca1c2c25bf0a8f1ca6d5304684f';
const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}&q=`;
const GEO_URL = `https://api.openweathermap.org/geo/1.0/direct?limit=5&appid=${API_KEY}&q=`;


window.onload = () => {
    const audio = new Audio('./sound/Background.mp3').play();
    audio.loop = true;
    audio.volume = 0.2;
};



const q = document.getElementById('inputCity');
const button = document.querySelector('button');
const h1 = document.getElementById('city');
const temp = document.getElementById('temp');
const description = document.getElementById('description');
const weatherIcon = document.getElementById('WeatherIcon');
const errorMessage = document.getElementById('errorMessage');
const suggestionsBox = document.getElementById('suggestions');



async function fetchCitySuggestions(query) {
    if (!query) {
        suggestionsBox.innerHTML = "";
        return;
    }

    const response = await fetch(GEO_URL + query);
    const cities = await response.json();


    suggestionsBox.innerHTML = cities.map(city =>
        `<div class="suggestion" onclick="selectCity('${city.name}, ${city.country}')">
            ${city.name}, ${city.country}
        </div>`
    ).join('');
}



function selectCity(city) {
    inputCity.value = city;
    suggestionsBox.innerHTML = "";
}



inputCity.addEventListener('input', () => fetchCitySuggestions(inputCity.value));




async function getWeather(city) {
    const response = await fetch(URL + city);
    const data = await response.json();
    displayWeather(data);
}


function displayWeather(weatherData) {
    if (weatherData.cod === 200) {
        errorMessage.innerText = "";
        h1.innerText = weatherData.name;
        temp.innerText = Math.round(weatherData.main.temp) + "C°";
        description.innerText = weatherData.weather[0].description;
        weatherIcon.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
        weatherIcon.alt = weatherData.name;
        console.log(weatherData);
    } else {
        h1.innerText = "";
        temp.innerText = "";
        description.innerText = "";
        weatherIcon.src = "";
        weatherIcon.alt = "";
        errorMessage.innerText = "City not found";
    }
}


button.addEventListener('click', () => {
    getWeather(inputCity.value);
});


