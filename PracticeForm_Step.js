import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Practice_Form from '../PageObjects/Forms/Practice_Form';

//function to block add
function ignore_ad() {
    cy.intercept('GET', 'https://oajs.openx.net/**', (req) => {
        // Return a response object with status 500 to indicate the request was blocked
        req.reply({
            status: 500,
            body: 'Blocked by Cypress',
            headers: {
                'x-cypress-blocked': 'true'
            }   
        });
    });
}

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})  

Given('I navigate to the demoqa website', () => {
    cy.visit('https://demoqa.com/');
});

And('I open the Elements section', () => {
    Practice_Form.elements.Module_Button().click();
});

And('I open the Practice Form section', () => {
    Practice_Form.elements.Form_Button().click();
    Practice_Form.elements.Practice_Form().click()
});

//Scenario-1
Then('I should see the label of the Practice Form section', () => {
    cy.wait(3000)
    Practice_Form.elements.Label().should('be.contain', 'Practice Form')
})

And('I should see the "Textboxes" of the form', () => {
    Practice_Form.elements.Last_Name().should('be.visible')
    Practice_Form.elements.First_Name().should('be.visible')
    Practice_Form.elements.Email().should('be.visible')
    Practice_Form.elements.Mo_Number().should('be.visible')
    Practice_Form.elements.Subjects().should('be.visible')
    Practice_Form.elements.Address().should('be.visible')
})

And('I should see the "Radio Buttons" of the forms', () => {
    Practice_Form.elements.Gender().should('be.visible')
})

And('I should see the "Checkboxes" of the forms', () => {
    Practice_Form.elements.Hobbies().should('be.visible')
})

And('I should see the "Dropdowns" of the forms', () => {
    Practice_Form.elements.DOB().should('be.visible')
    Practice_Form.elements.State().should('be.visible')
    Practice_Form.elements.City().should('be.visible')
})

And('I should see the "Buttons" of the forms', () => {
    Practice_Form.elements.Picture().should('be.visible')
    Practice_Form.elements.Submit().should('be.visible')
})

//Scenario-2
var firstName = 'Prachi';
var lastName = 'Upadhyay';
var email = 'upadhyayprachi213@gmail.com';
var mobileNumber = '1234567890';
var year = '2002';
var month = 'January';
var day = '05';
var dobMonth = 'January';
var dobYear = '2002';
var subject1 = 'English';
var subject2 = 'Hindi';
var hobbies = ['Sports'];
var address = 'Ahmedabad';
var state = 'Rajasthan';
var city = 'Jaipur';

When('I fill out the student registration form', () => {

    Practice_Form.elements.First_Name().type(firstName);
    Practice_Form.elements.Last_Name().type(lastName);
    Practice_Form.elements.Email().type(email);
    Practice_Form.elements.Gender().click()
    Practice_Form.elements.Mo_Number().type(mobileNumber);
    Practice_Form.elements.DOB().click();
    Practice_Form.elements.Month().select(dobMonth);
    Practice_Form.elements.Year().select(dobYear);
    Practice_Form.elements.Date().click();
    Practice_Form.elements.Subjects().type(subject1 +'{enter}').type(subject2 +'{enter}');
    Practice_Form.elements.Hobbies().click();
    Practice_Form.elements.Address().type(address);
    Practice_Form.elements.State().type(state +'{enter}');
    Practice_Form.elements.City().type(city +'{enter}');
    Practice_Form.elements.Submit().click();
    cy.wait(3000)
});

Then('the submitted form should be displayed with correct data', () => {
   
    Practice_Form.elements.Result().within(() => {
        cy.contains('tr', 'Student Name').find('td').eq(1).should('contain', firstName + ' ' + lastName);
        cy.contains('tr', 'Student Email').find('td').eq(1).should('contain', email);
        cy.contains('tr', 'Gender').find('td').eq(1).should('contain', 'Female');
        cy.contains('tr', 'Mobile').find('td').eq(1).should('contain', mobileNumber);
        cy.contains('tr', 'Date of Birth').find('td').eq(1).should('contain', day + ' ' + month + ',' + year);
        cy.contains('tr', 'Subjects').find('td').eq(1).should('contain', subject1).and('contain', subject2);
        cy.contains('tr', 'Hobbies').find('td').eq(1).should('contain', hobbies[0]);
        cy.contains('tr', 'Picture').find('td').eq(1).should('be.visible');
        cy.contains('tr', 'Address').find('td').eq(1).should('contain', address);
        cy.contains('tr', 'State and City').find('td').eq(1).should('contain', state + ' ' + city);
    })
    Practice_Form.elements.Close_Result().scrollIntoView().click({ force: true });
    
});

//Scenario-3
When('I fill out the student registration form with an invalid email', () => {
    Practice_Form.elements.Email().type('invalidemail');
});

Then('the "Email" text box should show validation for invalid input', () => {
    Practice_Form.elements.Email().should('have.css', 'color', 'rgb(73, 80, 87)');
});

//Scenario-4
When('I submit the student registration form without filling out required fields', () => {
    Practice_Form.elements.Submit().click();
});

Then('the required fields should show validation for blank input', () => {
    Practice_Form.elements.First_Name().should('have.css', 'color', 'rgb(73, 80, 87)');
    Practice_Form.elements.Last_Name().should('have.css', 'color', 'rgb(73, 80, 87)');
    Practice_Form.elements.Gender().should('have.css', 'color', 'rgb(220, 53, 69)');
    Practice_Form.elements.Mo_Number().should('have.css', 'color', 'rgb(73, 80, 87)');
});

//Scenario-5
When('I fill out the student registration form with an invalid mobile number', () => {
    Practice_Form.elements.Mo_Number().type('invalid');
});

Then('the "Mo.Number" text box should show validation for invalid input', () => {
    Practice_Form.elements.Mo_Number().should('have.css', 'color', 'rgb(73, 80, 87)');
});