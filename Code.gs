
function doGet(e) {
  var callback = e && e.parameter
    ? e.parameter.callback
    : "";

  if (callback && !/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(callback)) {
    return ContentService.createTextOutput("Invalid callback");
  }

  var ss = SpreadsheetApp.getActiveSpreadsheet();

  var result = {
    players: readTab_(ss, "PLAYERS"),
    matches: readTab_(ss, "MATCHES"),
    gallery: readTab_(ss, "GALLERY")
  };

  var output = JSON.stringify(result);

  if (callback) {
    output = callback + "(" + output + ")";
    return ContentService.createTextOutput(output)
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }

  return ContentService.createTextOutput(output)
    .setMimeType(ContentService.MimeType.JSON);
}

function readTab_(ss, sheetName) {
  var sheet = ss.getSheetByName(sheetName);

  if (!sheet || sheet.getLastRow() < 2) {
    return [];
  }

  var values = sheet.getDataRange().getDisplayValues();
  var headers = values.shift();

  return values
    .filter(function(row) {
      return row.some(function(cell) {
        return cell !== "";
      });
    })
    .map(function(row) {
      var item = {};

      headers.forEach(function(header, index) {
        if (header) {
          item[header.trim()] = row[index];
        }
      });

      return item;
    })
    .filter(function(item) {
      return String(item.status || "").toUpperCase() !== "HIDDEN";
    });
}
