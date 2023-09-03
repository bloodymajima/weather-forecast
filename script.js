document.getElementById('city-info-box').innerHTML = cityInfoContainer;
document.getElementById('day-forecast').innerHTML = dayForecastContainer;
document.getElementById('forecast-day-1').innerHTML = dayOne;
document.getElementById('forecast-day-2').innerHTML = dayTwo;
document.getElementById('forecast-day-3').innerHTML = dayThree;
document.getElementById('forecast-day-4').innerHTML = dayFour;
document.getElementById('forecast-day-5').innerHTML = dayFive;
document.getElementById('search-box').innerHTML = searchBox;
document.getElementById('').innerHTML = ;
document.getElementById('').innerHTML = ;
document.getElementById('').innerHTML = ;

const APIKey = "66fc26947c42bd206b39e4cab864f9c4";
var city;

const queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

api.openweathermap.org/data/2.5/weather?q={city}&appid={APIKey};

fetch(queryURL);