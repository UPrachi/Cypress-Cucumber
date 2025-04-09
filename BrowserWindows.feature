Feature: Browser Windows

    Background:
        Given I navigate to the demoqa website
        And I open the Elements section
        And I open the Browser Windows section

    Scenario: 1-UI check of "Browser Windows" section
        Then I should see the label of the "Browser Windows" section
        And I should see the "New Tab" button
        And I should see the "New Window" button
        And I should see the "New Window Message" button
        And the "New Tab" button should be clickable
        And the "New Window" button should be clickable
        And the "New Window Message" button should be clickable

    Scenario: 2-Verify the "New Tab" button
        When I click the "New Tab" button
        Then a new tab should be opened

    Scenario: 3-Verify the "New Window" button
        When I click the "New Window" button
        Then a new window should be opened

    Scenario: 4-Verify the "New Window Message" button
        When I click the "New Window Message" button
        Then a new window with a message should be opened
