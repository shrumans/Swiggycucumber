package pageobj;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Signuppage {

public  WebDriver ldriver;
	
	public Signuppage(WebDriver rdriver) {
		ldriver=rdriver;
		PageFactory.initElements(rdriver, this);
	}

	@FindBy(linkText="Sign up")
    WebElement signup;
	
	@FindBy(name="mobile")
    WebElement phonenumb;
	
	@FindBy(xpath="//input[@name='name']")
    WebElement name;
	
	@FindBy(xpath="//input[@name='email']")
    WebElement email;
	
	@FindBy(className="a-ayg")
    WebElement loginclk;
	
	public void signupclk() {
		signup.click();
	}
	
	public void setphoneno(String phoneno) {
		phonenumb.clear();
		phonenumb.sendKeys(phoneno);
	}

	public void setname(String uname) {
		name.clear();
		name.sendKeys(uname);
	}
	
	public void setemail(String mailid) {
		email.clear();
		email.sendKeys(mailid);
	}
	
	public void login() {
		loginclk.click();
	}
	
}
