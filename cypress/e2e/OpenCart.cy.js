/// <reference types="cypress" />

const LoginPage = require('../pages/LoginPageopencart');
const UserRegistration = require('../pages/UserRegistrationopencart');
const userdata = require('../fixtures/userdata.json');

describe('Opencart Scenarios to be Tested', () => 
{

    beforeEach(() => 
    {
        LoginPage.visit();
        cy.wait(300);
    });

    it('TC01 - Verify login and redirect to registration if user does not exist', () => 
    {

        // Attempt login with invalid credentials
        LoginPage.UserLogin(userdata.invalid.username, userdata.invalid.password);

        // Check if login failed
        cy.get('body').then(($body) =>
        {
                if($body.find('.alert-danger').length > 0)
                {
                    cy.get('.alert-danger').should('contain', 'Warning: No match for E-Mail Address and/or Password.');
                    cy.contains('a', 'Continue').click();
                    cy.url().should('include', 'route=account/register');
                //Register the user
                    UserRegistration.registerUser(
                    userdata.register.firstname,
                    userdata.register.lastname,
                    userdata.register.email,
                    userdata.register.tphone,
                    userdata.register.password,
                    userdata.register.cpassword)
                    cy.wait(200);
                    cy.get('input[type="checkbox"][name="agree"]').check();
                    UserRegistration.elements.submitButton().click();
                    cy.wait(100);
                    //UserRegistration.elements.continuereg().click();
                    cy.contains('a', 'Continue').click();
                    //mouse hover over desktop menu
                    //UserRegistration.elements.dsktpmenu().trigger('mouseover');
                    //cy.wait(200);
                    //UserRegistration.elements.showall().click();

                }
                else 
                {
                    cy.log('Login successful');
                }
            })
    
    })
    
})
