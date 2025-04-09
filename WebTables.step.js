import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Web_Tables from "../../PageObjects/Elements/Web_Tables";

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

//Background
Given('I navigate to the demoqa website', () => {
  cy.visit('https://demoqa.com/');
});

Given('I open the Elements section', () => {
  Web_Tables.elements.Module_Button().eq(0).click();
});

Given('I open the Web Table section', () => {
  Web_Tables.elements.WebTable().click();
});

//Scenario-1
When('I verify the UI elements of the "Web Table" section', () => {
  Web_Tables.elements.Label_WebTable().should('contain', 'Web Tables');
  Web_Tables.elements.Add_Button().should('be.visible');
  Web_Tables.elements.Searchbar().should('be.visible');
  Web_Tables.elements.Columns().should('contain', 'First Name').and('contain', 'Last Name').and('contain', 'Age').and('contain', 'Email').and('contain', 'Salary').and('contain', 'Department').and('contain', 'Action');
  Web_Tables.elements.Edit().should('have.attr', 'title', 'Edit');
  Web_Tables.elements.Delete().should('have.attr', 'title', 'Delete');
});

//Scenario-2
When('I click on the "Add" button', () => {
  Web_Tables.elements.Add_Button().click();
});

Then('the "Registration Form" dialog should be visible with required fields', () => {
  Web_Tables.elements.Registration_Form().should('be.visible');
  Web_Tables.elements.Label_Form().should('contain', 'Registration Form');
  Web_Tables.elements.Fields_Form().should('contain', 'First Name').and('contain', 'Last Name').and('contain', 'Age').and('contain', 'Email').and('contain', 'Salary').and('contain', 'Department');
  Web_Tables.elements.Submit_Button().should('be.visible');
});

//Scenario-3
When('I add a new user with {string}, {string}, {string}, {string}, {string}, and {string}', (firstName, lastName, age, email, salary, department) => {
  Web_Tables.elements.Add_Button().click()
  Web_Tables.elements.First_Name().clear().type(firstName);
  Web_Tables.elements.Last_Name().clear().type(lastName);
  Web_Tables.elements.Email().clear().type(email);
  Web_Tables.elements.age().clear().type(age);
  Web_Tables.elements.Salary().clear().type(salary);
  Web_Tables.elements.Department().clear().type(department);
  Web_Tables.elements.Submit_Button().click();
});

//Scenario-4
When('I added the user', () => {
  cy.wait(4000)
  //Click on "Add" button.
  Web_Tables.elements.Add_Button().click()

  //Enter the data "Registration Form".
  const Data = [
    { First_Name: 'Prachi', Last_Name: 'Upadhyay', Age: '22', Email: 'prachi.u@sgligis.com', Salary: '1', Department: 'QA' },

  ];

  Data.forEach((data) => {

    // Fill out the form.
    Web_Tables.elements.First_Name().clear().type(data.First_Name);
    Web_Tables.elements.Last_Name().clear().type(data.Last_Name);
    Web_Tables.elements.Email().clear().type(data.Email);
    Web_Tables.elements.age().clear().type(data.Age);
    Web_Tables.elements.Salary().clear().type(data.Salary);
    Web_Tables.elements.Department().clear().type(data.Department);
  })

  Web_Tables.elements.Submit_Button().click()
})

Then('result table should be visible', () => {
  Web_Tables.elements.Result_Table().should('be.visible')
})

And('added user should be visible in result table', () => {
  Web_Tables.elements.Result_Table().should('contain', 'Prachi').and('contain', 'Upadhyay').and('contain', '22').and('contain', 'prachi.u@sgligis.com').and('contain', '1').and('contain', 'QA');
})

//Scenario-5
When('I click on the search bar', () => {
  Web_Tables.elements.Searchbar().click();
});

When('I enter {string} in the search bar', (search_data) => {
  Web_Tables.elements.Searchbar().type(search_data);
  cy.wrap(search_data).as('search_data');
});

