/// <reference types="cypress" />
class UserRegistrationautexercise
{
    elements=
    {
        //name :()=> cy.get('input[name="name"]'),
        //email :()=> cy.get('input[name="email"]'),
        //signup :()=>cy.contains('button', 'Signup'),
        title :()=> cy.get('input[name="title"][value="Mrs"]'),
        passwordd:()=>cy.get('#password'),
        days :()=> cy.get('#days'),
        month :()=> cy.get('#months'),
        year :()=> cy.get('#years'),
        firstname :()=>cy.get('[data-qa="first_name"]'),
        lastname :()=>cy.get('#last_name'),
        company :()=> cy.get('[data-qa="company"]'),
        address1 :()=>cy.get('#address1'),
        address2 :()=> cy.get('#address2'),
        country :()=> cy.get('#country'),
        state :()=> cy.get('#state'),
        city :()=> cy.get('[data-qa="city"]'),
        zipcode :()=> cy.get('input[type="text"][data-qa="zipcode"]'),
        mobilenumber:()=> cy.get('input[type="text"][data-qa="mobile_number"]'),
    
    }
    userregistration(passwordd, days, months, year, firstname, lastname, company, address1, address2, country, state, city, zipcode, mobilenumber)
    {

        //this.elements.name().clear().type(name);
        //this.elements.email().clear().type(email);
        this.elements.title().click();
        this.elements.passwordd().clear().type(passwordd);
        this.elements.days().select(days);
        this.elements.month().select(months);
        this.elements.year().select(year);
        this.elements.firstname().clear().type(firstname);
        this.elements.lastname().clear().type(lastname);
        this.elements.address1().clear().type(address1);
        this.elements.address2().clear().type(address2);
        this.elements.country().select(country);
        this.elements.state().clear().type(state);
        this.elements.city().clear().type(city);
        this.elements.zipcode().clear().type(zipcode);
        this.elements.mobilenumber().clear().type(mobilenumber)

    }
}

module.exports = new UserRegistrationautexercise()