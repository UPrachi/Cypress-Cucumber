class Alerts{
    elements={
        
        Module_Button: () => cy.get('[class="card mt-4 top-card"]'),
        Label: ()=> cy.get('h1[class="text-center"]'),
        Button1: ()=> cy.contains('Alerts, Frame & Windows'),
        Alert_Button: ()=> cy.get('[id="item-1"]').eq(1),
        Get_Alert: ()=> cy.get('[id="alertButton"]'),
        Alert_After_5Sec: ()=> cy.get('[id="timerAlertButton"]'),
        Confirm_Box: ()=> cy.get('[id="confirmButton"]'),
        Prompt_Box: ()=> cy.get('[id="promtButton"]'),
        Label2: ()=> cy.contains('Alerts').should('have.class','text-center'),
        Result: ()=> cy.get('#confirmResult'),
        Prompt_Result: ()=> cy.get('#promptResult')

    }
}
export default new Alerts;