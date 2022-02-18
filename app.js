window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let temperatureCity = document.querySelector('.location-city');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude
            lat = position.coords.latitude

            const api = "https://api.openweathermap.org/data/2.5/weather?q=Vancouver,us&APPID=bb54ef8449eef00fa3e8f80496d9d27b";
            const kelvin = 273;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    // set dom elements
                    temperatureDegree.textContent = Math.floor(data.main.temp - kelvin);
                    temperatureDescription.textContent = data.weather[0].description;
                    temperatureCity.textContent = data.name;
                });
            // set dom elements from the api 
            temperatureDegree.textContent = Object.weather;
        });
    }


});