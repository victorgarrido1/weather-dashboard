var pastCities = JSON.parse(localStorage.getItem("pastCities")) || [];
const searchBtn = document.querySelector("#searchBtn");
const searchCity = document.querySelector("#searchTheCity");
searchBtn.addEventListener("click", function () {
  console.log(searchCity.value);
  searchCityBtn(searchCity.value);
});
function searchCityBtn(cityName) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ee45939e12ce42cb8008bc94e1fd50af&units=imperial`;
  fetch(apiUrl)
    .then(function (response) {
      console.log(">>>>>>>>>>>", response);
      return response.json();
    })
    .then(function (data) {
      pastCities.push(data.name);
      localStorage.setItem("pastCities", JSON.stringify(pastCities));
      // Update the HTML elements with the weather data
      document.getElementById("userCity").textContent = data.name;
      // You may need to adjust these based on the actual structure of the API response
      document.getElementById("temp").textContent =
        "Temp: " + data.main.temp + " °F";
      document.getElementById("wind").textContent =
        "Wind: " + data.wind.speed + " mph";
      document.getElementById("humidity").textContent =
        "Humidity: " + data.main.humidity + "%";
      // You can continue updating other elements accordingly
    });
}

fetch(apiURl)









    
    
    