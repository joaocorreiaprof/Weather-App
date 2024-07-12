function secondDay(nextDayInfo) {
  const secondDate = document.querySelector(".second-date");
  const secondCondition = document.querySelector(".second-condition");
  const secondIcon = document.querySelector(".secondApiIcon");
  const secondTemperature = document.querySelector(".second-temperature");
  const secondChanceRain = document.querySelector(".second-chance-rain");

  secondDate.innerHTML = nextDayInfo.date;

  secondCondition.innerHTML = nextDayInfo.day.condition.text;

  const secondIconUrl = nextDayInfo.day.condition.icon;
  secondIcon.src = `https:${secondIconUrl}`;

  secondTemperature.innerHTML = nextDayInfo.day.avgtemp_c + " °C";

  secondChanceRain.innerHTML =
    "Chance of rain: " + nextDayInfo.day.daily_chance_of_rain + "%";
}

export { secondDay };
