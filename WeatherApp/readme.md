# Weather App

A web-based Weather Application built using **HTML**, **CSS**, and **JavaScript**. It provides real-time weather information for any location along with additional details like humidity, wind speed, sunrise/sunset times, UV index, clouds, and pressure. The app uses the [WeatherAPI](https://www.weatherapi.com/) to fetch the data.

***

## 🚀 Features

- Search weather by city or location
- Display current temperature, feels like temperature, weather condition, and descriptive icon
- Shows detailed highlights including humidity, wind speed, sunrise & sunset time, cloud coverage, UV index, and atmospheric pressure
- Supports temperature unit display toggling between Celsius and Fahrenheit (UI element present, needs implementation)
- Responsive layout with clear separation of input and output areas
- Error message display for invalid locations

***

## 🛠️ How It Works

- User inputs location in the search box and clicks the search icon.
- The app fetches current weather and astronomy data asynchronously from the WeatherAPI using fetch requests.
- Current weather data includes temperature, humidity, wind speed, clouds, UV index, and pressure.
- Astronomy API provides sunrise and sunset times.
- Data is displayed dynamically in appropriate sections of the UI with icons from FontAwesome.
- The app also formats and displays the current date and time.

***

## 📂 File Structure

```
index.html       # Main HTML page
style.css        # CSS styles for layout and responsiveness
script.js        # JavaScript logic for fetching and displaying weather data
```

***

## 🏁 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- Internet connection (to fetch data from WeatherAPI)
- WeatherAPI key (Already included in your code; replace with your own for heavy usage)

### Run Locally

1. Clone or download the repository.

2. Open `index.html` in your preferred web browser.

3. Enter a location in the search box and click the search icon to get weather details.

***

## 🔗 Demo

Access the deployed weather app here:  
[Weather App](https://weatherrr-apppp.netlify.app/)

***

## 👤 Author

Created by Lalitendra.

**Enjoy checking the weather with this simple and functional Weather App!**
