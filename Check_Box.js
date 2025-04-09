class Check_Box {
  elements = {

    Module_Button: () => cy.get('[class="card mt-4 top-card"]'),

    //UI
    Toggle: () => cy.get('button[title="Toggle"]'),
    Collapse_all: () => cy.get('button[title="Collapse all"]'),
    expand_all: () => cy.get('[class="rct-option rct-option-expand-all"]'),
    Label: () => cy.get('h1[class="text-center"]'),

    //Functionality
    Check_All: () => cy.get('span[class="rct-checkbox"]'),
    Uncheck_All: () => cy.get('svg[class="rct-icon rct-icon-check"]'),
    Each_CheckBox: () => cy.get('input[type="checkbox"]'),
    Checkbox: () => cy.contains('Check Box'),
    CheckBox_Lable: () => cy.get('label'),
    Titles: () => cy.get('.rct-title'),
    result: () => cy.get('div#result'),

  };

  expandAll() {
    this.elements.expand_all().click();
  }

  checkAllCheckboxes() {
    this.elements.Each_CheckBox().each(($checkbox) => {
      cy.wrap($checkbox).click({ force: true });
    });
  }

  verifyCheckedResults() {
    this.elements.Each_CheckBox().each(($checkbox, index) => {
      cy.wrap($checkbox).click({ force: true }).should('be.checked');;

      this.elements.Titles().eq(index).invoke('text').then(label => {
        const normalizedLabelText = label.toLowerCase().replace(/\s/g, '').replace('.doc', '');

        this.elements.result().invoke('text').then(outputText => {
          const normalizedOutputText = outputText.toLowerCase().replace(':', ' ');

          expect(normalizedOutputText).to.contain(normalizedLabelText);
        });
      });
      cy.wrap($checkbox).click({ force: true });
    });
  }
}

export default new Check_Box;
