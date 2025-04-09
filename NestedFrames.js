class Nested_Frames{
    elements={

        Module_Button: () => cy.get('[class="card mt-4 top-card"]'),
        Label: ()=> cy.get('h1[class="text-center"]'),
        Parent_Button: ()=> cy.contains('Alerts, Frame & Windows'),
        NestedFrame_Button: ()=> cy.contains('Nested Frames').should('have.class','text'),
        Body_Text: ()=> cy.contains('There are nested iframes in this page'),
        Sample_File: ()=> cy.iframe('[id="frame1"]'),
        Parent_Frame: ()=> cy.iframe('#frame1'),
        Child_Frame: ()=> cy.get('iframe[srcdoc="<p>Child Iframe</p>"]'),

    }

}
export default new Nested_Frames;   