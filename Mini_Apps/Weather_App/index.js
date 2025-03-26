document.addEventListener("DOMContentLoaded", () => {
  const weatherInfoButton = document.getElementById("weather-button");
  const cityInput = document.getElementById("city-name");

  const getWeatherData = async () => {
    const textInput = cityInput.value.trim();
    if (!textInput) {
      return;
    }
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${textInput}&APPID=a133d6c6dcd455ae2ea3dd79e1ffceb3`
    );
    const data = await response.json();
    console.log(data);
  };

  weatherInfoButton.addEventListener("click", getWeatherData);
});
