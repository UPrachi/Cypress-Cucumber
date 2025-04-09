import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Frames from '../../PageObjects/Alerts, Frame & Windows/Frames';
import 'cypress-iframe';

Given('I navigate to the demoqa website', () => {
    cy.visit('https://demoqa.com/');
});

Given('I open the Elements section', () => {
    Frames.elements.Module_Button().eq(0).click()
});

Given('I open the Frames section', () => {
    Frames.elements.AlertsFramesWindows().click();
    Frames.elements.Frame_Button().click();
});

Then('I should see the label of the "Frames" section', () => {
    Frames.elements.Label().should('contain', 'Frames');
});

Then('I should see the text in the "Frames" section', () => {
    Frames.elements.Body_Text().should('be.visible');
});

Then('the sample page should be displayed in large frame', () => {
    Frames.elements.LargeFrame_Size().should('have.attr', 'width', '500px').and('have.attr', 'height', '350px');
});

Then('the large frame should contain the text "This is a sample page"', () => {
    Frames.elements.Large_Frame().should('exist');
    Frames.elements.Large_Frame().should('have.text', 'This is a sample page');
});

Then('the sample page should be displayed in small frame', () => {
    Frames.elements.SmallFrame_Size().should('have.attr', 'width', '100px').and('have.attr', 'height', '100px');
});

Then('the small frame should contain the text "This is a sample page"', () => {
    Frames.elements.Small_Frame().should('exist');
    Frames.elements.Small_Frame().should('have.text', 'This is a sample page');
});
