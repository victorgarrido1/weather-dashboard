// let pastWeather = JSON.parse(localStorage.getItem("pastWeather")) || [];
// const buttonElement  = document.querySelector('.btn.btn-outline-success');  // this var will be for the button

// const buttonElement = document.querySelector('.btn.btn-outline-success');
// const inputElement = document.querySelector('input.form-control');

// buttonElement.addEventListener("click", function () {
//   fetchWeather(inputElement.value)
// })

function fetchWeather(query) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=8ddd953d99be68409d70f845b7094f59`;

  fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));
}

fetchWeather("Phoenix");



// function fiveDayOptions(cityName) {
//   const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=ee45939e12ce42cb8008bc94e1fd50af`;
//   fetch(apiUrl)
//     .then(function (response) {
//       console.log(">>>>>>>>>>>", response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log("fiveDayOptions", data);
//       const day1Container = document.getElementById("day-1");
//       day1Container.querySelector(".cardHumidity").innerText = data.list[0].main.humidity;
//       day1Container.querySelector(".cardTemp").innerText = data.list[0].main.temp_min
//       day1Container.querySelector(".cardWind").innerText = data.list[0].wind.speed


//       const day2Container = document.getElementById("day-2");
//       day2Container.querySelector(".cardHumidity").innerText = data.list[2].main.humidity;
//       day2Container.querySelector(".cardTemp").innerText = data.list[2].main.temp_min
//       day2Container.querySelector(".cardWind").innerText = data.list[2].wind.speed

//       const day3Container = document.getElementById("day-3");
//       day3Container.querySelector(".cardHumidity").innerText = data.list[3].main.humidity;
//       day3Container.querySelector(".cardTemp").innerText = data.list[3].main.temp_min
//       day3Container.querySelector(".cardWind").innerText = data.list[3].wind.speed


//       const day4Container = document.getElementById("day-4");
//       day4Container.querySelector(".cardHumidity").innerText = data.list[4].main.humidity;
//       day4Container.querySelector(".cardTemp").innerText = data.list[4].main.temp_min
//       day4Container.querySelector(".cardWind").innerText = data.list[4].wind.speed


//       const day5Container = document.getElementById("day-5");
//       day5Container.querySelector(".cardHumidity").innerText = data.list[5].main.humidity;
//       day5Container.querySelector(".cardTemp").innerText = data.list[5].main.temp_min
//       day5Container.querySelector(".cardWind").innerText = data.list[5].wind.speed
//     });
// }

