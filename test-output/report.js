$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/signup.feature");
formatter.feature({
  "name": "Signup with credentials",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Signup",
  "description": "",
  "keyword": "Scenario"
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
  "name": "User enters phone as \"9090909090\",name as \"shruthi\" and email as \"shruthi@gmail.com\"",
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