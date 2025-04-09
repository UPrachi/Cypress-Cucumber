import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Links from "../../PageObjects/Elements/Links";

// Background
Given('I navigate to the demoqa website', () => {
    cy.visit('https://demoqa.com/');
});

Given('I open the Elements section', () => {
    Links.elements.Module_Button().click();
});

Given('I open the Links section', () => {
    Links.elements.Link().click();
});

// Scenario-1
Then('I should see the label of the Links section', () => {
    Links.elements.Link().should('be.visible');
});

Then('I should see two sections displayed', () => {
    Links.elements.Section1().should('be.visible');
    Links.elements.Section2().should('be.visible');
});

Then('I should see the Home link', () => {
    Links.elements.Home().should('be.visible');
});

And('I should see the Dynamic link', () => {
    Links.elements.Dynamic().should('be.visible');
})
And('I should see the Created link', () => {
    Links.elements.Created().should('be.visible');
})
And('I should see the No Content link', () => {
    Links.elements.No_Content().should('be.visible');
})
And('I should see the Moved link', () => {
    Links.elements.Moved().should('be.visible');
})
And('I should see the Bad Request link', () => {
    Links.elements.Bad_Request().should('be.visible');
})
And('I should see the Unauthorized link', () => {
    Links.elements.Unauthorized().should('be.visible');
})
And('I should see the Forbidden link', () => {
    Links.elements.Forbidden().should('be.visible');
})
And('I should see the Not Found link', () => {
    Links.elements.Not_Found().should('be.visible');
})

// Scenario-2
Then('the Home link should be enabled', () => {
    Links.elements.Home().should('be.visible').should('not.have.attr', 'disabled');
});

// Scenario-3
When('I click on the Home link', () => {
    Links.elements.Home().invoke('removeAttr', 'target').click();
});

Then('I should be redirected to a new page', () => {
    cy.window().then(Compare => {
        expect(Compare.location.href).to.not.equal('https://demoqa.com/links');
    });
});

// Scenario-4
When('I click on the Dynamic link', () => {
    Links.elements.Dynamic().invoke('removeAttr', 'target').click();
});

// Scenario-5
When('I click on the Created link', () => {
    cy.intercept({
        method: 'GET',
        url: 'https://demoqa.com/*',
        hostname: 'demoqa.com',
    }).as('Details_Created');

    Links.elements.Created().click();
});

Then('the status code & status message should be "201" & "Created"', () => {
    cy.wait('@Details_Created', { timeout: 10000 }).then((Assert_Created) => {
        expect(Assert_Created.response.statusCode).to.equal(201);
        expect(Assert_Created.response.statusMessage).to.equal('Created');
    });
});

// Scenario-6
When('I click on the No Content link', () => {
    cy.intercept({
        method: 'GET',
        url: 'https://demoqa.com/*',
        hostname: 'demoqa.com',
    }).as('Details_noContent');

    Links.elements.No_Content().click();
});

Then('the status code & status message should be "204" & "No content"', () => {
    cy.wait('@Details_noContent', { timeout: 10000 }).then((Assert_NoContent) => {
        expect(Assert_NoContent.response.statusCode).to.equal(204);
        expect(Assert_NoContent.response.statusMessage).to.equal('No Content');
    });
});

// Scenario-7
When('I click on the Moved link', () => {
    cy.intercept({
        method: 'GET',
        url: 'https://demoqa.com/*',
        hostname: 'demoqa.com',
    }).as('Details_Moved');

    Links.elements.Moved().click();
});

Then('the status code & status message should be "301" & "Moved Permanently"', () => {
    cy.wait('@Details_Moved', { timeout: 10000 }).then((Assert_Moved) => {
        expect(Assert_Moved.response.statusCode).to.equal(301);
        expect(Assert_Moved.response.statusMessage).to.equal('Moved Permanently');
    });
});

// Scenario-8
When('I click on the Bad Request link', () => {
    cy.intercept({
        method: 'GET',
        url: 'https://demoqa.com/*',
        hostname: 'demoqa.com',
    }).as('Details_BadRequest');

    Links.elements.Bad_Request().click();
});

Then('the status code & status message should be "400" & "Bad Request"', () => {
    cy.wait('@Details_BadRequest', { timeout: 10000 }).then((Assert_BadRequest) => {
        expect(Assert_BadRequest.response.statusCode).to.equal(400);
        expect(Assert_BadRequest.response.statusMessage).to.equal('Bad Request');
    });
});

// Scenario-9
When('I click on the Unauthorized link', () => {
    cy.intercept({
        method: 'GET',
        url: 'https://demoqa.com/*',
        hostname: 'demoqa.com',
    }).as('Details_Unauthorized');

    Links.elements.Unauthorized().click();
});

Then('the status code & status message should be "401" & "Unauthorized"', () => {
    cy.wait('@Details_Unauthorized', { timeout: 10000 }).then((Assert_Unauthorized) => {
        expect(Assert_Unauthorized.response.statusCode).to.equal(401);
        expect(Assert_Unauthorized.response.statusMessage).to.equal('Unauthorized');
    });
});

// Scenario-10
When('I click on the Forbidden link', () => {
    cy.intercept({
        method: 'GET',
        url: 'https://demoqa.com/*',
        hostname: 'demoqa.com',
    }).as('Details_Forbidden');

    Links.elements.Forbidden().click();
});

Then('the status code & status message should be "403" & "Forbidden"', () => {
    cy.wait('@Details_Forbidden', { timeout: 10000 }).then((Assert_Forbidden) => {
        expect(Assert_Forbidden.response.statusCode).to.equal(403);
        expect(Assert_Forbidden.response.statusMessage).to.equal('Forbidden');
    });
});

// Scenario-11
When('I click on the Not Found link', () => {
    cy.intercept({
        method: 'GET',
        url: 'https://demoqa.com/*',
        hostname: 'demoqa.com',
    }).as('Details_NotFound');

    Links.elements.Not_Found().click();
});

Then('the status code & status message should be "404" & "Not Found"', () => {
    cy.wait('@Details_NotFound', { timeout: 10000 }).then((Assert_NotFound) => {
        expect(Assert_NotFound.response.statusCode).to.equal(404);
        expect(Assert_NotFound.response.statusMessage).to.equal('Not Found');
    });
});