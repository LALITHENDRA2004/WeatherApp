// ✅ Get elements from DOM
const userLocation = document.getElementById("userLocation");
const errorMessage = document.getElementById("errorMessage");

const weatherIcon = document.querySelector(".weatherIcon");
const temperature = document.querySelector(".temperature");
const feelsLike = document.querySelector(".feelslike");
const description = document.querySelector(".description");
const date = document.querySelector(".date");
const city = document.querySelector(".city");

const HValue = document.getElementById("HValue");
const WValue = document.getElementById("WValue");
const SRValue = document.getElementById("SRValue");
const SSValue = document.getElementById("SSValue");
const CValue = document.getElementById("CValue");
const UVValue = document.getElementById("UVValue");
const PValue = document.getElementById("PValue");

const Forecast = document.querySelector(".Forecast");

// ✅ API Details
const WEATHER_API_ENDPOINT = "https://api.weatherapi.com/v1/current.json?key=";
const API_KEY = "629c023dfca94736b2415335252402";

// ✅ Function to search weather by location
function findUserLocation() {
    const location = userLocation.value.trim();

    if (location === "") {
        showError("Please enter a location");
        return;
    }

    const url = `${WEATHER_API_ENDPOINT}${API_KEY}&q=${location}&units=metric`;

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Invalid location`);
            }
            return response.json();
        })
        .then((data) => {
            hideError(); // ✅ Hide error message on success
            console.log(data);

            city.innerHTML = `${data.location.name}, ${data.location.country}`;
            weatherIcon.style.background = `url(${data.current.condition.icon})`;
            temperature.innerHTML = `${data.current.temp_c}°C`;
            feelsLike.innerHTML = `Feels like ${data.current.feelslike_c}°C`;
            description.innerHTML = `<i class="fa-brands fa-cloudversify"></i> &nbsp ${data.current.condition.text}`;

            HValue.innerHTML = `${data.current.humidity}%`;
            WValue.innerHTML = `${data.current.wind_kph} km/h`;
            CValue.innerHTML = `${data.current.cloud}%`;
            UVValue.innerHTML = `${data.current.uv}`;
            PValue.innerHTML = `${data.current.pressure_mb} hPa`;

            // ✅ Display date and time
            const currentDate = new Date();
            const options = { weekday: 'long', month: 'long', day: 'numeric' };
            const formattedDate = currentDate.toLocaleDateString('en-US', options);

            const hours = currentDate.getHours() % 12 || 12;
            const minutes = String(currentDate.getMinutes()).padStart(2, '0');
            const ampm = currentDate.getHours() >= 12 ? 'PM' : 'AM';
            const formattedTime = `${hours}:${minutes} ${ampm}`;

            const finalDate = `${formattedDate} at ${formattedTime}`;
            date.innerHTML = `${finalDate}`;
        })
        .catch((error) => {
            showError("Please enter a valid location");
            console.error("Error:", error);
        });
}

// ✅ Function to get sunrise and sunset
function getSunriseSunset() {
    const location = userLocation.value.trim();

    if (location === "") {
        showError("Please enter a location");
        return;
    }

    const url = `https://api.weatherapi.com/v1/astronomy.json?key=${API_KEY}&q=${location}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Invalid location`);
            }
            return response.json();
        })
        .then(data => {
            hideError();
            SRValue.innerHTML = `${data.astronomy.astro.sunrise}`;
            SSValue.innerHTML = `${data.astronomy.astro.sunset}`;
        })
        .catch(error => {
            showError("Please enter a valid location");
            console.error("Error:", error);
        });
}

// ✅ Functions to show/hide error messages
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
}

function hideError() {
    errorMessage.style.display = "none";
}
