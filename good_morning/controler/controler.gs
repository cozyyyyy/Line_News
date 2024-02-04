function main() {
  let day = getTodayDate();
  let newsList = readSpreadSheet(day);
  let weatherDataList = getWeather()
  let message = messageAboutNews(newsList, weatherDataList);
  contactLine(message);
}
