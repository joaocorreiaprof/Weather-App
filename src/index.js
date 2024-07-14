import "./style.css";
import { fetchWeather } from "./modules/fetchWeather";
import { displayImages } from "./modules/newsImages";
import { updateTime } from "./modules/clockWidget";

displayImages();
fetchWeather();
setInterval(updateTime, 1000);
updateTime();

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => {
  const userInput = document.getElementById("search").value;
  fetchWeather(userInput);
});
