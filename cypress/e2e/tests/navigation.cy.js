describe('Navigation Commands', () => {
    it('Navigation ', () => {

        cy.visit("https://tutorialsninja.com/demo/")
        cy.contains("MacBook").click()
        cy.go('back')
        cy.title().should('eq','Your Store')
        cy.go('forward')
        cy.reload()
        
    });
});