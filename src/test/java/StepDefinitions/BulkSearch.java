package StepDefinitions;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.RestAssured;
import io.restassured.response.Response;

import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

import java.util.Arrays;

import org.json.JSONArray;
import org.json.JSONObject;

public class BulkSearch {
	
	private static Response response;

	@Before
	public void setup(){
		RestAssured.useRelaxedHTTPSValidation();
	}
	
	@Given("^I enter \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void I_Enter_Postcodes(String postcode1, String postcode2, String postcode3){
		String[] postcodes = {postcode1,postcode2,postcode3};
		
		JSONArray jsonArray=new JSONArray(Arrays.asList(postcodes));
		JSONObject jsonObject=new JSONObject();
		jsonObject.put("postcodes",jsonArray);
		
		response=given()
				.contentType("application/json")
				.body(jsonObject.toString())
				.when()
	            .post("https://api.postcodes.io/postcodes")
	            .prettyPeek();
	}

	@Then("^I should get \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void I_Should_Get_Correct_Addresses(String region1, String region2, String region3){
		response
	   	  .then()
	   	  .body("result[0].result.region",equalTo(region1))
	   	  .body("result[1].result.region",equalTo(region2))
	   	  .body("result[2].result.region",equalTo(region3));
	}
}
