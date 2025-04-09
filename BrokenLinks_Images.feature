Feature: Broken Links - Images

  Background:
    Given I navigate to the demoqa website
    And I open the Elements section
    And I open the Broken Links - Images section

  Scenario: 1-UI check of "Broken Links - Images" section
    Then I should see the label of the Broken Links - Images section
    And I should see four sections visible

  Scenario: 2-Verify that given image is broken
    Then the broken image should not have width attribute
    And the broken image should not have height attribute
