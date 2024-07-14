function weatherPerHour(data) {
  const hourOneImage = document.querySelector(".weather-one");
  const temperatureOne = document.querySelector(".temperature-one");

  const hourTwoImage = document.querySelector(".weather-two");
  const temperatureTwo = document.querySelector(".temperature-two");

  const hourThreeImage = document.querySelector(".weather-three");
  const temperatureThree = document.querySelector(".temperature-three");

  const hourFourImage = document.querySelector(".weather-four");
  const temperatureFour = document.querySelector(".temperature-four");

  const hourFiveImage = document.querySelector(".weather-five");
  const temperatureFive = document.querySelector(".temperature-five");

  const oneUrl = data.forecast.forecastday[0].hour[7].condition.icon;
  hourOneImage.src = `https:${oneUrl}`;
  temperatureOne.innerHTML =
    data.forecast.forecastday[0].hour[7].temp_c + " °C";

  const twoUrl = data.forecast.forecastday[0].hour[10].condition.icon;
  hourTwoImage.src = `https:${twoUrl}`;
  temperatureTwo.innerHTML =
    data.forecast.forecastday[0].hour[10].temp_c + " °C";

  const threeUrl = data.forecast.forecastday[0].hour[12].condition.icon;
  hourThreeImage.src = `https:${threeUrl}`;
  temperatureThree.innerHTML =
    data.forecast.forecastday[0].hour[12].temp_c + " °C";

  const fourUrl = data.forecast.forecastday[0].hour[16].condition.icon;
  hourFourImage.src = `https:${fourUrl}`;
  temperatureFour.innerHTML =
    data.forecast.forecastday[0].hour[16].temp_c + " °C";

  const fiveUrl = data.forecast.forecastday[0].hour[21].condition.icon;
  hourFiveImage.src = `https:${fiveUrl}`;
  temperatureFive.innerHTML =
    data.forecast.forecastday[0].hour[21].temp_c + " °C";
}

export { weatherPerHour };
