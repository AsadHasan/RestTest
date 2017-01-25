Feature: Search for a postcode

Scenario Outline: Postcode requests should return correct addresses

Given I enter "<postcodes>"
Then response should show "<country>" and "<region>"

Examples:
|postcodes|country|region|
|SW1A 0AA|England|London|
|M16 0RA|England||North West|