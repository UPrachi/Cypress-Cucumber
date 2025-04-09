import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import NestedFrames from "../../PageObjects/Alerts, Frame & Windows/NestedFrames";

Given('I navigate to the demoqa website', () => {
    // Enter the URL in address bar and press enter key
    cy.visit('https://demoqa.com/');
});

Given('I open the Elements section', () => {
    NestedFrames.elements.Module_Button().eq(0).click()
});

Given('I open the Nested Frames section', () => {
    NestedFrames.elements.Parent_Button().click();
    NestedFrames.elements.NestedFrame_Button().click();
});

//Scenario-1
Then('I should see the label of the "Nested Frames" section', () => {
    NestedFrames.elements.Label().should('contain', 'Nested Frames');
});

Then('I should see the text in the "Nested Frames" section', () => {
    NestedFrames.elements.Body_Text().should('be.visible');
});

//Scenario-2
Then('the "Parent" frame should contain the text {string}', (expectedText) => {
    NestedFrames.elements.Parent_Frame().should('contain', expectedText);
});

//Scenario-3
Then('the "Child" frame should contain the text {string}', (expectedText) => {
    cy.iframe('[id="frame1"]').find('iframe[srcdoc="<p>Child Iframe</p>"]').should('exist').then((cframe) => {
        cy.wrap(cframe).should('have.prop', 'contentDocument').and('exist').then((Doc_Content) => {
            cy.wrap(Doc_Content).find('body').should('contain.text', expectedText);
        });
    });
});
