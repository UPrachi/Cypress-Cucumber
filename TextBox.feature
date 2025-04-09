Feature: Text Box

  As a user of the demoqa website,
  User wants to verify the "Text Box" section.

  Background:
    Given The user navigates to the "Text Box" section

  Scenario: 1-Verifying UI of "Text box" section
    Then The label of the Text Box section should be "Text Box"
    And Text Box section should contain all the elements

  Scenario: 2-Verifying Placeholders of each field
    Then Given field should have respective placeholders

  Scenario: 3-Verifying all textboxes are editable
    Then Given textboxes should be editable

  Scenario: 4-Verifying the result of submitted data
    When The user submit the Text Box form with appropriate details 
    Then The Output should contain entered details

  Scenario: 5-Verifying the validation message for empty "TextBox" form
    When User submits the form with invalid email
    Then Result Box should not be visible
    And Respective field should filled with red border
