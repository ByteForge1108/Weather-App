console.log('Hello Sandip');
const API_KEY = "b4d085d428e2f0c5015c59f99252411b";

async function showWeather () {
    // let latitude = 22.5697;
    // let longitute = 88.3697;

    try {
    let city = "goa";

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    let data = await response.json();

    console.log("Weather data: " , data);

    // let newPara = document.createElement('p');
    // newPara.textContent = `${data?.main?.temp.toFixed(2)}°C`

    // document.body.appendChild(newPara);
    } catch (err) {
        console.log('error hai');
    }

    renderWeatherData(data);
}

function getLocation () {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No geoLocation support");
    }
}

function showPosition (position) {
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log("latitude: " , lat);
    console.log("longitude: " , longi);
}
