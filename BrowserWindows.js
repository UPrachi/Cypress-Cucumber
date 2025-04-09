class Browser_Windows{
    elements={

        Module_Button: () => cy.get('[class="card mt-4 top-card"]'),
        AlertFramesWindows: ()=> cy.contains('Alerts, Frame & Windows'),
        Label: ()=> cy.get('h1[class="text-center"]'), 
        BrowserWindows: ()=> cy.contains('Browser Windows').should('have.class','text'),
        New_Tab: ()=> cy.contains('New Tab'),
        New_Window: ()=> cy.contains('New Window'),
        New_Window_Message: ()=> cy.contains('New Window Message'),


    }

}
export default new Browser_Windows;
