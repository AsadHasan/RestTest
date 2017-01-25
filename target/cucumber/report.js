$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PostcodeSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Search for a postcode",
  "description": "",
  "id": "search-for-a-postcode",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Postcode requests should return correct addresses",
  "description": "",
  "id": "search-for-a-postcode;postcode-requests-should-return-correct-addresses",
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
  "id": "search-for-a-postcode;postcode-requests-should-return-correct-addresses;",
  "rows": [
    {
      "cells": [
        "postcodes",
        "country",
        "region"
      ],
      "line": 9,
      "id": "search-for-a-postcode;postcode-requests-should-return-correct-addresses;;1"
    },
    {
      "cells": [
        "SW1A0AA",
        "England",
        "London"
      ],
      "line": 10,
      "id": "search-for-a-postcode;postcode-requests-should-return-correct-addresses;;2"
    },
    {
      "cells": [
        "M160RA",
        "England",
        "North West"
      ],
      "line": 11,
      "id": "search-for-a-postcode;postcode-requests-should-return-correct-addresses;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Postcode requests should return correct addresses",
  "description": "",
  "id": "search-for-a-postcode;postcode-requests-should-return-correct-addresses;;2",
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
  "duration": 1682912695,
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
  "duration": 532805640,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Postcode requests should return correct addresses",
  "description": "",
  "id": "search-for-a-postcode;postcode-requests-should-return-correct-addresses;;3",
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
  "duration": 155239092,
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
  "duration": 62045594,
  "status": "passed"
});
});