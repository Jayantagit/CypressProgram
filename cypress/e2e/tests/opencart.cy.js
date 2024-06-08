describe('Demo', () => {
    it('OpenCart Login', () => {

        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
        cy.get("#input-email").type("jayantamandal122250@gmail.com")
        cy.get("#input-email").then((value) => {
            cy.log("visibile value" + value.text());
        })


    });

    it.only('google.com', () => {

        cy.visit("https://www.google.com/");
        cy.get("textarea.gLFyf").clear()
        cy.get("textarea.gLFyf").type("cypress automation {enter}");
        cy.wait(6000);
        cy.get("textarea.gLFyf").then((ele) => {
            cy.log("visibile value" + ele.text());
            expect(ele.text()).to.equal('cypress automation')  
           
        })
        cy.get('textarea.gLFyf').should('have.value','cypress automation')
        cy.get('textarea.gLFyf').should("be.visible") 
            
       // cy.get("a[jsname='UWckNb']").first().click()
       cy.get("div.yuRUbf span a").eq(2).click({force:true})


    });
});