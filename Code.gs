function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('ひめのキラキラ・キャッチ')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function saveScore(score) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('スコア') || ss.insertSheet('スコア');
    var now = new Date();
    sheet.appendRow([now, score]);
    return { success: true };
  } catch (e) {
    return { success: false, error: e.message };
  }
}
