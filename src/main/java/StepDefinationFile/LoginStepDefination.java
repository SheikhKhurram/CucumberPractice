package StepDefinationFile;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

import org.junit.Assert;

public class LoginStepDefination {
	

	public static WebDriver driver;
	
	static 
	{
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}
	
	@Given("^navigate to valid URL$")
	public void navigate_to_valid_URL() 
	{
	  driver.get("https://www.wrike.com/login");
		
	}

	@When("^validate the login page title$")
	public void validate_the_login_page_title()
	{
	 String actual = driver.getTitle();
        Assert.assertEquals("Sign in to your Wrike account", actual);
	}

	@When("^enter the valid username and click on next$")
	public void enter_the_valid_username_and_click_on_next()
	{
		 driver.findElement(By.id("login-input-id")).sendKeys("sheik.kurram93@gmail.com");  
		 driver.findElement(By.xpath("//div[text() = 'Next']")).click();
	}

	@When("^enter the valid password$")
	public void enter_the_valid_password()  
	{
	     driver.findElement(By.xpath("//input[@type = 'password']")).sendKeys("Khurram@12");

	}

	@When("^click on sign in button$")
	public void click_on_sign_in_button() 
	{
	     driver.findElement(By.xpath("//div[text() = 'Sign in']")).click();       
	}
    
	@Then ("^Choose the forget password$")
	public void Choose_the_forget_password()
	{
		driver.findElement(By.xpath("//div[text() = 'Forget']")).click();
	}
	
	@Then ("^validate the homepage title$")
	public void validate_the_homepage_title()
	{
		String expected = "Wrike Workspace";
		Assert.assertEquals( expected , driver.getTitle());
	}
	

}
