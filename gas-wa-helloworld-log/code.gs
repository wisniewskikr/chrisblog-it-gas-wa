function doGet() {

  return HtmlService.createTemplateFromFile("page").evaluate();

}

function userClicked(username) {

  Logger.log("Hello World: " + username);

}

function include(filename) {

  return HtmlService.createHtmlOutputFromFile(filename).getContent();

}