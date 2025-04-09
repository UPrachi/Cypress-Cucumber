import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Buttons from "../../PageObjects/Elements/Buttons";

// Background steps
Given('I navigate to the demoqa website', () => {
    cy.visit('https://demoqa.com/');
});

Given('I open the Elements section', () => {
    Buttons.elements.Module_Button().eq(0).click();
});

Given('I open the Buttons section', () => {
    Buttons.elements.Button().click();
});

// Scenario-1
Then('I should see the label of the Buttons section', () => {
    Buttons.elements.Buttons_Label().should('be.visible');
});

Then('I should see three buttons visible', () => {
    Buttons.elements.Button1().should('be.visible');
    Buttons.elements.Button2().should('be.visible');
    Buttons.elements.Button3().eq(2).should('be.visible');
});

// Scenario-2
When('I double click on the first button', () => {
    Buttons.elements.Button1().dblclick();
});

Then('I should see the output of the double click', () => {
    Buttons.elements.Result1().should('be.visible');
    Buttons.elements.Result1().should('contain', 'You have done a double click');
});

// Scenario-3
When('I right click on the second button', () => {
    Buttons.elements.Button2().rightclick();
});

Then('I should see the output of the right click', () => {
    Buttons.elements.Result2().should('be.visible');
    Buttons.elements.Result2().should('contain', 'You have done a right click');
});

// Scenario-4
When('I click on the third button', () => {
    Buttons.elements.Button3().eq(2).click();
});

Then('I should see the output of the dynamic click', () => {
    Buttons.elements.Result3().should('be.visible');
    Buttons.elements.Result3().should('contain', 'You have done a dynamic click');
});
