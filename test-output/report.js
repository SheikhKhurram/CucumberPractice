$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Successful login with valid credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "navigate to valid URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "validate the login page title",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "enter the valid username and click on next",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "enter the valid password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Choose the forget password",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "validate the homepage title",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.navigate_to_valid_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.validate_the_login_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.enter_the_valid_username_and_click_on_next()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.enter_the_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.click_on_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.Choose_the_forget_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.validate_the_homepage_title()"
});
formatter.result({
  "status": "skipped"
});
});