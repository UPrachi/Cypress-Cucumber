import Text_Box from '../../PageObjects/Elements/Text_Box';
import { navigateToSection } from '../../navigation';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

//Background
Given('The user navigates to the "Text Box" section', () => {
  navigateToSection('Elements', 'Text Box');
});

//Scenario-1
Then('The label of the Text Box section should be {string}', (label) => {
  Text_Box.elements.Label().should('contain', label);
});

Then('Text Box section should contain all the elements', () => {
  Text_Box.elements.Full_Name().should('be.visible')
  Text_Box.elements.Email().should('be.visible')
  Text_Box.elements.Current_Address().should('be.visible')
  Text_Box.elements.Permanent_Address().should('be.visible')
  Text_Box.elements.Submit_B().should('be.visible')
});

//Scenario-2
Then('Given field should have respective placeholders', () => {
  Text_Box.elements.Full_Name().should('have.attr', 'placeholder', 'Full Name');
  Text_Box.elements.Email().should('have.attr', 'placeholder', 'name@example.com');
  Text_Box.elements.Current_Address().should('have.attr', 'placeholder', 'Current Address');
});

//Scenario-3
Then('Given textboxes should be editable', () => {
  Text_Box.elements.Full_Name().click().should('have.focus');
  Text_Box.elements.Email().click().should('have.focus');
  Text_Box.elements.Current_Address().click().should('have.focus');
  Text_Box.elements.Permanent_Address().click().should('have.focus');
  Text_Box.elements.Submit_B().should('be.enabled');
});

//Scenario-4
const fullName = 'Prachi';
const email = 'prachi@example.com';
const currentAddress = 'Thaltej';
const permanentAddress = 'ahmedabd';

When('The user submit the Text Box form with appropriate details', () => {
  Text_Box.SubmitForm(fullName, email, currentAddress, permanentAddress);
});

Then('The Output should contain entered details', () => {
  Text_Box.elements.Output().should('be.visible');
  Text_Box.VerifyOutput(fullName, email, currentAddress, permanentAddress);
});

//Scenario-5
When('User submits the form with invalid email', () => {
  const invalidemail = 'prachi.com'
  Text_Box.SubmitForm(fullName, invalidemail, currentAddress, permanentAddress);
})

Then('Result Box should not be visible', ()=> {
  Text_Box.elements.Output().should('not.be.visible');
})

Then('Respective field should filled with red border', () => {
  Text_Box.elements.Email().should('have.css', 'border-color', 'rgb(255, 0, 0)');
});


