function currentDay(data) {
  const currentCityCountry = document.querySelector(".current-city-country");
  const currentCondition = document.querySelector(".current-condition");
  const currentTemperature = document.querySelector(".currentTemperature");
  const currentIcon = document.querySelector(".ApiIcon");
  const currentHumidity = document.querySelector(".currentHumidity");
  const currentWindKph = document.querySelector(".currentWindKph");

  currentCityCountry.innerHTML =
    data.location.region + ", " + data.location.country;

  currentCondition.innerHTML = data.current.condition.text;

  const iconUrl = data.current.condition.icon;
  currentIcon.src = `https:${iconUrl}`;

  currentTemperature.innerHTML = data.current.temp_c + " °C";

  currentHumidity.innerHTML = "Humidity: " + data.current.humidity + "%";

  currentWindKph.innerHTML = "Wind Speed: " + data.current.wind_kph + " kph";
}
export { currentDay };
