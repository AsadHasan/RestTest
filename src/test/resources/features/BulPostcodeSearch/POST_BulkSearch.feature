Feature: POST Request: Bulk lookup postcodes

Scenario Outline: If I supply a bunch of postcodes then 
correct addresses should be returned

Given I enter "<postcode1>","<postcode2>","<postcode3>"
Then I should get "<region1>","<region2>","<region3>"

Examples:

|postcode1|postcode2|postcode3|region1|region2|region3|
|NW14NR|W22UH|BD71AJ|London|London|Yorkshire and The Humber|
|M113FF|NW88QN|EC2R8AH|North West|London|London|
