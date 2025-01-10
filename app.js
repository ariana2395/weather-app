const apiKey = "762496dc337e56bd5e82f317783a6de3"; 
// Replace with your OpenWeatherMap API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

// Function to fetch weather data
async function getWeather(city) {
    const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`; // Metric for temperature in Celsius

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found! Please try again.");
        } else {
            displayWeather(data);
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Function to display weather data on the page
function displayWeather(data) {
    const cityName = document.getElementById("cityName");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
    const humidity = document.getElementById("humidity");

    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `Temperature: ${data.main.temp} °C`;
    description.textContent = `Weather: ${data.weather[0].description}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
}

// Add event listener to the button
document.getElementById("getWeatherBtn").addEventListener("click", () => {
    const cityInput = document.getElementById("cityInput").value;
    if (cityInput) {
        getWeather(cityInput);
    } else {
        alert("Please enter a city.");
    }
});
