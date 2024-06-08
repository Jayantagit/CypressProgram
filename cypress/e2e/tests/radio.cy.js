describe('RR', () => {
    it('Radio Demo', () => {

        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("#male").check().should('be.checked')
        
    });
    it('Checkbox Demo', () => {

        cy.visit("https://testautomationpractice.blogspot.com/");
       // cy.get("input[class='form-check-input'][type='checkbox']").check()
       cy.get("input[class='form-check-input'][type='checkbox']").eq(4).check()
       cy.get("input[class='form-check-input'][type='checkbox']").eq(4).uncheck()
        
    });
});