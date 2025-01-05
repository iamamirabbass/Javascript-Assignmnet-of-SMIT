let cityInput = document.getElementById('cityInp')
let temperature = document.getElementById('temp')
let windSpeed = document.getElementById('windSpeed')
let feelsLike = document.getElementById('feelsLike')
let placeLocation = document.getElementById('loc')


  async function checkWeather(){
    try {
     if(cityInput.value.trim() !== '') {
     const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=ae51a4bb2c418a197081a41663fa3103`
     let fetchResult = await fetch(baseUrl)
     if(!fetchResult.ok && fetchResult.statusText === 'Not Found') {
         alert('City Not Found')
     } else {
 
         let resultJson = await fetchResult.json()
         showWeather(resultJson)
     }
         alert('Please enter any city')
     }
    } catch (error) {
     
    }
 }



 function showWeather(weatherData) {
  console.log(weatherData)
  placeLocation.innerText = weatherData.name
  temperature.innerText = `${Math.floor(weatherData.main.temp - 273.15)}\u00B0C`
  windSpeed.innerText = `${weatherData.wind.speed} km/hr`
  feelsLike.innerText = `${Math.floor(weatherData.main.feels_like - 273.15)}\u00B0C`

}
