Feature: POST Request: Bulk lookup postcodes

Scenario Outline: If I supply a bunch of postcodes

Given I enter "<postcode1>","<postcode2>","<postcode3>"

Examples:

|postcode1|postcode2|postcode3|
|NW14NR|W22UH|BD71AJ|
|M113FF|NW88QN|EC2R8AH|

Scenario Outline: Correct addresses should be returned

Then I should get "<region1>","<region2>","<region3>"

Examples:

|region1|region2|region3|
|London|London|Yorkshire and The Humber|
|London|North West|London|