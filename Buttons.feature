Feature: Buttons

Background:
    Given I navigate to the demoqa website
    And I open the Elements section
    And I open the Buttons section

  Scenario: 1-UI check of "Buttons" section
    Then I should see the label of the Buttons section
    And I should see three buttons visible

  Scenario: 2-Verify double click on button
    When I double click on the first button
    Then I should see the output of the double click

  Scenario: 3-Verify right click on button
    When I right click on the second button
    Then I should see the output of the right click

  Scenario: 4-Verify dynamic click on button
    When I click on the third button
    Then I should see the output of the dynamic click
