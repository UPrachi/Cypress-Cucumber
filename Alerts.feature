Feature: Alerts

    Background:
        Given I navigate to the demoqa website
        And I open the Elements section
        And I open the Browser Windows section

    Scenario: 1-UI check of "Alerts" section
        Then I should see the label of the "Alerts" section
        And I should see the "Get Alert" button
        And I should see the "Alert After 5 Sec" button
        And I should see the "Confirm Box" button
        And I should see the "Prompt Box" button
        And the "Get Alert" button should be clickable
        And the "Alert After 5 Sec" button should be clickable
        And the "Confirm Box" button should be clickable
        And the "Prompt Box" button should be clickable

    Scenario: 2-Verify that alert message get displayed
        When I click the "Get Alert" button
        Then the alert message should be displayed

    Scenario: 3-Verify that alert message will appear after 5 seconds
        When I click the "Alert After 5 Sec" button
        Then the alert message should be displayed after 5 seconds

    Scenario: 4-Verify the "OK" button in the confirm box
        When I click the "Confirm Box" button and select OK
        Then the result should display "You selected Ok"

    Scenario: 5-Verify the "Cancel" button in the confirm box
        When I click the "Confirm Box" button and select Cancel
        Then the result should display "You selected Cancel"

    Scenario: 6-Verify that Prompt box will be displayed
        When I click the "Prompt Box" button and enter a name
        Then the result should display "You entered Prachi"
