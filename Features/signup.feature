Feature: Signup with credentials 

Scenario: Signup

Given User launch chromebrowser
When User opens URL "https://www.swiggy.com"
And Click on signup
And User enters phone as "9090909090",name as "shruthi" and email as "shruthi@gmail.com"
And Click on continue
Then Page title should be "Order food online from India's best food delivery service. Order from restaurants near you"
And Close browser