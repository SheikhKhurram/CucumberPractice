package MyRunner;

import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;



@RunWith(Cucumber.class)
@CucumberOptions(
		features = "D:\\workspace\\SeleniumTutorial\\CucumberProject\\src\\main\\java\\Features\\login.feature"
		,glue  = {"StepDefinationFile"}	
		)

public class TestRunner 
{
     
	
	
}
