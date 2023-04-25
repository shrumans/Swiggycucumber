package testrunners;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions
(
features="Features//signup.feature",
glue="stepDefin",
dryRun=false,
monochrome=true,
plugin= {"pretty","html:test-output"}
		)

public class Testrunn {

}
