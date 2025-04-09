Feature: Frames

    Background:
        Given I navigate to the demoqa website
        And I open the Elements section
        And I open the Frames section

    Scenario: 1-UI check of "Text" given in "Frames" section
        Then I should see the label of the "Frames" section
        And I should see the text in the "Frames" section

    Scenario: 2-UI check of "Sample Page" displayed in "Frames" section
        Then the sample page should be displayed in large frame
        And the large frame should contain the text "This is a sample page"

    Scenario: 3-UI check of "Sample Page" displayed in smaller size in "Frames" section
        Then the sample page should be displayed in small frame
        And the small frame should contain the text "This is a sample page"
