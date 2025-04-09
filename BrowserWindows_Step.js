import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import BrowserWindows from '../../PageObjects/Alerts, Frame & Windows/BrowserWindows';

// Background
Given('I navigate to the demoqa website', () => {
    cy.visit('https://demoqa.com/');
});

Given('I open the Elements section', () => {
    BrowserWindows.elements.Module_Button().eq(0).click();
});

Given('I open the Browser Windows section', () => {
    BrowserWindows.elements.AlertFramesWindows().click()
    BrowserWindows.elements.BrowserWindows().click();
});

// Scenario-1
Then('I should see the label of the "Browser Windows" section', () => {
    BrowserWindows.elements.Label().should('contain', 'Browser Windows');
});

Then('I should see the "New Tab" button', () => {
    BrowserWindows.elements.New_Tab().should('be.visible');
});

Then('I should see the "New Window" button', () => {
    BrowserWindows.elements.New_Window().should('be.visible');
});

Then('I should see the "New Window Message" button', () => {
    BrowserWindows.elements.New_Window_Message().should('be.visible');
});

Then('the "New Tab" button should be clickable', () => {
    BrowserWindows.elements.New_Tab().should('not.have.attr', 'disabled');
});

Then('the "New Window" button should be clickable', () => {
    BrowserWindows.elements.New_Window().should('not.have.attr', 'disabled');
});

Then('the "New Window Message" button should be clickable', () => {
    BrowserWindows.elements.New_Window_Message().should('not.have.attr', 'disabled');
});

// Scenario-2
When('I click the "New Tab" button', () => {
    cy.window().then(win => {
        cy.stub(win, 'open').as('windowOpen');
    });
    BrowserWindows.elements.New_Tab().click();
});

Then('a new tab should be opened', () => {
    cy.get('@windowOpen').should('be.called');
    cy.get('@windowOpen').then(stub => {
        if (!stub.called) {
            cy.log('Button did not open a new tab.');
        }
    });
});

// Scenario-3
When('I click the "New Window" button', () => {
    cy.window().then(win => {
        cy.stub(win, 'open').as('windowOpen');
    });
    BrowserWindows.elements.New_Window().click();
});

Then('a new window should be opened', () => {
    cy.get('@windowOpen').should('be.called');
    cy.get('@windowOpen').then(stub => {
        if (!stub.called) {
            cy.log('Button did not open a new window.');
        }
    });
});

// Scenario-4
When('I click the "New Window Message" button', () => {
    cy.window().then(win => {
        cy.stub(win, 'open').as('windowOpen');
    });
    BrowserWindows.elements.New_Window_Message().click();
});

Then('a new window with a message should be opened', () => {
    cy.get('@windowOpen').should('be.called');
    cy.get('@windowOpen').then(stub => {
        if (!stub.called) {
            cy.log('New window message is not displayed.');
        }
    });
});
