const { Given, When, Then, And } = require('cypress-cucumber-preprocessor/steps');
import ModelDialog from '../../PageObjects/Alerts, Frame & Windows/ModelDialog';

//BackGround
Given('I navigate to the demoqa website', () => {
    // Enter the URL in address bar and press enter key
    cy.visit('https://demoqa.com/');
});

Given('I open the Elements section', () => {
    ModelDialog.elements.Module_Button().click();
});

Given('I open the Modal Dialog section', () => {
    ModelDialog.elements.Parent_Button().click()
    ModelDialog.elements.ModalDialog_Button().click();
});

//Scenario-1
Then('I should see the label of the "Modal Dialogs" section', () => {
    ModelDialog.elements.Label().should('contain', 'Modal Dialogs');
});

Then('I should see the "Small modal" button', () => {
    ModelDialog.elements.SmallModal_Button().should('be.visible');
});

Then('I should see the "Large modal" button', () => {
    ModelDialog.elements.LargeModal_Button().should('be.visible');
});

Then('the "Small modal" button should be clickable', () => {
    ModelDialog.elements.SmallModal_Button().should('not.have.attr', 'disabled');
});

Then('the "Large modal" button should be clickable', () => {
    ModelDialog.elements.LargeModal_Button().should('not.have.attr', 'disabled');
});

//Scenario-2
When('I click on the "Small modal" button', () => {
    ModelDialog.elements.SmallModal_Button().click();
});

Then('the "Small modal" dialog should be visible', () => {
    ModelDialog.elements.SmallModal_Dialog().should('be.visible');
});

Then('the "Small modal" dialog should contain the text {string}', (expectedText) => {
    ModelDialog.elements.SmallModal_Dialog().should('contain.text', expectedText);
});

//Scenario-3
When ('I open "Small model" dialog', ()=> {
ModelDialog.elements.SmallModal_Button().click()
})

And('I click on the close button of the "Small modal" dialog', () => {
    ModelDialog.elements.Close_SmalllModal().click();
});

//Scenario-4
When('I click on the "Large modal" button', () => {
    ModelDialog.elements.LargeModal_Button().click();
});

Then('the "Large modal" dialog should be visible', () => {
    ModelDialog.elements.LargeModal_Dialog().should('be.visible');
});

Then('the "Large modal" dialog should contain the text {string}', (expectedText) => {
    ModelDialog.elements.LargeModal_Dialog().should('contain.text', expectedText);
});

//Scenario-5
When ('I open "Large model" dialog', ()=> {
    ModelDialog.elements.LargeModal_Button().click()
})

And('I click on the close button of the "Large modal" dialog', () => {
    ModelDialog.elements.Close_LargeModal().click();
});
