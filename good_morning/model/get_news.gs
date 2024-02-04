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

function readSpreadSheet(day) {
  const id = '1soUvqVOE0Js0BPxZteK1_hEHkBNfzOqY87QuENcZfko'
  const ss = SpreadsheetApp.openById(id);
  let sheet = ss.getSheetByName('ニュース');

   //配列へシート全体を読み込む
  var values = sheet.getDataRange().getValues();
  let newsList= new Array();

  for(var i in values){
    if(values[i][0] == day){
      let newsTitle = values[i][2];
      let newsUrl = values[i][3];
      let newsInfo = [newsTitle, newsUrl];
      newsList.push(newsInfo);
    }
  }
  return newsList;
}
