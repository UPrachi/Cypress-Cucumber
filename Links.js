class Links {
    elements={
        
        //UI
        Module_Button: () => cy.get('[class="card mt-4 top-card"]'),
        Link: ()=> cy.contains("Links"),
        Label: ()=> cy.get('h1[class="text-center"]'),
        Section1: ()=> cy.contains('Following links will open new tab'),
        Section2: ()=> cy.contains('Following links will send an api call'),
        Home: ()=> cy.get('[id="simpleLink"]'),
        Dynamic: ()=> cy.get('[id="dynamicLink"]'),
        Created: ()=> cy.contains('Created'),
        No_Content: ()=> cy.contains('No Content'),
        Moved: ()=> cy.contains('Moved'),
        Bad_Request: ()=> cy.contains('Bad Request'),
        Unauthorized: ()=> cy.contains('Unauthorized'),
        Forbidden: ()=> cy.contains('Forbidden'),
        Not_Found: ()=> cy.contains('Not Found'),

}
}
export default new Links;