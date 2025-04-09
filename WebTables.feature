Feature: Web Tables

  As a user of the demoqa website,
  User wants to interact with and verify the "Web Table" section.

  Background:
    Given The user navigates to the "Web Table" section

  Scenario: 1-Verifying UI of "Web Table" section
    Then The label of the Web table section should be "Web Table"
    And All the elements should be displayed

  Scenario: Verifying UI of "Registration Form" Dialog
    When User clicks on the "Add" button
    Then The "Registration Form" dialog should be visible with required fields

  Scenario: Adding new user to the table
    When User adds a new user with valid details

  Scenario: Verifying added user should be visible in table
    When User adds the new user
    Then the added user should be visible in the result table

  Scenario: Verifying the search functionality
    When User search the data
    Then the table should display searched data
    And if no results are found, it should display "No rows found"

  Scenario: Verifying Pagination Functionality
    Given Table should contain more than 10 entries
    And User clicks on the "Next" button
    Then User should see the second page of the result table
    And User clicks on the "Previous" button
    Then User should see the first page of the result table
