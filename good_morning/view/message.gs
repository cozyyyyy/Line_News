function messageAboutNews(news, weather) {
  let weatherMessage = 'おはよう！今日の天気予報だよ！'
  + '\n天気：' + weather[1]
  + '\n最低気温：' + weather[2]
  + '\n最高気温：' + weather[3]

  let newsMessage = '今日のニュースだよ！'
  + '\n・' + news[0][0] + '\n  ' + news[0][1]
  + '\n・' + news[1][0] + '\n  ' + news[1][1]
  + '\n・' + news[2][0] + '\n  ' + news[2][1]

  message = weatherMessage + '\n\n' + newsMessage

  return message;
}
