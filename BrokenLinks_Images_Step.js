import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import BrokenLinks_Images from "../../PageObjects/Elements/BrokenLinks_Images";

// Background steps
Given('I navigate to the demoqa website', () => {
    cy.visit('https://demoqa.com/');
});

Given('I open the Elements section', () => {
    BrokenLinks_Images.elements.Module_Button().eq(0).click();
});

Given('I open the Broken Links - Images section', () => {
    BrokenLinks_Images.elements.Broken_B().click();
});

// Scenario-1
Then('I should see the label of the Broken Links - Images section', () => {
    BrokenLinks_Images.elements.Label().should('contain', 'Broken Links - Images');
});

Then('I should see four sections visible', () => {
    BrokenLinks_Images.elements.Section1().should('be.visible');
    BrokenLinks_Images.elements.Section2().should('be.visible');
    BrokenLinks_Images.elements.Section3().should('be.visible');
    BrokenLinks_Images.elements.Section4().should('be.visible');
});

// Scenario-2
Then('the broken image should not have width attribute', () => {
    BrokenLinks_Images.elements.Broken_Image().should('not.have.attr', 'width');
});

Then('the broken image should not have height attribute', () => {
    BrokenLinks_Images.elements.Broken_Image().should('not.have.attr', 'height');
});
