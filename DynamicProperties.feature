Feature: Dynamic Properties

    Background:
        Given I navigate to the demoqa website
        And I open the Elements section
        And I open the Dynamic Properties section

    Scenario: 1-UI check of "Dynamic Properties" section
        Then I should see the label of the Dynamic Properties section
        And I should see the "Will enable 5 second" button
        And I should see the "Color change" button
        And I should see the "Visible after 5 seconds button"

    Scenario: 2-Verify button should be disabled during first 5 seconds
        Then the button should be disabled within 5 seconds

    Scenario: 3-Verify "Colour change" button should not contain colored text within 5 seconds
        Then the "Colour change" button should not have colored text initially

    Scenario: 4-Verify "Dynamic Properties" section after 5 seconds
        When I wait for 5 seconds
        Then the "Colour change" button should have colored text
        And the "Visible after 5 seconds" button should be visible
