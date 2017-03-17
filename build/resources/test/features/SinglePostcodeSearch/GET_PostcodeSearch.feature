Feature: Search for a postcode via GET request

Scenario Outline: Individual postcode request should return correct address

Given I enter "<postcodes>"
Then response should show "<country>" and "<region>"

Examples:
|postcodes|country|region|
|SW1A0AA|England|London|
|M160RA|England|North West|