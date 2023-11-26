
localStorage

var pastCities = JSON.parse(localStorage.getItem("pasCities"))||[]

const  searchBtn = document.querySelector("#searchBtn") 
const searchCity = document.querySelector("#searchTheCity")
searchBtn.addEventListener("click", function(){
  console.log(searchCity.value)  
  searchCityBtn(searchCity.value)
}) 

function searchCityBtn(cityName) {
     const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ee45939e12ce42cb8008bc94e1fd50af&units=imperial` 
     
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

