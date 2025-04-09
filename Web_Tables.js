class Web_Tables {
    elements = {

        Module_Button: () => cy.get('[class="card mt-4 top-card"]'),
        Label_WebTable: () => cy.get('h1[class="text-center"]'),
        WebTable: () => cy.contains('Web Tables'),
        Add_Button: () => cy.contains('Add'),
        Submit_Button: () => cy.contains('Submit'),
        Searchbar: () => cy.get('input#searchBox'),
        Columns: () => cy.get('div[class="rt-resizable-header-content"]'),
        Edit: () => cy.get('span[id="edit-record-1"]'),
        Delete: () => cy.get('span[id="delete-record-1"]'),
        First: () => cy.get('[class="rt-tr -odd"]'),
        Second: () => cy.get('[class="rt-tr -even"]'),
        Registration_Form: () => cy.get('div[class="modal-content"]'),
        Label_Form: () => cy.get('div[class="modal-header"]'),
        Fields_Form: () => cy.get('label[class="form-label"]'),
        Result_Table: () => cy.get('div[class="rt-tbody"]'),
        No_Result: () => cy.get('div[class="rt-noData"]'),
        First_Raw: () => cy.get('div[class="rt-tr-group"]'),
        Edit_Dialog: () => cy.get('[class="mt-2 row"]'),
        First_Name: () => cy.get('#firstName'),
        Last_Name: () => cy.get('#lastName'),
        Email: () => cy.get('#userEmail'),
        age: () => cy.get('#age'),
        Salary: () => cy.get('#salary'),
        Department: () => cy.get('#department'),
        Header: () => cy.get('div[class="rt-th rt-resizable-header -cursor-pointer"]'),
        Pagination: () => cy.get('[aria-label="jump to page"]'),
        close: () => cy.contains('Close'),
        Previous: () => cy.contains('Previous'),
        Next: () => cy.contains('Next')
    }



}

export default new Web_Tables;
