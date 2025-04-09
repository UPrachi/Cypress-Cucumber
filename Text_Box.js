class TextBox {
    elements = {

        Module_Button: () => cy.get('[class="card mt-4 top-card"]'),
        TextBox_Button: () => cy.contains("Text Box"),

        //UI
        UI_Text: () => cy.get('form[id="userForm"]'),
        Label: () => cy.get('h1[class="text-center"]'),

        //Place Holders 
        Full_Name: () => cy.get('[id="userName"]'),
        Email: () => cy.get('[id="userEmail"]'),
        Current_Address: () => cy.get('[id="currentAddress"]'),

        //Functionality
        Permanent_Address: () => cy.get('[id="permanentAddress"]'),
        Submit_B: () => cy.get('[id="submit"]'),

        //Output
        Output: () => cy.get('[id="output"]'),
        Out_Name: () => cy.get('p[id="name"].mb-1'),
        Out_Email: () => cy.get('p[id="email"].mb-1'),
        Out_CAddress: () => cy.get('p[id="currentAddress"].mb-1'),
        Out_PAddress: () => cy.get('p[id="permanentAddress"].mb-1'),

    }

    OpenTextBoxDialog() {
        cy.visit('https://demoqa.com/elements');
        this.elements.TextBox_Button().click()
    }

    SubmitForm(fullName, email, currentAddress, permanentAddress) {
        this.elements.Full_Name().type(fullName);
        this.elements.Email().type(email);
        this.elements.Current_Address().type(currentAddress);
        this.elements.Permanent_Address().type(permanentAddress);
        this.elements.Submit_B().click();
    }

    VerifyOutput(fullName, email, currentAddress, permanentAddress) {
        this.elements.Out_Name().should('contain', fullName);
        this.elements.Out_Email().should('contain', email);
        this.elements.Out_CAddress().should('contain', currentAddress);
        this.elements.Out_PAddress().should('contain', permanentAddress);
    }

    

}
export default new TextBox;