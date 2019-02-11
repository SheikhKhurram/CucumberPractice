package MyRunner;

import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;



@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\khurram\\eclipse-workspace\\CucumberPractice\\CucumberPractice\\src\\main\\java\\Features"
		,glue  = {"StepDefinationFile"}	
		,plugin = {"pretty" , "html:test-output"}
		, monochrome = true //making concole output as pretty formate  
        , dryRun = true //checking the mapping between feature file and step defination file 
		)

public class TestRunner 
{
     
	
	
}


