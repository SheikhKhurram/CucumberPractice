package MyRunner;

import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;



@RunWith(Cucumber.class)
@CucumberOptions(
<<<<<<< HEAD
		features = "D:\\workspace\\SeleniumTutorial\\CucumberProject\\src\\main\\java\\Features\\DealFreeCrm.feature"
		,glue  = {"StepDefinationFile"}	
		,plugin = {"pretty" , "html:test-output"}
		,dryRun = false
		,monochrome = true		
=======
		features = "C:\\Users\\khurram\\eclipse-workspace\\CucumberPractice\\CucumberPractice\\src\\main\\java\\Features"
		,glue  = {"StepDefinationFile"}	
		,plugin = {"pretty" , "html:test-output"}
		, monochrome = true //making concole output as pretty formate  
        , dryRun = true //checking the mapping between feature file and step defination file 
>>>>>>> 8957e3747aef6caa558fd9b499be6e9e1c94ecbc
		)


public class TestRunner 
{
     
	
	
}


