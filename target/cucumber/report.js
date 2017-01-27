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
  "name": "Individual postcode request should return correct address",
  "description": "",
  "id": "get-request:-search-for-a-postcode;individual-postcode-request-should-return-correct-address",
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
  "id": "get-request:-search-for-a-postcode;individual-postcode-request-should-return-correct-address;",
  "rows": [
    {
      "cells": [
        "postcodes",
        "country",
        "region"
      ],
      "line": 9,
      "id": "get-request:-search-for-a-postcode;individual-postcode-request-should-return-correct-address;;1"
    },
    {
      "cells": [
        "SW1A0AA",
        "England",
        "London"
      ],
      "line": 10,
      "id": "get-request:-search-for-a-postcode;individual-postcode-request-should-return-correct-address;;2"
    },
    {
      "cells": [
        "M160RA",
        "England",
        "North West"
      ],
      "line": 11,
      "id": "get-request:-search-for-a-postcode;individual-postcode-request-should-return-correct-address;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 807112264,
  "status": "passed"
});
formatter.before({
  "duration": 696604,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Individual postcode request should return correct address",
  "description": "",
  "id": "get-request:-search-for-a-postcode;individual-postcode-request-should-return-correct-address;;2",
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
  "duration": 1623611271,
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
  "duration": 678798744,
  "status": "passed"
});
formatter.before({
  "duration": 2144184,
  "status": "passed"
});
formatter.before({
  "duration": 5571112,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Individual postcode request should return correct address",
  "description": "",
  "id": "get-request:-search-for-a-postcode;individual-postcode-request-should-return-correct-address;;3",
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
  "duration": 174132816,
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
  "duration": 30171420,
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
  "name": "If I supply a bunch of postcodes then",
  "description": "correct addresses should be returned",
  "id": "post-request:-bulk-lookup-postcodes;if-i-supply-a-bunch-of-postcodes-then",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I enter \"\u003cpostcode1\u003e\",\"\u003cpostcode2\u003e\",\"\u003cpostcode3\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I should get \"\u003cregion1\u003e\",\"\u003cregion2\u003e\",\"\u003cregion3\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "post-request:-bulk-lookup-postcodes;if-i-supply-a-bunch-of-postcodes-then;",
  "rows": [
    {
      "cells": [
        "postcode1",
        "postcode2",
        "postcode3",
        "region1",
        "region2",
        "region3"
      ],
      "line": 11,
      "id": "post-request:-bulk-lookup-postcodes;if-i-supply-a-bunch-of-postcodes-then;;1"
    },
    {
      "cells": [
        "NW14NR",
        "W22UH",
        "BD71AJ",
        "London",
        "London",
        "Yorkshire and The Humber"
      ],
      "line": 12,
      "id": "post-request:-bulk-lookup-postcodes;if-i-supply-a-bunch-of-postcodes-then;;2"
    },
    {
      "cells": [
        "M113FF",
        "NW88QN",
        "EC2R8AH",
        "North West",
        "London",
        "London"
      ],
      "line": 13,
      "id": "post-request:-bulk-lookup-postcodes;if-i-supply-a-bunch-of-postcodes-then;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 524847,
  "status": "passed"
});
formatter.before({
  "duration": 498214,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "If I supply a bunch of postcodes then",
  "description": "correct addresses should be returned",
  "id": "post-request:-bulk-lookup-postcodes;if-i-supply-a-bunch-of-postcodes-then;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I enter \"NW14NR\",\"W22UH\",\"BD71AJ\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I should get \"London\",\"London\",\"Yorkshire and The Humber\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Then "
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
  "duration": 204416215,
  "status": "passed"
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
  "duration": 50639263,
  "status": "passed"
});
formatter.before({
  "duration": 1337824,
  "status": "passed"
});
formatter.before({
  "duration": 294622,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "If I supply a bunch of postcodes then",
  "description": "correct addresses should be returned",
  "id": "post-request:-bulk-lookup-postcodes;if-i-supply-a-bunch-of-postcodes-then;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I enter \"M113FF\",\"NW88QN\",\"EC2R8AH\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I should get \"North West\",\"London\",\"London\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Then "
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
  "duration": 228649445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "North West",
      "offset": 14
    },
    {
      "val": "London",
      "offset": 27
    },
    {
      "val": "London",
      "offset": 36
    }
  ],
  "location": "BulkSearch.I_Should_Get_Correct_Addresses(String,String,String)"
});
formatter.result({
  "duration": 21880270,
  "status": "passed"
});
});