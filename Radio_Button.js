class Radio_Button {
    elements = {

        Module_Button: () => cy.get('[class="card mt-4 top-card"]'),
        Radio: () => cy.contains("Radio Button"),
        Label: () => cy.get('h1.text-center'),
        UI_Label: () => cy.get('.text-center'),
        UI_Radio: () => cy.get('.custom-control.custom-radio.custom-control-inline'),
        UI_No: () => cy.get('.custom-control.disabled.custom-radio.custom-control-inline'),
        Yes_Radio: () => cy.contains("Yes"),
        Impressive_Radio: () => cy.contains("Impressive"),
        No_Radio: () => cy.get('#noRadio'),
        Result: () => cy.get('span.text-success'),
    };
}

export default new Radio_Button();
