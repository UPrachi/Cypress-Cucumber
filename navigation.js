
export const navigateToSection = (dropdown,moduleName) => {
    cy.visit('https://demoqa.com');
    cy.get('.card.mt-4.top-card').eq(0).click(); 
    cy.get('.element-group').contains(dropdown).click({force: true})
    cy.get('.btn.btn-light').contains(moduleName).click({force: true});
  };
  