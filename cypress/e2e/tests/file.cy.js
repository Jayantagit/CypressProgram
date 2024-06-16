describe('Toaster Message', () => {
    it.skip('toast msg', () => {

        cy.visit("https://primeng.org/toast")
        cy.wait(1000)
        cy.get("basic-doc > .card > p-button.p-element > .p-ripple").click()
        cy.get('.p-toast-detail').contains("Message Content")


    });
    Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
    })
    it.skip('ebay', () => {

        cy.visit("https://www.ebay.com/")
        cy.wait(1000)
        cy.get("input[placeholder='Search for anything']").clear()
        cy.get("input[placeholder='Search for anything']").type("laptop")
        cy.get('#gh-btn').click()


    });
    it.only('Responsive Design', () => {

        cy.visit("https://www.ebay.com/")
        cy.viewport('iphone-5')
        cy.wait(1000)
        cy.get("input[placeholder='Search for anything']").clear()
        cy.get("input[placeholder='Search for anything']").type("laptop")
        cy.get('#gh-btn').click()


    });
});