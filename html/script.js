var iconEl = document.querySelectorAll(".icon");
var humidityEl = document.querySelectorAll(".cardHumidity");
var tempEL = document.querySelectorAll(".cardTemp");
var windEl = document.querySelectorAll(".cardWind");
var pastCities = JSON.parse(localStorage.getItem("pasCities"))||[]


const  searchBtn = document.querySelector("#searchBtn") 
const searchCity = document.querySelector("#searchTheCity")
searchBtn.addEventListener("click", function(){
  console.log(searchCity.value)  
  searchCityBtn(searchCity.value)
}) 
// this makes function of the api
function searchCityBtn(cityName) {
     const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ee45939e12ce42cb8008bc94e1fd50af&units=imperial` 
     

    //  fetches the api
     fetch(ApiUrl)
     .then(function (response) {
        console.log(response)
        return response.json()
     })
     .then (function (data) {
        console.log(data);
        pastCities.push(data.name)
        localStorage.setItem("pasCities", JSON.stringify(pastCities))
     })
    }

