class Form{
    elements={
        
        //Lable
        Module_Button: () => cy.get('[class="card mt-4 top-card"]'),
        Label: ()=> cy.get('h1[class="text-center"]'),
        Form_Button: ()=> cy.contains('Forms'),
        Practice_Form: ()=> cy.contains('Practice Form'),
        Scroll : ()=> cy.get('[class="fade modal show"]'),
        //Textboxes
        First_Name: ()=> cy.get('[id="firstName"]'),
        Last_Name: ()=> cy.get('[id="lastName"]'),
        Email: ()=> cy.get('[id="userEmail"]'),
        Mo_Number: ()=> cy.get('[id="userNumber"]'),
        Subjects: ()=> cy.get('[id="subjectsContainer"]'),
        Address: ()=> cy.get('[id="currentAddress"]'),

        //Checkbox.
        Hobbies: ()=> cy.get('[class="custom-control-label"][for="hobbies-checkbox-1"]'),

        //Radio button.
        Gender: ()=>cy.get('[class="custom-control-label"][for="gender-radio-2"]'), 

        //Drop downs.
        DOB: ()=> cy.get('[id="dateOfBirthInput"][class="form-control"]'),
        State: ()=> cy.get('[id="state"]'),
        City: ()=> cy.get('[class=" css-yk16xz-control"]'),

        //Buttons.
        Submit: ()=> cy.contains('Submit'),
        Picture: ()=> cy.get('[id="uploadPicture"]'),

        DatePicker: ()=> cy.get('[class="form-control react-datepicker-ignore-onclickoutside"]'),
        Month: ()=> cy.get('[class="react-datepicker__month-select"]'),
        Year: ()=> cy.get('[class="react-datepicker__year-select"]'),
        Date: ()=>cy.get('.react-datepicker__day--005[aria-label="Choose Saturday, January 5th, 2002"]'),
        Previous_Month: ()=> cy.contains('Previous Month'),
        Next_Month: ()=> cy.contains('Next Month'),

        Result: ()=> cy.get('[class="modal-content"]'),
        Close_Result: ()=>cy.get('[id="closeLargeModal"]'),


    }   

}
export default new Form;