import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import { navigateToSection } from '../../navigation';
import Radio_Button from '../../PageObjects/Elements/Radio_Button';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

//Background
Given('The user navigates to the "Radio Button" section', () => {
  navigateToSection('Elements','Radio Button'); 
});
  
//Scenario-1
Then('The label of the Radio Button section should be {string}', (label) => {
    Radio_Button.elements.Label().should('contain', label);
    
});

And('"Radio Button" section should contain all the elements', () => {
    Radio_Button.elements.Yes_Radio().should('be.visible')
    Radio_Button.elements.Impressive_Radio().should('be.visible')
});

//Scenario-2
When('User clicks on the "Yes" radio button', () => {
    Radio_Button.elements.Yes_Radio().click()
})
Then('"Yes" should be visible in the result', () => {
    Radio_Button.elements.Result().should('contain', 'Yes');
});

When('User clicks on the "Impressive" radio button', () => {
    Radio_Button.elements.Impressive_Radio().click()
})

Then('"Impressive" should be visible in the output', () => {
    Radio_Button.elements.Result().should('contain', 'Impressive');
});

And('The "No" radio button should be disabled', ()=>{
    Radio_Button.elements.No_Radio().should('be.disabled');

})