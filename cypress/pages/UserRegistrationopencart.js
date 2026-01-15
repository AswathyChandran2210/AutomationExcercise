/// <reference types="cypress" />

class UserRegistration {
    elements = {
        firstname: () => cy.get('#input-firstname'),
        lastname: () => cy.get('#input-lastname'),
        email: () => cy.get('#input-email'),
        telephone:() => cy.get('input[name="telephone"]'),
        password: () => cy.get('#input-password'),
        cpassword:()=> cy.get('input[name="confirm"]'),
        policy:()=>cy.get('input[name="agree"]').check(),
        submitButton: () => cy.get('input[type="submit"][value="Continue"]'),
        //continuereg:() =>cy.get('a[href*="route=account/account"]')
        
        //desktop menu
        //dsktpmenu:()=> cy.contains('a', 'Desktops'),
        //showall:() => cy.contains('a', 'Show All Desktops')



    };

    visit() {
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    }

    registerUser(firstname, lastname, email, telephone, password, cpassword) 
    {
        this.elements.firstname().clear().type(firstname);
        this.elements.lastname().clear().type(lastname);
        this.elements.email().clear().type(email);
        this.elements.telephone().clear().type(telephone);
        this.elements.password().clear().type(password);
        this.elements.cpassword().clear().type(cpassword);
        this.elements.policy().click();
        this.elements.submitButton().click();
       

    }
}

module.exports = new UserRegistration();
