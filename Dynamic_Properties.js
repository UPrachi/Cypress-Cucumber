class Dynamic_Property{
    elements={

        Module_Button: () => cy.get('[class="card mt-4 top-card"]'),
        DP_Button: ()=> cy.contains('Dynamic Properties'),
        Label: ()=> cy.get('h1[class="text-center"]'),
        Disable: ()=> cy.contains('Will enable 5 seconds'),
        Color_Change: ()=> cy.contains('Color Change'),
        Visible: ()=> cy.contains('Visible After 5 Seconds'),

    }

}
export default new Dynamic_Property;
