import { displayDailyInfo } from "./dailyInfo";
import { currentDay } from "./currentDay";
import { secondDay } from "./secondDay";
import { thirdDay } from "./thirdDay";

async function fetchWeather(searchTerm = "aveiro") {
  let link = `https://api.weatherapi.com/v1/forecast.json?key=6faa5075dd9445cfb4c215331240207&q=${searchTerm}&days=3`;

  try {
    let response = await fetch(link, { mode: "cors" });
    let data = await response.json();
    console.log("Current day weather:", data);
    displayDailyInfo(data);

    currentDay(data);

    // Log information about the next day
    if (
      data.forecast &&
      data.forecast.forecastday &&
      data.forecast.forecastday.length > 1
    ) {
      let nextDayInfo = data.forecast.forecastday[1];
      console.log("Next day's weather:", nextDayInfo);
      secondDay(nextDayInfo);
    } else {
      console.log("No forecast data available for the next day.");
    }

    // Log information about the third day
    if (
      data.forecast &&
      data.forecast.forecastday &&
      data.forecast.forecastday.length > 2
    ) {
      let thirdDayInfo = data.forecast.forecastday[2];
      console.log("Third day's weather:", thirdDayInfo);
      thirdDay(thirdDayInfo);
    } else {
      console.log("No forecast data available for the third day.");
    }
  } catch (error) {
    console.error("Error fetching the weather:", error);
  }
}

export { fetchWeather };
