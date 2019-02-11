Feature: Login action

Scenario: Successful login with valid credentials
		 Given navigate to valid URL  
		 When validate the login page title 
		 And enter the valid username and click on next 
		 And enter the valid password 
		 And click on sign in button
		 Then Choose the forget password
		 Then validate the homepage title
		 

		 
