import { faker } from '@faker-js/faker';
describe('Scenarios', () => {
    it('Add Product', () => {
        cy.visit("https://www.automationexercise.com/products")
        cy.get("[data-product-id='13']").first().click({ force: true })
        cy.get("[data-product-id='13']").siblings("h2").then((ele) => {
            cy.wrap(ele).invoke('text').as("productprice")
            cy.wrap(ele).invoke('text').then((price) => {
                cy.log("Price is :", price)
            })
        })
        cy.get("button.btn-success").click()
        cy.get("ul.nav.navbar-nav li:nth-child(3)").click()
        cy.get("@productprice").then((val) => {
            cy.log("Product price is :", val)
        })

    });

    it('each example', () => {
        const user = {
            username: faker.internet.userName(),
            email: faker.internet.email()
        }
        cy.visit("https://www.automationexercise.com/login")
        cy.get("[data-qa='signup-name']").type(user.username)
        cy.get("[data-qa='signup-email']").type(user.email)
        cy.get("[data-qa='signup-button']").click()
        cy.get("#name").type("jayanta")
        cy.get("[data-qa='country'] option").each((ele)=>
        {
            cy.wrap(ele).invoke('text').then((dropdownval)=>
            {
                cy.log("Country options :",dropdownval)
            })
        })

    });
});