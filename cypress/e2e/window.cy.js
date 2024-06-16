describe('Window Handling', () => {
    it('window -1', () => {

        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example a').invoke('removeAttr', 'target').click()
        cy.url().should('include', "/windows/new")
    });

    it('window -2', () => {

        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example a').then((u) => {
            let url = u.prop('href')
            cy.visit(url)
        })
        cy.url().should('include', "/windows/new")
    });
});