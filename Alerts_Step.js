import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Alerts from '../../PageObjects/Alerts, Frame & Windows/Alerts';

//BackGround
Given('I navigate to the demoqa website', () => {
    cy.visit('https://demoqa.com/');
});

Given('I open the Elements section', () => {
    Alerts.elements.Module_Button().eq(0).click()
});

Given('I open the Browser Windows section', () => {
    Alerts.elements.Button1().click();
    Alerts.elements.Alert_Button().click();
});

// Scenario-1
Then('I should see the label of the "Alerts" section', () => {
    Alerts.elements.Label().should('contain', 'Alerts');
});

Then('I should see the "Get Alert" button', () => {
    Alerts.elements.Get_Alert().should('be.visible');
});

Then('I should see the "Alert After 5 Sec" button', () => {
    Alerts.elements.Alert_After_5Sec().should('be.visible');
});
    
Then('I should see the "Confirm Box" button', () => {
    Alerts.elements.Confirm_Box().should('be.visible');
});

Then('I should see the "Prompt Box" button', () => {
    Alerts.elements.Prompt_Box().should('be.visible');
});

Then('the "Get Alert" button should be clickable', () => {
    Alerts.elements.Get_Alert().should('not.have.attr', 'disabled');
});

Then('the "Alert After 5 Sec" button should be clickable', () => {
    Alerts.elements.Alert_After_5Sec().should('not.have.attr', 'disabled');
});

Then('the "Confirm Box" button should be clickable', () => {
    Alerts.elements.Confirm_Box().should('not.have.attr', 'disabled');
});

Then('the "Prompt Box" button should be clickable', () => {
    Alerts.elements.Prompt_Box().should('not.have.attr', 'disabled');
});

// Scenario-2
When('I click the "Get Alert" button', () => {
    cy.window().then(win => {
        cy.stub(win, 'alert').as('windowAlert');
    });
    Alerts.elements.Get_Alert().click();
});

Then('the alert message should be displayed', () => {
    cy.get('@windowAlert').should('be.called');
});

// Scenario-3
When('I click the "Alert After 5 Sec" button', () => {
    cy.window().then(win => {
        cy.stub(win, 'alert').as('windowAlert');
    });
    Alerts.elements.Alert_After_5Sec().click();
    cy.wait(5000);
});

Then('the alert message should be displayed after 5 seconds', () => {
    cy.get('@windowAlert').should('be.called');
});

// Scenario-4
When('I click the "Confirm Box" button and select OK', () => {
    cy.window().then(win => {
        cy.stub(win, 'confirm').returns(true).as('windowConfirm');
    });
    Alerts.elements.Confirm_Box().click();
});

Then('the result should display "You selected Ok"', () => {
    Alerts.elements.Result().should('contain', 'You selected Ok');
});

// Scenario-5
When('I click the "Confirm Box" button and select Cancel', () => {
    cy.window().then(win => {
        cy.stub(win, 'confirm').returns(false).as('windowConfirm');
    });
    Alerts.elements.Confirm_Box().click();
});

Then('the result should display "You selected Cancel"', () => {
    Alerts.elements.Result().should('contain', 'You selected Cancel');
});

// Scenario-6
When('I click the "Prompt Box" button and enter a name', () => {
    cy.window().then(win => {
        cy.stub(win, 'prompt').returns('Prachi').as('windowPrompt');
    });
    Alerts.elements.Prompt_Box().click();
});

Then('the result should display "You entered Prachi"', () => {
    Alerts.elements.Prompt_Result().should('contain', 'You entered Prachi');
});