Then('the table should display results containing {string}', (search_data) => {
  cy.wait(3000);
  Web_Tables.elements.Result_Table().eq(0).invoke('text').then((text) => {
    if (text.trim() == '') {
      cy.log('Table body is empty');
      Web_Tables.elements.No_Result().should('contain', 'No rows found');
    } else {
      Web_Tables.elements.Result_Table().each((row) => {
        cy.wrap(row).invoke('text').then((rowText) => {
          if (rowText.includes(search_data) || rowText.trim() === '') {
            cy.log('Valid search result or blank row');
          } else {
            throw new Error('Invalid search results');
          }
        });
      });
    }
  });
});

Then('if no results are found, it should display "No rows found"', () => {
  Web_Tables.elements.No_Result().should('contain', 'No rows found');
});

When('I click on the "Edit" button for the first row', () => {
  Web_Tables.elements.Edit().click();
});

When('I update the data with {string}, {string}, {string}, {string}, {string}, and {string}', (First_Name, Last_Name, Age, Email, Salary, Department) => {
  Web_Tables.elements.First_Raw().eq(0).then($row => {
    const columns = $row.find('td:eq(0)').text();

    Web_Tables.elements.Edit_Dialog().should('have.value', columns);

    Web_Tables.elements.First_Name().clear().type(First_Name);
    Web_Tables.elements.Last_Name().clear().type(Last_Name);
    Web_Tables.elements.Email().clear().type(Email);
    Web_Tables.elements.age().clear().type(Age);
    Web_Tables.elements.Salary().clear().type(Salary);
    Web_Tables.elements.Department().clear().type(Department);

    Web_Tables.elements.Submit_Button().click();

  });
});

Then('the edited data {string}, {string}, {string}, {string}, {string}, and {string} should be visible in the respective row', (First_Name, Last_Name, Age, Email, Salary, Department) => {

  Web_Tables.elements.First_Raw().eq(0).then(FirstRaw => {

    const row = FirstRaw.text();
    expect(row).to.contain(First_Name)
    expect(row).to.contain(Last_Name)
    expect(row).to.contain(Email)
    expect(row).to.contain(Age)
    expect(row).to.contain(Salary)
    expect(row).to.contain(Department)
  })
})

let row1 = '';
When('I store the data of the second row', () => {
  Web_Tables.elements.Second().then($row => {
    row1 = $row.text().trim();
  });
});

When('I delete the first row from the table', () => {
  Web_Tables.elements.Delete().click();
});

Then('the second row should move up and match the deleted first row data', () => {

  Web_Tables.elements.First().eq(0).then($row => {
    const row0 = $row.text().trim();
    expect(row0).to.equal(row1);
  });
});

When('I sort each column in ascending order', () => {
  Web_Tables.elements.Header().each(($col) => {
    cy.wrap($col).click();
  });
});

//Scenario-7
When('I click on the "Add" button', () => {
  Web_Tables.elements.Add_Button().click();
});

const Data = [
  { First_Name: 'Prachi', Last_Name: 'Upadhyay', Age: '22', Email: 'prachi.u@sgligis.com', Salary: '1', Department: 'QA' },

];

When('I add users to the registration form 10 times', () => {
  for (let i = 0; i < 10; i++) {
    Data.forEach((data) => {
      Web_Tables.elements.First_Name().clear().type(data.First_Name);
      Web_Tables.elements.Last_Name().clear().type(data.Last_Name);
      Web_Tables.elements.Email().clear().type(data.Email);
      Web_Tables.elements.age().clear().type(data.Age);
      Web_Tables.elements.Salary().clear().type(data.Salary);
      Web_Tables.elements.Department().clear().type(data.Department);

      Web_Tables.elements.Submit_Button().click();
    });
    Web_Tables.elements.Add_Button().click()
  }
  Web_Tables.elements.close().click()
})

And('I click on the "Next" button', () => {
  Web_Tables.elements.Next().click();
  cy.wait(2000);
});

Then('I should see the second page of the result table', () => {
  Web_Tables.elements.Pagination().should('have.attr','value', '2');
});

And('I click on the "Previous" button', () => {
  Web_Tables.elements.Previous().click();
  cy.wait(2000);
});

Then('I should see the first page of the result table', () => {
  Web_Tables.elements.Pagination().should('have.attr','value', '1');
});