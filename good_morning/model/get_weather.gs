function getWeather() {
  const API_Data = JSON.parse(UrlFetchApp.fetch("https://weather.tsukumijima.net/api/forecast/city/230010").getContentText());
  let WeatherData = [];
  WeatherData[0] = API_Data["forecasts"][0]["date"] //予報日
  WeatherData[1] = API_Data["forecasts"][0]["telop"] //天気
  WeatherData[2] = API_Data["forecasts"][0]["temperature"]["min"]["celsius"] //最低気温
  WeatherData[3] = API_Data["forecasts"][0]["temperature"]["max"]["celsius"] //最高気温
  return WeatherData
}