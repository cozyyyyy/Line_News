function getTodayDate() {
  const d = new Date();

  //本日の日付を取得
  const year = d.getFullYear(); //年
  const month = d.getMonth()+1; //月
  const date = d.getDate(); //日
  const day = d.getDay(); //曜日
  const dayArray = ["日","月","火","水","木","金","土"]; //曜日の配列
  const today = year + "/" + month + "/" + date + "(" + dayArray[day] + ")";

  return today
  
}


function getNews(today) {
  let response = UrlFetchApp.fetch("https://news.yahoo.co.jp/");
  let text = response.getContentText("utf-8");
  let y
  // console.log(text);

  //トップニュースのブロックを抽出
  let topic_block = Parser.data(text).from('class="sc-cHcdSN hOWCHl"').to('</section>').build(); 
  console.log(topic_block);

  //トップニュースを抽出
  let content_block = Parser.data(topic_block).from('<ul>').to('</ul>').build();
  console.log(content_block);

  let newsList= new Array();

     topics = Parser.data(content_block).from('<a').to('</a>').iterate();

    for(news of topics){

      //配列内のインデックス番号+1を取得（ニュース掲載順位として利用）
      let newsRank = topics.indexOf(news) + 1;

      //URL取得
      let newsUrl = news.replace(/.*href="/,"").replace(/".*/,"");
      console.log(newsUrl);
      //タイトル取得
      let newsTitle = news.replace(/.*class="sc-dtLLSn dpehyt">/,"").replace(/<.*>/,"");

      // 各ニュースページからカテゴリを取得
        let newsResponse = UrlFetchApp.fetch(newsUrl);
        let newsText = newsResponse.getContentText("utf-8");

        let newsCategory = Parser.data(newsText).from('トピックス（').to('）').build();


      // ニュース順位、URL、タイトルの組を作成
      let newsInfo = [today ,newsRank, newsTitle, newsUrl, newsCategory];

      //ニュースリストに格納
      newsList.push(newsInfo);

   }

  return newsList;

}


