Feature: Check Box

  As a user of the demoqa website,
  I want to interact with and verify the functionality of the Check Box section

  Background:
    Given The user navigates to the "Check Box" section

  Scenario: 1-Verifying the UI of "Check Box" section
    Then The label of the Check Box section should be "Check Box"
    And All the elements should be displayed

  Scenario: 2-Verifying all checkboxes are enabled
    Then Given buttons should be enabled

  Scenario: 3-Verifying the functionality of all checkboxes
    When The user checks all tree elements
    Then All checkboxes should be checked
    When The user unchecks all tree elements
    Then All checkboxes should be unchecked

  Scenario: 4-Verifying results of checked checkboxes
    When The user checks each checkboxs
    Then The result of each checked checkbox should match the label text
