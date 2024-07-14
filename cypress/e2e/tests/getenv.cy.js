describe('DotEnv', () => {
    it('GetEnvValue', () => {

        cy.log("User Name:",Cypress.env('userName'))
        cy.log("User Name:",Cypress.env('USERNAME'))
        
    });
});