package features;

import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

@RunWith(CucumberWithSerenity.class)
//@CucumberOptions(features="src/test/resources/features/",plugin={"pretty","html:target/cucumber"})
@CucumberOptions(features="src/test/resources/features/")
public class CukesRunner {

}
