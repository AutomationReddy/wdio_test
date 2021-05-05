@Registration
Feature: Performing user registration
  As an user, in order to place an order I want to be able to
  register to the application
  
  Background: 
    Given I am on the signin page

  Scenario: In order to use the application, as an user I want to register to the site
    When I enter email address in the email input field
    And I click on the Create an account button
    Then I see the Create an account page
    And I enter personal information
    And I enter address and contact information
    When I click on the Register button
    Then I should see my account page
    And User name should be displayed
