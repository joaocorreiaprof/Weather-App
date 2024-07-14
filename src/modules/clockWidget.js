export function updateTime() {
  const timeWidget = document.getElementById("timeWidget");
  const currentHourTemperature = document.querySelector(
    ".current-hour-temperature"
  );

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  timeWidget.textContent = `${hours}:${minutes}:${seconds}`;

  currentHourTemperature;
}
