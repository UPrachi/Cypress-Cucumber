Feature: Upload and Download

  Background:
    Given I navigate to the demoqa website
    And I open the Elements section
    And I open the Upload and Download section

  Scenario: 1-UI check of "Upload and Download" section
    Then I should see the label of the Upload and Download section
    And I should see the Download button visible
    And I should see the Choose File button visible
    And the Download button should be clickable
    And the Choose File button should be clickable

  Scenario: 2-Verify the Download functionality
    When I click on the Download button

  Scenario: 3-Verify the Upload functionality
    When I upload a file named "commands.txt"
    Then I should see the file "commands.txt" in the result
