/// <reference types="cypress" />
const Proceedwithshopping = require('../pages/Proceedwithshopping');
const regdata = require('C:\\Orange-HRMCYP\\cypress\\fixtures\\automationexercise.json');
const Loginautomationexercise = require('C:\\Orange-HRMCYP\\cypress\\pages\\Loginautomationexercise.js');
const UserRegistrationautexercise = require('C:\\Orange-HRMCYP\\cypress\\pages\\UserRegistrationautexercise.js');

describe('List of scenarios to be tested on AutomationExercise site',()=>
{
    beforeEach(()=>
    {

        Loginautomationexercise.visit();
        cy.wait(100);
        
    })
    //first Testcase
    it('TC-01 -Verify whether the user is able to login to the page',()=>
    {
        //calling the login function
        Loginautomationexercise.userlogin(regdata.cred.username, regdata.cred.password);
        cy.get('body').then(($body) =>
        {
            if ($body.text().includes('Your email or password is incorrect!'))
            {
                cy.get('[data-qa="signup-name"]').type(regdata.registration.name);
                cy.get('[data-qa="signup-email"]').type(regdata.registration.emaill);
                cy.get('[data-qa="signup-button"]').click();
                cy.wait(100);
                UserRegistrationautexercise.userregistration(regdata.registration.password, regdata.registration.days, regdata.registration.months, regdata.registration.year, regdata.registration.firstname, regdata.registration.lastname, regdata.registration.company, regdata.registration.address1, regdata.registration.address2, regdata.registration.country, regdata.registration.state, regdata.registration.state, regdata.registration.zipcode, regdata.registration.mobilenumber);       
                cy.get('[data-qa="create-account"]').click();
                cy.wait(500);
                cy.contains('Congratulations!').should('be.visible');
                cy.wait(100);
                cy.get('[data-qa="continue-button"]').click();
                Proceedwithshopping.Usershopping(regdata.search.product1);

                // Continue with next steps
            }
            else if($body.text().includes('Logged in as')) 
            {
                cy.log('User logged in successfully');
                Proceedwithshopping.Usershopping(regdata.search.product1);
                Proceedwithshopping.addtocart();
                Proceedwithshopping.clearcart();
                
            }
        })

    
  })

})



