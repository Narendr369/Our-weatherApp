

const searchBox = document.getElementById("cityName")

searchBox.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    console.log(searchBox.value);
    getWeatherReport(searchBox.value)
  }
})

// get weather report

function getWeatherReport(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=854c10db75855837158b78c246c4b626&units=metric`)
    .then(weather => {
      return weather.json();
    }).then(showWeatherReport)
}

//show weather report

function showWeatherReport(weather) {
  console.log(weather);

  let city = document.getElementById("city")
  city.innerText = `${weather.name}`
  let country = document.getElementById("country")
  country.innerText = `${weather.sys.country}`
  let description = document.getElementById("description")
  description.innerText = `${weather.weather[0].description}`

  let temp = document.getElementById("tempe")
  temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`

  let icon = weather.weather[0].icon;
  let imgurl = `http://openweathermap.org/img/wn/${icon}@2x.png`
  let weathertype = document.getElementById(weather)
  $('#weather').attr('src', imgurl)

  let minMaxTemp=document.getElementById("min-max")
  minMaxTemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;c (min)/${Math.ceil(weather.main.temp_max)}&deg;c (max)`

}