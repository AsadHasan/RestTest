package features.steps.serenity;

import io.restassured.response.Response;
import net.thucydides.core.annotations.Step;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

/**
 * Created by Asad.Hasan on 15/03/2017.
 */
public class ApiSteps {

    private Response response;

    @Step
    public void enterPostcode(String postcodes){
        response=given().
                contentType("application/json")
                .when()
                .get("https://api.postcodes.io/postcodes/"+postcodes)
                .prettyPeek();
    }

    @Step
    public void responseIsCorrect(String country, String region){
        response
                .then()
                .body("result.country",equalTo(country))
                .body("result.region", equalTo(region));
    }
}
