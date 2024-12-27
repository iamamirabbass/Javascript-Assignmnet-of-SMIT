var latitude=67.0598332217543;
var longitude=24.953709678545295; 
const url=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=679cddd303fcba19fd40073024f2f1df`;
const cityname="Karachi"
const searchbycity=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=679cddd303fcba19fd40073024f2f1df`

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