$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/workspace/SeleniumTutorial/CucumberProject/src/main/java/Features/DealFreeCrm.feature");
formatter.feature({
  "line": 1,
  "name": "Adding deals",
  "description": "",
  "id": "adding-deals",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Adding new deals",
  "description": "",
  "id": "adding-deals;adding-new-deals",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
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
});
formatter.step({
  "line": 8,
  "name": "click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
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
});
});