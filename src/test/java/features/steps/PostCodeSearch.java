package features.steps;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import features.steps.serenity.ApiSteps;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import net.thucydides.core.annotations.Steps;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class PostCodeSearch {

	@Steps private ApiSteps api;
	private Response response;
	
	@Before
	public void setup(){
		RestAssured.useRelaxedHTTPSValidation();
	}
	
	@Given("^I enter \"([^\"]*)\"$")
	public void postcodeSentToApi(String postcodes){
		api.enterPostcode(postcodes);
	}

	@Then("^response should show \"([^\"]*)\" and \"([^\"]*)\"$")
	public void response_should_show(String country, String region){
		api.responseIsCorrect(country, region);
	   /*	  response
	   	  .then()
	   	  .body("result.country",equalTo(country))
	   	  .body("result.region", equalTo(region));*/
	}
}
