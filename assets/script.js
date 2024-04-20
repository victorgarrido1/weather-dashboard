let pastCities = JSON.parse(localStorage.getItem("pastCities")) || [];
const searchBtn = document.querySelector("#weatherBtn");
const searchCity = document.querySelector("#searchTheCity");
searchBtn.addEventListener("click", function () {
  console.log(searchCity.value);
  currentDay(searchCity.value);
  fiveDayOptions(searchCity.value);
  // displayWeatherEmoji(searchCity.value)
});

function currentDay(cityName) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ee45939e12ce42cb8008bc94e1fd50af&units=imperial`;
  fetch(apiUrl)
    .then(function (response) {
      console.log(">>>>>>>>>>>", response);
      return response.json();
    })
    .then(function (data) {
      pastCities.push(data.name);
      localStorage.setItem("pastCities", JSON.stringify(pastCities));
      console.log(pastCities);
      // Update the HTML elements with the weather data
      document.getElementById("userCity").textContent = data.name;
      // You may need to adjust these based on the actual structure of the API response
      document.getElementById("temp").textContent =
        "Temp: " + data.main.temp + " °F";
      document.getElementById("wind").textContent =
        "Wind: " + data.wind.speed + " mph";
      document.getElementById("uv").textContent =
        "Weather: " + data.weather[0].main;
      // Get the weather emoji based on weather ID
      const emoji = getWeatherEmoji(data.weather[0].id);
      // Set the text content of the HTML element with id "weatherEmoji" to the emoji
      document.getElementById("weatherEmoji").textContent = emoji;
    });
}

// //here we will attempt to gt to get the iconURL for the weather
// function displayWeatherEmoji(cityName) {
//   const iconCode = data.weather[0].icon; // Assuming the icon code is available in the data

//   // Construct the URL for the weather icon based on the icon code
//   const iconUrl = `https://openweathermap.org/img/wn/${cityName}@4x.png`;

//   // Create a new img element for the weather icon
//   const weatherIcon = document.createElement("img");

//   // Set the src attribute of the weather icon to the icon URL
//   weatherIcon.src = iconUrl;

//   // Get the container element where you want to display the weather icon
//   const weatherIconContainer = document.getElementById("weatherIcon");

//   // Append the weather icon img element to the container
//   weatherIconContainer.appendChild(weatherIcon);
// }



// Define getWeatherEmoji function outside currentDay function
function getWeatherEmoji(weatherId) {
  // Generate a random number between 0 and 1
  const random = Math.random();

  // Multiply the random number by the range of weather IDs and add 200
  const randomWeatherId = Math.floor(random * 500) + 200;

  // Use the randomWeatherId to determine the emoji
  switch (true) {
    case randomWeatherId >= 200 && randomWeatherId < 300:
      return "⛈️"; // Emoji for Thunderstorm
    case randomWeatherId >= 300 && randomWeatherId < 400:
      return "🌧️"; // Emoji for Drizzle
    case randomWeatherId >= 500 && randomWeatherId < 600:
      return "🌧️"; // Emoji for Rain
    case randomWeatherId >= 600 && randomWeatherId < 700:
      return "❄️"; // Emoji for Snow
    default:
      return "🤷"; // Default Emoji for unknown weather
  }
}

function fiveDayOptions(cityName) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=ee45939e12ce42cb8008bc94e1fd50af`;

  fetch(apiUrl)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Could not fetch weather data");
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const day1Container = document.getElementById("day-1");
      day1Container.querySelector(".cardHumidity").innerText =
        data.list[0].main.humidity;
      day1Container.querySelector(".cardTemp").innerText =
        data.list[0].main.temp_min;
      day1Container.querySelector(".cardWind").innerText =
        data.list[0].wind.speed;

      const day2Container = document.getElementById("day-2");
      day2Container.querySelector(".cardHumidity").innerText =
        data.list[2].main.humidity;
      day2Container.querySelector(".cardTemp").innerText =
        data.list[2].main.temp_min;
      day2Container.querySelector(".cardWind").innerText =
        data.list[2].wind.speed;

      const day3Container = document.getElementById("day-3");
      day3Container.querySelector(".cardHumidity").innerText =
        data.list[3].main.humidity;
      day3Container.querySelector(".cardTemp").innerText =
        data.list[3].main.temp_min;
      day3Container.querySelector(".cardWind").innerText =
        data.list[3].wind.speed;

      const day4Container = document.getElementById("day-4");
      day4Container.querySelector(".cardHumidity").innerText =
        data.list[4].main.humidity;
      day4Container.querySelector(".cardTemp").innerText =
        data.list[4].main.temp_min;
      day4Container.querySelector(".cardWind").innerText =
        data.list[4].wind.speed;

      const day5Container = document.getElementById("day-5");
      day5Container.querySelector(".cardHumidity").innerText =
        data.list[5].main.humidity;
      day5Container.querySelector(".cardTemp").innerText =
        data.list[5].main.temp_min;
      day5Container.querySelector(".cardWind").innerText =
        data.list[5].wind.speed;
      day5Container.querySelector(".sunrise").innerText = time;
    });
}
