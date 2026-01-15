/// <reference types="cypress" />

class LoginPage {

    elements = {
        username: () => cy.get('#input-email'),
        passwordInput: () => cy.get('#input-password'),
        loginButton: () => cy.get('input[type="submit"][value="Login"]'),
        //loginError: () => cy.get('.alert-danger').should('contain.text', 'Warning: No match for E-Mail Address and/or Password.')

    };

    visit() 
    {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    
    }

    UserLogin(username, password) {
        this.elements.username().clear().type(username);      // fixed
        this.elements.passwordInput().clear().type(password);
        this.elements.loginButton().click();                 // fixed
    }

    checkLoginError() {
        return this.elements.loginError().then($el => $el.length > 0);
    }
}

module.exports = new LoginPage();
