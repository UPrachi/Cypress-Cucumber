class Upload_Download{
    elements={

        Module_Button: () => cy.get('[class="card mt-4 top-card"]'),
        UD_Buttons: ()=> cy.contains('Upload and Download'),
        Label: ()=> cy.get('h1[class="text-center"]'),
        Download_B: ()=> cy.contains('Download'),
        Choose_File: ()=> cy.get('[id="uploadFile"]'),
        Result: ()=> cy.get('[id="uploadedFilePath"]'),
    }

}
export default new Upload_Download ;