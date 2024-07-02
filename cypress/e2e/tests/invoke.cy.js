import { faker } from '@faker-js/faker';

describe('Automaion Practice', () => {
    it('Sign Up', () => {
        const user = {
            username: faker.internet.userName(),
            email: faker.internet.email()
        }
        cy.visit("https://www.automationexercise.com/login")
        cy.get("[data-qa='signup-name']").type(user.username)
        cy.get("[data-qa='signup-email']").type(user.email)
        cy.get("[data-qa='signup-button']").click()
        cy.get("#name").type("jayanta")
        cy.get("#name").invoke('attr', 'value').should('eq', user.username)

    });

    it.only('IncorrectSign Up', () => {
        const user = {
            username: faker.internet.userName(),
            email: faker.internet.email()
        }
        cy.visit("https://www.automationexercise.com/login")
        cy.get("[data-qa='login-email']").type(user.email)
        cy.get("[data-qa='login-password']").type("111")
        cy.get("[data-qa='login-button']").click()

        cy.get("div.login-form p").invoke('text').then((error) => {
            cy.log(error)
            expect(error).to.eql("Your email or password is incorrect!")
        })

    });
});