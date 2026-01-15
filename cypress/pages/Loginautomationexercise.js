/// <reference types="cypress" />
class Loginautomationexercise 
{

    elements =
    {

        //listing the web elements which are in login page
        usernameInput :()=> cy.get('input[data-qa="login-email"]'),
        passwordInput :()=>cy.get('input[name="password"]'),
        loginbutton :()=>cy.contains('button', 'Login'),
        loginerror: ()=>cy.contains('Your email or password is incorrect!')

    }
    visit()
    {
        cy.visit('https://automationexercise.com/login');
    }
    //typing the login details
    userlogin(username, password)
    {
        this.elements.usernameInput().clear().type(username);
        this.elements.passwordInput().clear().type(password);
        this.elements.loginbutton().click();
    }

    //login failure check
    verifyloginError()
    {

        this.elements.loginerror().should('be.visible');
}
    }

module.exports = new Loginautomationexercise();