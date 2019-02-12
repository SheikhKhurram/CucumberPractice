Feature: Login and adding the contact 

Scenario Outline: Successful adding the new contact 
				 Given navigate to URL 
				 When add the login "<username>" and "<password>" 
				 Then click on contact and click on new  
				 Then add the contact "<firstname>" and "<lastname>"
				 And click on save button 
				 Then close the browser 

Examples:

|username                |password  |firstname|lastname|
|sheik.kurram93@gmail.com|Khurram@12|sheikh   |khurram |
|sheik.kurram93@gmail.com|Khurram@12|Maltesh  | KR     |				 
