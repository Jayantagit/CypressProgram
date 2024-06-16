describe('Alert', () => {
    it('JS Alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()
        cy.on("window:alert", (p) => {
            expect(p).to.contain("I am a JS Alert")
        })
        cy.get("#result").should('have.text', "You successfully clicked an alert")

    });

    it('JS Confirm-Ok', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on("window:confirm", (p) => {
            expect(p).to.contain("I am a JS Confirm")
        })
        cy.get("#result").should('have.text', "You clicked: Ok")

    });
    it('JS Confirm-Ok', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on("window:confirm", (p) => {
            expect(p).to.contain("I am a JS Confirm")
        })
        cy.on('window:confirm', () => false)
        cy.get("#result").should('have.text', "You clicked: Cancel")

    });

    it('JS Prompt', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns("Hello")
        })
        cy.get("button[onclick='jsPrompt()']").click()
        cy.on('window:prompt', (p) => {
            expect(p).to.contain("I am a JS Confirm")
        })
        cy.get("#result").should('have.text', "You entered: Hello")

    });

    it('Basic auth', () => {
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {
            auth: {
                username: "admin",
                password: "admin"
            }
        });


    });
});