function doGet() {

  let tmp = HtmlService.createTemplateFromFile("page");
  tmp.title = "Hello World";
  tmp.email = getEmail();
  tmp.groups = getGroups();
  return tmp.evaluate();

}

function include(filename) {

  return HtmlService.createHtmlOutputFromFile(filename).getContent();

}

function getGroups() {
  return GroupsApp.getGroups();
}


function getEmail() {
  return Session.getActiveUser().getEmail();
}