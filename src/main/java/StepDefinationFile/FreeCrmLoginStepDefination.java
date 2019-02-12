//package StepDefinationFile;
//
//import java.util.concurrent.TimeUnit;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import io.github.bonigarcia.wdm.WebDriverManager;
//
//public class FreeCrmLoginStepDefination {
//public static WebDriver driver;
//
//	@Given("^navigate to URL$")
//	public void navigate_to_URL() {
//		WebDriverManager.chromedriver().setup();
//		driver = new ChromeDriver();
//		driver.manage().window().maximize();
//		driver.manage().deleteAllCookies();
//		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
//	
//	    driver.get("https://ui.cogmento.com");
//	}
//
//	@When("^add the login \"([^\"]*)\" and \"([^\"]*)\"$")
//	public void add_the_login_and(String username, String password)
//	{
//	    driver.findElement(By.name("email")).sendKeys(username);  
//	    driver.findElement(By.name("password")).sendKeys(password);
//	    driver.findElement(By.xpath("//div[text() = 'Login']")).click();
//	}
//
//	@Then("^click on contact and click on new$")
//	public void click_on_contact_and_click_on_new() 
//	{
//	      driver.findElement(By.xpath("//span[text() = 'Contacts']")).click();
//	      driver.findElement(By.xpath("//button[text() = 'New']")).click();
//	}
//
//	@Then("^add the contact \"([^\"]*)\" and \"([^\"]*)\"$")
//	public void add_the_contact_and_and(String firstname, String lastname) 
//	{
//	        driver.findElement(By.name("first_name")).sendKeys(firstname);   
//	        driver.findElement(By.name("last_name")).sendKeys(lastname);
//	    
//	}
//
//	@Then("^click on save button$")
//	public void click_on_save_button() {
//	  
//		driver.findElement(By.xpath("//button[text() = 'Save']")).click();
//	}
//
//	@Then("^close the browser$")
//	public void close_the_browser()
//	{
//		driver.close();
//	  
//	}
//	
//	
//	
//	
//	
//	
//	
//	
//
//}
