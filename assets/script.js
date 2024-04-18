// Retrieve past weather data from localStorage or initialize an empty array
let pastWeatherOne = JSON.parse(localStorage.getItem("pastWeather")) || [];

// Select the search button and input field
const searchWeatherBtn = document.querySelector("#searchWeather");
const inputWeather = document.querySelector("#weatherForm");

// Add event listener to the search button, calling fetchWeatherForCast function
searchWeatherBtn.addEventListener("click", function () {
  console.log("Button clicked")
  fetchWeatherForCast(inputWeather.value);
});

// Function to fetch weather data for the entered city
function fetchWeatherForCast() {
  // Get the value of the input field
  const cityName = inputWeather.value;

  // Construct the weather API URL with the city name
  const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=8ddd953d99be68409d70f845b7094f59`;

  // Fetch weather data from the API
  fetch(weatherUrl)
    .then((response) => {
      // Log the weather URL and response
      console.log(weatherUrl, response);
      // Parse the response as JSON
      return response.json();
    })
    .then((data) => {
      // Store the entire API response in the pastWeatherOne array
      pastWeatherOne.push(data);
      // Save the updated past weather data to localStorage
      localStorage.setItem("pastWeather", JSON.stringify(pastWeatherOne));
      
      // Update weather information in the DOM
      document.getElementById("weatherHead").textContent = data.name;
      document.getElementById("temp").textContent = `Temp: ${data.main.temp} °F`;
    });
}