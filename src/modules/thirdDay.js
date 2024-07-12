function thirdDay(thirdDayInfo) {
  const thirdDate = document.querySelector(".third-date");
  const thirdCondition = document.querySelector(".third-condition");
  const thirdIcon = document.querySelector(".thirdApiIcon");
  const thirdTemperature = document.querySelector(".third-temperature");
  const thirdChanceRain = document.querySelector(".third-chance-rain");

  thirdDate.innerHTML = thirdDayInfo.date;

  thirdCondition.innerHTML = thirdDayInfo.day.condition.text;

  const thirdIconUrl = thirdDayInfo.day.condition.icon;
  thirdIcon.src = `https:${thirdIconUrl}`;

  thirdTemperature.innerHTML = thirdDayInfo.day.avgtemp_c + " °C";

  thirdChanceRain.innerHTML =
    "Chance of rain: " + thirdDayInfo.day.daily_chance_of_rain + "%";
}
export { thirdDay };
