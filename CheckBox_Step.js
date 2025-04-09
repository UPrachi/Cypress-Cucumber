import Check_Box from '../../PageObjects/Elements/Check_Box';
import { navigateToSection } from '../../navigation';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

//Background
Given('The user navigates to the "Check Box" section', () => {
  navigateToSection('Elements','Check Box'); 
});

//Scenario 1
Then('The label of the Check Box section should be {string}', (label) => {
Check_Box.elements.Label().should('contain',label)
})

And('All the elements should be displayed', () => {
  Check_Box.elements.Label().should('contain', 'Check Box');
  Check_Box.elements.Toggle().should('be.visible');
  Check_Box.elements.expand_all().should('be.visible');
  Check_Box.elements.Collapse_all().should('be.visible');
});

// Scenario 2
Then('Given buttons should be enabled', () => {
  Check_Box.elements.Toggle().should('be.enabled');
  Check_Box.elements.expand_all().should('be.enabled');
  Check_Box.elements.Collapse_all().should('be.enabled');
});

// Scenario 3
When('The user checks all tree elements', () => {
  Check_Box.elements.expand_all().click();
  Check_Box.elements.Check_All().eq(0).click();
});

Then('All checkboxes should be checked', () => {
  Check_Box.elements.Uncheck_All().should('be.visible');
});

When('The user unchecks all tree elements', () => {
  Check_Box.elements.Uncheck_All().eq(0).click();
});

Then('All checkboxes should be unchecked', () => {
  Check_Box.elements.Check_All().should('be.visible');
});

// Scenario 4
When('The user checks each checkboxs', () => {
  Check_Box.expandAll();
  Check_Box.checkAllCheckboxes();
})

Then('The result of each checked checkbox should match the label text', () => {
  Check_Box.verifyCheckedResults();
});