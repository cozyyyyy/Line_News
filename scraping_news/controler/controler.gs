function main() {
  const today = getTodayDate()
  const newsList = getNews(today)
  writeNews(newsList)
}
