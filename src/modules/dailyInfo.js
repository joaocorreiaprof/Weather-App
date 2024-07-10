function displayDailyInfo(data) {
  const currentRegion = document.querySelector(".currentRegion");
  const currentCountry = document.querySelector(".currentCountry");
  const currentTime = document.querySelector(".currentTime");

  currentRegion.innerHTML = data.location.region;
  currentCountry.innerHTML = data.location.country;
  currentTime.innerHTML = data.location.localtime;
}

export { displayDailyInfo };
