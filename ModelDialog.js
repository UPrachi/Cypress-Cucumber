class Modal_Dialog{
    elements={
        
        Module_Button: () => cy.get('[class="card mt-4 top-card"]'),
        Label: ()=> cy.get('h1[class="text-center"]'),
        Parent_Button: ()=> cy.contains('Alerts, Frame & Windows'),
        ModalDialog_Button: ()=> cy.contains('Modal Dialogs').should('have.class','text'),
        SmallModal_Button: ()=> cy.get('[id="showSmallModal"]'),
        LargeModal_Button: ()=> cy.get('[id="showLargeModal"]'),
        SmallModal_Dialog: ()=> cy.get('div.modal-content'),
        LargeModal_Dialog: ()=> cy.get('div[class="modal-content'),
        Close_SmalllModal: ()=> cy.get('[id="closeSmallModal"]'),
        Close_LargeModal: ()=> cy.get('[id="closeLargeModal"]'),
    }

}
export default new Modal_Dialog;