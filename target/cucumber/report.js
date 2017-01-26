$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GET_PostcodeSearch.feature");
formatter.feature({
  "line": 1,
  "name": "GET Request: Search for a postcode",
  "description": "",
  "id": "get-request:-search-for-a-postcode",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Postcode requests should return correct addresses",
  "description": "",
  "id": "get-request:-search-for-a-postcode;postcode-requests-should-return-correct-addresses",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I enter \"\u003cpostcodes\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "response should show \"\u003ccountry\u003e\" and \"\u003cregion\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "get-request:-search-for-a-postcode;postcode-requests-should-return-correct-addresses;",
  "rows": [
    {
      "cells": [
        "postcodes",
        "country",
        "region"
      ],
      "line": 9,
      "id": "get-request:-search-for-a-postcode;postcode-requests-should-return-correct-addresses;;1"
    },
    {
      "cells": [
        "SW1A0AA",
        "England",
        "London"
      ],
      "line": 10,
      "id": "get-request:-search-for-a-postcode;postcode-requests-should-return-correct-addresses;;2"
    },
    {
      "cells": [
        "M160RA",
        "England",
        "North West"
      ],
      "line": 11,
      "id": "get-request:-search-for-a-postcode;postcode-requests-should-return-correct-addresses;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 555312587,
  "status": "passed"
});
formatter.before({
  "duration": 444492,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Postcode requests should return correct addresses",
  "description": "",
  "id": "get-request:-search-for-a-postcode;postcode-requests-should-return-correct-addresses;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I enter \"SW1A0AA\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "response should show \"England\" and \"London\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SW1A0AA",
      "offset": 9
    }
  ],
  "location": "PostCodeSearch.I_enter_postcode(String)"
});
formatter.result({
  "duration": 1154925896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "England",
      "offset": 22
    },
    {
      "val": "London",
      "offset": 36
    }
  ],
  "location": "PostCodeSearch.response_should_show(String,String)"
});
formatter.result({
  "duration": 552057239,
  "status": "passed"
});
formatter.before({
  "duration": 489729,
  "status": "passed"
});
formatter.before({
  "duration": 442932,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Postcode requests should return correct addresses",
  "description": "",
  "id": "get-request:-search-for-a-postcode;postcode-requests-should-return-correct-addresses;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I enter \"M160RA\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "response should show \"England\" and \"North West\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "M160RA",
      "offset": 9
    }
  ],
  "location": "PostCodeSearch.I_enter_postcode(String)"
});
formatter.result({
  "duration": 162139358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "England",
      "offset": 22
    },
    {
      "val": "North West",
      "offset": 36
    }
  ],
  "location": "PostCodeSearch.response_should_show(String,String)"
});
formatter.result({
  "duration": 34434221,
  "status": "passed"
});
formatter.uri("POST_BulkSearch.feature");
formatter.feature({
  "line": 1,
  "name": "POST Request: Bulk lookup postcodes",
  "description": "",
  "id": "post-request:-bulk-lookup-postcodes",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "If I supply a bunch of postcodes",
  "description": "",
  "id": "post-request:-bulk-lookup-postcodes;if-i-supply-a-bunch-of-postcodes",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I enter \"\u003cpostcode1\u003e\",\"\u003cpostcode2\u003e\",\"\u003cpostcode3\u003e\"",
  "keyword": "Given "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "post-request:-bulk-lookup-postcodes;if-i-supply-a-bunch-of-postcodes;",
  "rows": [
    {
      "cells": [
        "postcode1",
        "postcode2",
        "postcode3"
      ],
      "line": 9,
      "id": "post-request:-bulk-lookup-postcodes;if-i-supply-a-bunch-of-postcodes;;1"
    },
    {
      "cells": [
        "NW14NR",
        "W22UH",
        "BD71AJ"
      ],
      "line": 10,
      "id": "post-request:-bulk-lookup-postcodes;if-i-supply-a-bunch-of-postcodes;;2"
    },
    {
      "cells": [
        "M113FF",
        "NW88QN",
        "EC2R8AH"
      ],
      "line": 11,
      "id": "post-request:-bulk-lookup-postcodes;if-i-supply-a-bunch-of-postcodes;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 458045,
  "status": "passed"
});
formatter.before({
  "duration": 296409,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "If I supply a bunch of postcodes",
  "description": "",
  "id": "post-request:-bulk-lookup-postcodes;if-i-supply-a-bunch-of-postcodes;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I enter \"NW14NR\",\"W22UH\",\"BD71AJ\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "NW14NR",
      "offset": 9
    },
    {
      "val": "W22UH",
      "offset": 18
    },
    {
      "val": "BD71AJ",
      "offset": 26
    }
  ],
  "location": "BulkSearch.I_Enter_Postcodes(String,String,String)"
});
formatter.result({
  "duration": 188927426,
  "status": "passed"
});
formatter.before({
  "duration": 1040319,
  "status": "passed"
});
formatter.before({
  "duration": 405905,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "If I supply a bunch of postcodes",
  "description": "",
  "id": "post-request:-bulk-lookup-postcodes;if-i-supply-a-bunch-of-postcodes;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I enter \"M113FF\",\"NW88QN\",\"EC2R8AH\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "M113FF",
      "offset": 9
    },
    {
      "val": "NW88QN",
      "offset": 18
    },
    {
      "val": "EC2R8AH",
      "offset": 27
    }
  ],
  "location": "BulkSearch.I_Enter_Postcodes(String,String,String)"
});
formatter.result({
  "duration": 171166192,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Correct addresses should be returned",
  "description": "",
  "id": "post-request:-bulk-lookup-postcodes;correct-addresses-should-be-returned",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I should get \"\u003cregion1\u003e\",\"\u003cregion2\u003e\",\"\u003cregion3\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "post-request:-bulk-lookup-postcodes;correct-addresses-should-be-returned;",
  "rows": [
    {
      "cells": [
        "region1",
        "region2",
        "region3"
      ],
      "line": 19,
      "id": "post-request:-bulk-lookup-postcodes;correct-addresses-should-be-returned;;1"
    },
    {
      "cells": [
        "London",
        "London",
        "Yorkshire and The Humber"
      ],
      "line": 20,
      "id": "post-request:-bulk-lookup-postcodes;correct-addresses-should-be-returned;;2"
    },
    {
      "cells": [
        "London",
        "North West",
        "London"
      ],
      "line": 21,
      "id": "post-request:-bulk-lookup-postcodes;correct-addresses-should-be-returned;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 515180,
  "status": "passed"
});
formatter.before({
  "duration": 747473,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Correct addresses should be returned",
  "description": "",
  "id": "post-request:-bulk-lookup-postcodes;correct-addresses-should-be-returned;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I should get \"London\",\"London\",\"Yorkshire and The Humber\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 14
    },
    {
      "val": "London",
      "offset": 23
    },
    {
      "val": "Yorkshire and The Humber",
      "offset": 32
    }
  ],
  "location": "BulkSearch.I_Should_Get_Correct_Addresses(String,String,String)"
});
formatter.result({
  "duration": 46887002,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nJSON path result[0].result.region doesn\u0027t match.\nExpected: London\n  Actual: North West\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:60)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:235)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:471)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:636)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\n\tat io.restassured.internal.ResponseSpecificationImpl.content(ResponseSpecificationImpl.groovy:265)\n\tat io.restassured.specification.ResponseSpecification$content$0.callCurrent(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:248)\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:268)\n\tat StepDefinitions.BulkSearch.I_Should_Get_Correct_Addresses(BulkSearch.java:47)\n\tat ✽.Then I should get \"London\",\"London\",\"Yorkshire and The Humber\"(POST_BulkSearch.feature:15)\n",
  "status": "failed"
});
formatter.before({
  "duration": 1019604,
  "status": "passed"
});
formatter.before({
  "duration": 958221,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Correct addresses should be returned",
  "description": "",
  "id": "post-request:-bulk-lookup-postcodes;correct-addresses-should-be-returned;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I should get \"London\",\"North West\",\"London\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 14
    },
    {
      "val": "North West",
      "offset": 23
    },
    {
      "val": "London",
      "offset": 36
    }
  ],
  "location": "BulkSearch.I_Should_Get_Correct_Addresses(String,String,String)"
});
formatter.result({
  "duration": 18911401,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nJSON path result[0].result.region doesn\u0027t match.\nExpected: London\n  Actual: North West\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:471)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:636)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\n\tat io.restassured.internal.ResponseSpecificationImpl.content(ResponseSpecificationImpl.groovy:265)\n\tat io.restassured.specification.ResponseSpecification$content$0.callCurrent(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:248)\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:268)\n\tat StepDefinitions.BulkSearch.I_Should_Get_Correct_Addresses(BulkSearch.java:47)\n\tat ✽.Then I should get \"London\",\"North West\",\"London\"(POST_BulkSearch.feature:15)\n",
  "status": "failed"
});
});