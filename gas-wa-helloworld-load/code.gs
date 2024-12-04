function doGet() {

  let tmp = HtmlService.createTemplateFromFile("page");
  tmp.title = "Hello World";
  tmp.name = "Stranger";
  return tmp.evaluate();

}

function userClicked(username) {

  Logger.log("Hello World: " + username);

}

function include(filename) {

  return HtmlService.createHtmlOutputFromFile(filename).getContent();

}