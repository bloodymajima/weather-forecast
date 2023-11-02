// const cityInfoContainer = $(".city-info-box");
const dayForecastContainer = $(".day-forecast");
const dayOne = $(".forecast-day-1");
const dayTwo = $(".forecast-day-2");
const dayThree = $(".forecast-day-3");
const dayFour = $(".forecast-day-4");
const dayFive = $(".forecast-day-5");
const searchBox = $("#search-box");
const searchBtn = $("#search");

document.addEventListener('DOMContentLoaded', function() {
    // Create a new div element
    const cityName = document.createElement('city-name');
    
    // Select the parent element to which you want to append the new div
    const cityInfoContainer = $(".city-info-box");
    
    // Append the new div to the container
    cityInfoContainer.appendChild(cityName);
});

// make variables for city name, temp, wind, humidity in cityInfoContainer
// make variables for '' in day-forecast, dayOne, dayTwo, dayThree, dayFour, and dayFive


let userLocation; 
navigator.geolocation.getCurrentPosition(function(position) {
    userLocation = position
    console.log(userLocation);
    getForecast(userLocation.coords.latitude, userLocation.coords.longitude)
});

const weatherAPIKey = "66fc26947c42bd206b39e4cab864f9c4";
// input city, get weather; auto geocoder
function getForecast(lat, lon) {
    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}&units=imperial`;

    console.log(weatherURL);
    
    fetch(weatherURL)
    .then (function (response) {
        console.log(response)
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
}

function getCoordinates(cityName) {
    const coordinatesURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${weatherAPIKey}`
    fetch(coordinatesURL)
    .then (function (response) {
        console.log(response)
        return response.json();
    })
    .then (function (data) {
        console.log(data);
        getForecast(data[0].lat, data[0].lon);
        
    });
}


searchBtn.click(function(e) {
    e.preventDefault()
    const userInput = searchBox.val()
    console.log(userInput)
    if (userInput) {
        getCoordinates(userInput)
    }
    else {
        error
    }
    cityInfoContainer.appendChild(cityName);
    cityName.textContent = userInput
});
// When user types and enters in a city name, Dashboard updates to that location
// If invalid city is entered, error

// cityName redefined to whatever search bar input is

// inside, we will need to achieve a few things:
    // 1. declare and assign the value of the event's target to a variable AKA whatever is typed in the search bar
    // 2. link that variable to an element inside existing HTML element;

