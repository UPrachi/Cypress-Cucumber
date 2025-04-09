import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import UploadDownload from "../../PageObjects/Elements/UploadDownload";

// Background
Given('I navigate to the demoqa website', () => {
    cy.visit('https://demoqa.com/');
});

Given('I open the Elements section', () => {
    UploadDownload.elements.Module_Button().click();
});

Given('I open the Upload and Download section', () => {
    UploadDownload.elements.UD_Buttons().click();
});

// Scenario-1
Then('I should see the label of the Upload and Download section', () => {
    UploadDownload.elements.Label().should('contain', 'Upload and Download');
});

Then('I should see the Download button visible', () => {
    UploadDownload.elements.Download_B().should('be.visible');
});

Then('I should see the Choose File button visible', () => {
    UploadDownload.elements.Choose_File().should('be.visible');
});

Then('the Download button should be clickable', () => {
    UploadDownload.elements.Download_B().should('not.have.attr', 'disabled');
});

Then('the Choose File button should be clickable', () => {
    UploadDownload.elements.Choose_File().should('not.have.attr', 'disabled');
});

// Scenario-2
When('I click on the Download button', () => {
    UploadDownload.elements.Download_B().click();
});

// Scenario-3
When('I upload a file named {string}', (fileName) => {
    UploadDownload.elements.Choose_File().selectFile(`C:/Users/prachi.u/Documents/${fileName}`);
});

Then('I should see the file {string} in the result', (fileName) => {
    UploadDownload.elements.Result().should('contain', fileName);
});
