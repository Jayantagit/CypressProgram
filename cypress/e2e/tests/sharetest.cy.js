describe('Share Test', () => {
    it('Test1', () => {

        Cypress.env("UserID", "12345")



    });
    it('Test2', () => {

        cy.log("Cypress User ID :", Cypress.env("UserID"))



    });
    it('Local storage', () => {

        cy.visit("https://www.youtube.com/")

        cy.getAllLocalStorage().then((data) => {
            cy.log(data)
        })



    });
});