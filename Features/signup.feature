Feature: Signup with credentials 

Scenario Outline: Signup

Given User launch chromebrowser
When User opens URL "https://www.swiggy.com"
And Click on signup
And User enters phone as "<phonenumber>",name as "<username>" and email as "<emailid>"
And Click on continue
Then Page title should be "Order food online from India's best food delivery service. Order from restaurants near you"
And Close browser

 Examples:
|phonenumber	|username  	 |emailid            |
|9090909090  	|Shruthi123  |shruthi@gmail.com  |
|9999999999   |Shruthi124  |manjesh@gmail.com  |
|8080808080   |Shruthi125  |shruthima@gmail.com|
 