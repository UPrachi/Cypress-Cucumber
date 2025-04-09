Feature: Radio Button

  As a user of the demoqa website,
  User wants to interact with and verify information in the Radio Button section.

  Background:
    Given The user navigates to the "Radio Button" section

  Scenario: 1-Verifying UI of "Radio Button" section
    Then The label of the Radio Button section should be "Radio Button"
    And "Radio Button" section should contain all the elements
  
  Scenario: 2-Verifying clickable radio buttons
    When User clicks on the "Yes" radio button
    Then "Yes" should be visible in the result

    When User clicks on the "Impressive" radio button
    Then "Impressive" should be visible in the output
    And The "No" radio button should be disabled
