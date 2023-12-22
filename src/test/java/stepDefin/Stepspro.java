package stepDefin;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pageobj.Signuppage;

public class Stepspro {

	
	public WebDriver driver;
	public Signuppage sg;
	
	@Given("User launch chromebrowser")
	public void launchbrowser(){
		System.setProperty("webdriver.chrome.driver","C://driver//chromedriver.exe");
		driver= new ChromeDriver();
		sg=new Signuppage(driver);
	}
	
	@When("User opens URL {string}")
	public void openurl(String url){
		driver.get(url);
	}
	
	@And("Click on signup")
	public void signupclick(){
		sg.signupclk();
	}
	
	@And("User enters phone as {string},name as {string} and email as {string}")
	public void enteringdetails(String phone,String name, String mailid){
		sg.setphoneno(phone);
		sg.setname(name);
		sg.setemail(mailid);
	}
	
	@And("Click on continue")
	public void cont(){
		sg.login();
	}
	
	@Then("Page title should be {string}")
	public void titlepage(String exp){
		
		String act=driver.getTitle();
		Assert.assertEquals(act, exp);
	}
	
	@And("Close browser")
	public void close(){
		driver.quit();
	}
	
}
