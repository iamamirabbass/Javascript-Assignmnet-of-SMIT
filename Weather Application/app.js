// var latitude=67.0598332217543;
// var longitude=24.953709678545295; 
// const url=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=679cddd303fcba19fd40073024f2f1df`;
// const cityname="Karachi"
// const searchbycity=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=679cddd303fcba19fd40073024f2f1df`

let cityInput = document.getElementById('cityInp')
let temperature = document.getElementById('temp')
let windSpeed = document.getElementById('windSpeed')
let feelsLike = document.getElementById('feelsLike')
let placeLocation = document.getElementById('loc')


async function getData() {
    try {
      await fetch(url)
        .then((data) => data.json())
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    } catch (error) {}
  }
  setTimeout(() => {
          getData()
  }, 2000); 



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

