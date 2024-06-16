export class LoginPageElement {
    userName() {
        return cy.get("input[placeholder='Username']");

    }

    pasword() {
        return cy.get("input[placeholder='Password']");

    }
    sign() {
        return cy.get("button[type='submit']")
    }




}