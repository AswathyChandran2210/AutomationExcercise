/// <reference types="cypress" />
class proceedwithshopping
{
    elements=
    {
            productlnk:()=> cy.contains('a', 'Products'),
            women:()=>cy.get('i.fa.fa-plus'),
            dress:()=>cy.contains('a', 'Dress'),
            vproduct:()=>cy.contains('a', 'View Product'),
            seach:() => cy.get('#search_product'),
            searchicon:()=>cy.get('button.btn.btn-default.btn-lg')
    }
    Usershopping(search)
    {
            this.elements.productlnk().click();
            //this.elements.women().click();
            //this.elements.dress().click();
            //.elements.vproduct().click();
            cy.wait(100);
            this.elements.seach().click();
            this.elements.seach().type(search).type('{enter}');
            cy.wait(50);
            //this.elements.searchicon().click();
            
     }
     //adding products to the cart
     addtocart()
     {
        cy.contains('.productinfo p', 'Blue Top').parents('.product-image-wrapper').trigger('mouseover');
        cy.contains('Add to cart').first().click();
        //continue shopping
        //cy.contains('Continue Shopping').click();
        cy.contains('View Cart').should('be.visible').click();
        //adding the second product
        cy.wait(500);
     }
     clearcart()
     {
        cy.get('a.cart_quantity_delete[data-product-id="1"]').click();
        cy.wait(100);
        cy.contains('a', 'here').click();
        //cy.contains('a', 'here').should('have.attr', 'href').and('include', 'products').click();
        //cy.get('a[href="/products"]').click()
        //cy.contains('u', 'here');
        /*cy.contains('.productinfo p', 'Men Tshirt').parents('.product-image-wrapper').trigger('mouseover');
        cy.contains('Add to cart').first().click();
        //viewing the shoppng cart
        cy.wait(50);*/
     }
        
        
     
    
}
module.exports = new proceedwithshopping();