class Broken_Links_Images{
    elements={

        Module_Button: () => cy.get('[class="card mt-4 top-card"]'),
        Broken_B: ()=> cy.contains('Broken Links - Images'),
        Valid_Image: ()=> cy.get('img[src="/images/Toolsqa.jpg"]'),
        Broken_Image: ()=> cy.get('img[src="/images/Toolsqa_1.jpg"]'),
        Label: ()=> cy.get('h1[class="text-center"]'),
        Section1: ()=> cy.contains('Valid image'),
        Section2: ()=> cy.contains('Broken image'),
        Section3: ()=> cy.contains('Valid Link'),
        Section4: ()=> cy.contains('Broken Link'),


        
}
}
export default new Broken_Links_Images;