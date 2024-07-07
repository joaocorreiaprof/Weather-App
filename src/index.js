import "./style.css";

const searchButton = document.getElementById("searchButton");

async function fetchWeather(searchTerm = "aveiro") {
  let link = `https://api.weatherapi.com/v1/current.json?key=6faa5075dd9445cfb4c215331240207&q=${searchTerm}`;

  try {
    let response = await fetch(link, { mode: "cors" });
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching the weather:", error);
  }
}

fetchWeather();

searchButton.addEventListener("click", () => {
  const userInput = document.getElementById("search").value;
  fetchWeather(userInput);
});
