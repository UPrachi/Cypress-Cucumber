Feature: Nested Frames

    Background:
        Given I navigate to the demoqa website
        And I open the Elements section
        And I open the Nested Frames section

    Scenario: 1-UI check of "Text" given in "Nested Frames" section
        Then I should see the label of the "Nested Frames" section
        And I should see the text in the "Nested Frames" section

    Scenario: 2-UI check of "Parent" frame given in "Nested Frames" section
        Then the "Parent" frame should contain the text "Parent frame"

    Scenario: 3-UI check of "Child" frame given in "Nested Frames" section
        Then the "Child" frame should contain the text "Child Iframe"
