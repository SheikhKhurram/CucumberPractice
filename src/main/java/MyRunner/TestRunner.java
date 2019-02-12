package MyRunner;

import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;



@RunWith(Cucumber.class)
@CucumberOptions(
		features = "D:\\workspace\\SeleniumTutorial\\CucumberProject\\src\\main\\java\\Features\\DealFreeCrm.feature"
		,glue  = {"StepDefinationFile"}	
		,plugin = {"pretty" , "html:test-output"}
		,dryRun = false
		,monochrome = true		
		)


public class TestRunner 
{
     
	
	
}
