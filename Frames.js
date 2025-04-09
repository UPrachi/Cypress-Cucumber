class Frames{
    elements={

        Module_Button: () => cy.get('[class="card mt-4 top-card"]'),
        AlertsFramesWindows: ()=> cy.contains('Alerts, Frame & Windows'),
        Parent_Button: ()=> cy.contains('Alerts, Frame & Windows'),
        Frame_Button: ()=> cy.contains('Frames').should('have.class','text'),
        Label: ()=> cy.get('h1[class="text-center"]'),
        Body_Text: ()=> cy.contains('There are 2 Iframes in this page'),
        LargeFrame_Size: ()=> cy.get('[id="frame1"]'),
        SmallFrame_Size: ()=> cy.get('[id="frame2"]'),
        Large_Frame: ()=> cy.iframe('[id="frame1"]'),
        Small_Frame: ()=> cy.iframe('[id="frame2"]'),


    }

}
export default new Frames;
