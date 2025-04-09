Feature: Modal Dialog

    Background:
        Given I navigate to the demoqa website
        And I open the Elements section
        And I open the Modal Dialog section

    Scenario: 1-UI check of "Modal Dialog" section
        Then I should see the label of the "Modal Dialogs" section
        And I should see the "Small modal" button
        And I should see the "Large modal" button
        And the "Small modal" button should be clickable
        And the "Large modal" button should be clickable

    Scenario: 2-UI check of "Small modal" Dialog section
        When I click on the "Small modal" button
        Then the "Small modal" dialog should be visible
        And the "Small modal" dialog should contain the text "This is a small modal. It has very less content"

    Scenario: 3-Close "Small modal" dialog functionality
        When I open "Small model" dialog
        And I click on the close button of the "Small modal" dialog

    Scenario: 4-UI check of "Large modal" Dialog section
        When I click on the "Large modal" button
        Then the "Large modal" dialog should be visible
        And the "Large modal" dialog should contain the text "Large Modal"

    Scenario: 5-Close "Large modal" dialog functionality
        When I open "Large model" dialog
        And I click on the close button of the "Large modal" dialog
