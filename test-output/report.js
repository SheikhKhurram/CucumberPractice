<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/workspace/SeleniumTutorial/CucumberProject/src/main/java/Features/DealFreeCrm.feature");
formatter.feature({
  "line": 1,
  "name": "Adding deals",
  "description": "",
  "id": "adding-deals",
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login action",
  "description": "",
  "id": "login-action",
>>>>>>> 8957e3747aef6caa558fd9b499be6e9e1c94ecbc
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
<<<<<<< HEAD
  "name": "Adding new deals",
  "description": "",
  "id": "adding-deals;adding-new-deals",
=======
  "name": "Successful login with valid credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
>>>>>>> 8957e3747aef6caa558fd9b499be6e9e1c94ecbc
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
<<<<<<< HEAD
  "line": 5,
  "name": "navigate to vaid URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter the un and psw",
  "rows": [
    {
      "cells": [
        "sheik.kurram93@gmail.com",
        "Khurram@12"
      ],
      "line": 7
    }
  ],
  "keyword": "Then "
=======
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
>>>>>>> 8957e3747aef6caa558fd9b499be6e9e1c94ecbc
});
formatter.step({
  "line": 8,
  "name": "click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
<<<<<<< HEAD
  "name": "click on deal page",
=======
  "name": "Choose the forget password",
>>>>>>> 8957e3747aef6caa558fd9b499be6e9e1c94ecbc
  "keyword": "Then "
});
formatter.step({
  "line": 10,
<<<<<<< HEAD
  "name": "click on new deal",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "filling all madatory deatails",
  "rows": [
    {
      "cells": [
        "BigDeal",
        "Big deal of amazon"
      ],
      "line": 12
    },
    {
      "cells": [
        "fantasticDeal",
        "Fantastic deal of flipkart"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DealPageStepDefination.navigate_to_vaid_URL()"
});
formatter.result({
  "duration": 9482246153,
  "status": "passed"
});
formatter.match({
  "location": "DealPageStepDefination.enter_the_un_and_psw(DataTable)"
});
formatter.result({
  "duration": 346200015,
  "status": "passed"
});
formatter.match({
  "location": "DealPageStepDefination.click_on_sign_in_button()"
});
formatter.result({
  "duration": 95877071,
  "status": "passed"
});
formatter.match({
  "location": "DealPageStepDefination.click_on_deal_page()"
});
formatter.result({
  "duration": 1460057492,
  "status": "passed"
});
formatter.match({
  "location": "DealPageStepDefination.click_on_new_deal()"
});
formatter.result({
  "duration": 212214035,
  "status": "passed"
});
formatter.match({
  "location": "DealPageStepDefination.filling_all_madatory_deatails(DataTable)"
});
formatter.result({
  "duration": 866559300,
  "status": "passed"
=======
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
>>>>>>> 8957e3747aef6caa558fd9b499be6e9e1c94ecbc
});
});