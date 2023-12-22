$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/signup.feature");
formatter.feature({
  "name": "Signup with credentials",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Signup",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launch chromebrowser",
  "keyword": "Given "
});
formatter.step({
  "name": "User opens URL \"https://www.swiggy.com\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click on signup",
  "keyword": "And "
});
formatter.step({
  "name": "User enters phone as \"\u003cphonenumber\u003e\",name as \"\u003cusername\u003e\" and email as \"\u003cemailid\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on continue",
  "keyword": "And "
});
formatter.step({
  "name": "Page title should be \"Order food online from India\u0027s best food delivery service. Order from restaurants near you\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "phonenumber",
        "username",
        "emailid"
      ]
    },
    {
      "cells": [
        "9090909090",
        "Shruthi123",
        "shruthi@gmail.com"
      ]
    },
    {
      "cells": [
        "9999999999",
        "Shruthi124",
        "manjesh@gmail.com"
      ]
    },
    {
      "cells": [
        "8080808080",
        "Shruthi125",
        "shruthima@gmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Signup",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launch chromebrowser",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepspro.launchbrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://www.swiggy.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepspro.openurl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on signup",
  "keyword": "And "
});
formatter.match({
  "location": "Stepspro.signupclick()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters phone as \"9090909090\",name as \"Shruthi123\" and email as \"shruthi@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepspro.enteringdetails(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on continue",
  "keyword": "And "
});
formatter.match({
  "location": "Stepspro.cont()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title should be \"Order food online from India\u0027s best food delivery service. Order from restaurants near you\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepspro.titlepage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepspro.close()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Signup",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launch chromebrowser",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepspro.launchbrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://www.swiggy.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepspro.openurl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on signup",
  "keyword": "And "
});
formatter.match({
  "location": "Stepspro.signupclick()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters phone as \"9999999999\",name as \"Shruthi124\" and email as \"manjesh@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepspro.enteringdetails(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on continue",
  "keyword": "And "
});
formatter.match({
  "location": "Stepspro.cont()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title should be \"Order food online from India\u0027s best food delivery service. Order from restaurants near you\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepspro.titlepage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepspro.close()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Signup",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launch chromebrowser",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepspro.launchbrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://www.swiggy.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepspro.openurl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on signup",
  "keyword": "And "
});
formatter.match({
  "location": "Stepspro.signupclick()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters phone as \"8080808080\",name as \"Shruthi125\" and email as \"shruthima@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepspro.enteringdetails(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on continue",
  "keyword": "And "
});
formatter.match({
  "location": "Stepspro.cont()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title should be \"Order food online from India\u0027s best food delivery service. Order from restaurants near you\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepspro.titlepage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepspro.close()"
});
formatter.result({
  "status": "passed"
});
});