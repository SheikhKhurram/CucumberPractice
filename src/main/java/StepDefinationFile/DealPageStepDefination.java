package StepDefinationFile;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.github.bonigarcia.wdm.WebDriverManager;

public class DealPageStepDefination {

	public static WebDriver driver;

	@Given("^navigate to vaid URL$")
	public void navigate_to_vaid_URL() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

		driver.get("https://ui.cogmento.com");
	}

	@Then("^enter the un and psw$")
	public void enter_the_un_and_psw(DataTable credentials) {
		List<List<String>> loginValues = credentials.raw();
		driver.findElement(By.name("email")).sendKeys(loginValues.get(0).get(0));
		driver.findElement(By.name("password")).sendKeys(loginValues.get(0).get(1));

	}

	@Then("^click on sign in button$")
	public void click_on_sign_in_button() {
		driver.findElement(By.xpath("//div[text() = 'Login']")).click();
	}

	@Then("^click on deal page$")
	public void click_on_deal_page() {
		driver.findElement(By.xpath("//span[text() = 'Deals']")).click();

	}

	@Then("^click on new deal$")
	public void click_on_new_deal() {
		driver.findElement(By.xpath("//button[text() = 'New']")).click();
	}

	@Then("^filling all madatory deatails$")
	public void filling_all_madatory_deatails(DataTable dealDetails) {
		List<List<String>> details = dealDetails.raw();

		driver.findElement(By.name("title")).sendKeys(details.get(0).get(0));
		driver.findElement(By.name("description")).sendKeys(details.get(0).get(1));
		driver.findElement(By.xpath("//button[text() = 'Save']")).click();

	}

}
