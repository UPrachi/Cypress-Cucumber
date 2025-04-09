Feature: Links

  Background:
    Given I navigate to the demoqa website
    And I open the Elements section
    And I open the Links section

  Scenario: 1-UI check of "Links" section
    Then I should see the label of the Links section
    And I should see two sections displayed
    And I should see the Home link
    And I should see the Dynamic link
    And I should see the Created link
    And I should see the No Content link
    And I should see the Moved link
    And I should see the Bad Request link
    And I should see the Unauthorized link
    And I should see the Forbidden link
    And I should see the Not Found link

  Scenario: 2-Verify that "Home" link is clickable
    Then the Home link should be enabled

  Scenario: 3-Verify the "Home" link
    When I click on the Home link
    Then I should be redirected to a new page

  Scenario: 4-Verify the "Dynamic" link
    When I click on the Dynamic link
    Then I should be redirected to a new page

  Scenario: 5-Verify API call for "Created" link - 201
    When I click on the Created link
    Then the status code & status message should be "201" & "Created"

  Scenario: 6-Verify API call for "No Content" link - 204
    When I click on the No Content link
    Then the status code & status message should be "204" & "No content"

  Scenario: 7-Verify API call for "Moved" link - 301
    When I click on the Moved link
    Then the status code & status message should be "301" & "Moved Permanently"

  Scenario: 8-Verify API call for "Bad Request" link - 400
    When I click on the Bad Request link
    Then the status code & status message should be "400" & "Bad Request"

  Scenario: 9-Verify API call for "Unauthorized" link - 401
    When I click on the Unauthorized link
    Then the status code & status message should be "401" & "Unauthorized"

  Scenario: 10-Verify API call for "Forbidden" link - 403
    When I click on the Forbidden link
    Then the status code & status message should be "403" & "Forbidden"

  Scenario: 11-Verify API call for "Not Found" link - 404
    When I click on the Not Found link
    Then the status code & status message should be "404" & "Not Found"
