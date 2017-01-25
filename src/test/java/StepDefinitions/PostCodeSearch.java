package StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.RestAssured;
import io.restassured.response.Response;

import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

public class PostCodeSearch {
	
	private Response response;
	
	@Given("^I enter \"([^\"]*)\"$")
	public void I_enter_postcode(String postcodes){
		RestAssured.useRelaxedHTTPSValidation();
	    response=given().
	            contentType("application/json")
	            .when()
	            .get("https://api.postcodes.io/postcodes/"+postcodes)
	            .prettyPeek();  
	}

	@Then("^response should show \"([^\"]*)\" and \"([^\"]*)\"$")
	public void response_should_show(String country, String region){
	   	  response
	   	  .then()
	   	  .body("result.country",equalTo(country))
	   	  .body("result.region", equalTo(region))
	   	 .statusCode(200);
	}
}
