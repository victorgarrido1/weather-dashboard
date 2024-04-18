var pastWeatherOne = JSON.parse(localStorage.getItem("pastWeather")) || [];
const searchWeatherBtn = document.querySelector("#searchWeather");
const inputWeather = document.querySelector("#weatherForm");

searchWeatherBtn.addEventListener("click", function () {
  console.log(inputWeather.value);
  fetchWeatherForCast(inputWeather.value);
});

function fetchWeatherForCast(cityName) {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=8ddd953d99be68409d70f845b7094f59`;

  fetch(weatherUrl)
    .then(function (response) {
      console.log(weatherUrl,response);
      return response.json();
    })
    .then(function (data) {
      // Store entire API response instead of just the city name
      pastWeatherOne.push(data);
      localStorage.setItem("pastWeather", JSON.stringify(pastWeatherOne));
      
      // Update weather information in the DOM
      document.getElementById("weatherHead").textContent = data.name;
      document.getElementById("temp").textContent = "Temp: " + data.main.temp + " °F";
    });
}
