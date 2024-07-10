import "./style.css";
import { fetchWeather } from "./modules/fetchWeather";
import { displayImages } from "./modules/newsImages";

displayImages();
fetchWeather();

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => {
  const userInput = document.getElementById("search").value;
  fetchWeather(userInput);
});
