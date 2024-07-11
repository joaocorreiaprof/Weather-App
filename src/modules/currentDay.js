function currentDay(data) {
  const currentMood = document.querySelector(".currentMood");
  const currentTemperature = document.querySelector(".currentTemperature");

  currentMood.innerHTML = data.current.is_day;

  const currentIcon = document.querySelector(".ApiIcon");
  const iconUrl = data.current.condition.icon;
  currentIcon.src = `https:${iconUrl}`;

  currentTemperature.innerHTML = data.current.temp_c + " °C";
}
export { currentDay };
