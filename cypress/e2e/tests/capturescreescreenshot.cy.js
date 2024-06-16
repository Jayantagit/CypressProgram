describe('Screenshot', () => {
    it('screenshot-Test', () => {
        cy.visit("https://demo.opencart.com/")
        cy.screenshot("HomePage.png")
        cy.get(".product-thumb img[title='MacBook']").screenshot("thumb-Mackbook")

    });
});