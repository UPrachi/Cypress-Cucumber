import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import Dynamic_Properties from "../../PageObjects/Elements/Dynamic_Properties";

// Background steps
Given('I navigate to the demoqa website', () => {
    cy.visit('https://demoqa.com/');
});

Given('I open the Elements section', () => {
    Dynamic_Properties.elements.Module_Button().click();
});

Given('I open the Dynamic Properties section', () => {
    Dynamic_Properties.elements.DP_Button().click();
});

//Scenario-1
Then('I should see the label of the Dynamic Properties section', () => {
    Dynamic_Properties.elements.Label().should('contain', 'Dynamic Properties');
});

Then('I should see the "Will enable 5 second" button', () => {
    Dynamic_Properties.elements.Disable().should('be.visible');
});

Then('I should see the "Color change" button', () => {
    Dynamic_Properties.elements.Color_Change().should('be.visible');
});

Then('I should see the "Visible after 5 seconds button"', () => {
    Dynamic_Properties.elements.Disable().should('be.visible');
});

//Scenario-2
Then('the button should be disabled within 5 seconds', () => {
    Dynamic_Properties.elements.Disable().should('be.disabled');
});

//Scenario-3
Then('the "Colour change" button should not have colored text initially', () => {
    Dynamic_Properties.elements.Color_Change().should('not.have.class', 'text-danger');
});

//Scenario-4
When('I wait for 5 seconds', () => {
    cy.wait(5000);
});

Then('the "Colour change" button should have colored text', () => {
    Dynamic_Properties.elements.Color_Change().should('have.class', 'text-danger');
});

Then('the "Visible after 5 seconds" button should be visible', () => {
    Dynamic_Properties.elements.Visible().should('be.visible');
});
