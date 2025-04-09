Feature: Practice Form

    Background:
        Given I navigate to the demoqa website
        And I open the Elements section
        And I open the Practice Form section

    Scenario: 1-UI check of "Practice Form" section
        Then I should see the label of the Practice Form section
        And I should see the "Textboxes" of the form
        And I should see the "Radio Buttons" of the forms
        And I should see the "Checkboxes" of the forms
        And I should see the "Dropdowns" of the forms
        And I should see the "Buttons" of the forms

    Scenario: 2-Verify the student registration functionality
        When I fill out the student registration form
        Then the submitted form should be displayed with correct data

    Scenario: 3-Verify validation message for invalid input in "Email" text box
        When I fill out the student registration form with an invalid email
        Then the "Email" text box should show validation for invalid input

    Scenario: 4-Verify validation message for blank input in "Student Registration Form"
        When I submit the student registration form without filling out required fields
        Then the required fields should show validation for blank input

    Scenario: 5-Verify validation message for invalid input in "Mo.Number" text box
        When I fill out the student registration form with an invalid mobile number
        Then the "Mo.Number" text box should show validation for invalid input