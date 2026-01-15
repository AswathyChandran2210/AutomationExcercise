/// <reference types="cypress" />
const testdata = require('C:\\Orange-HRMCYP\\cypress\\fixtures\\automationexercise.json');

describe('Verify the different API scenarios',()=>
{

    const baseurl='https://automationexercise.com/api';
    const endpoint = '/verifyLogin';

    /*let testdata;
    before(()=>{
        //loading the test data from the fixture json file
        cy.fixture('automationexercise.json').then((data)=>{
            testdata = data;

        })
    });*/
    it('TC-01 Verify the successfull login with the valid credentials',()=>
    {
        cy.request(
        {
            method: 'POST',
            url:`${baseurl}${endpoint}`,
            form:true,
            body:{
                email: testdata.cred.username,
                password:testdata.cred.password
            },
            failOnStatusCode: false
        }).then((response) => {
            cy.log('Response Body:', response.body);
            cy.log('Response Type:', typeof response.body);
            
            // Parse the response body if it's a string
            let parsedBody;
            if (typeof response.body === 'string') {
              parsedBody = JSON.parse(response.body);
            } else {
              parsedBody = response.body;
            }
            
            cy.log('Parsed Body:', JSON.stringify(parsedBody));
            
            // Assertions on parsed body
            expect(response.status).to.eq(200);
            expect(parsedBody).to.have.property('responseCode');
            expect(parsedBody.responseCode).to.eq(200);
            expect(parsedBody).to.have.property('message');
            expect(parsedBody.message).to.include('User exists');
            expect(response.duration).to.be.lessThan(3000);
      
        })
    })


})