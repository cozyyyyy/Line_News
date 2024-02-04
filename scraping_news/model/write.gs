function writeNews(list){
  const id = '1soUvqVOE0Js0BPxZteK1_hEHkBNfzOqY87QuENcZfko'
  const ss = SpreadsheetApp.openById(id);
  let sheet = ss.getSheetByName('ニュース');

  // 書き込む位置を取得
  let startRow = sheet.getLastRow()+1;
  let row = list.length;
  let col = list[0].length;

  // 書き込み
  let addRange = sheet.getRange(startRow, 1, row, col);

  addRange.setValues(list);
}