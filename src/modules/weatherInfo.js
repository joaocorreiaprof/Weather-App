function weatherInfo(data) {
  const currentHumidity = document.querySelector(".currentHumidity");
  const currentPrecip = document.querySelector(".currentPrecip");
  const currentUv = document.querySelector(".currentUv");
  const currentWindDirection = document.querySelector(".currentWindDirection");
  const currentWindKph = document.querySelector(".currentWindKph");

  currentHumidity.innerHTML = data.current.humidity;
  currentPrecip.innerHTML = data.current.precip_mm;
  currentUv.innerHTML = data.current.uv;
  currentWindDirection.innerHTML = data.current.wind_dir;
  currentWindKph.innerHTML = data.current.wind_kph;
}

export { weatherInfo };
