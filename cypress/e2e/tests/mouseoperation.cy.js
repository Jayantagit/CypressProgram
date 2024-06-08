describe('MouseActions', () => {
    it('Mouse Hover', () => {

        cy.visit("https://demo.opencart.com/")
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.xpath("//a[contains(text(),'PC')]").should('be.visible').click()

    });

    it('Double Click', () => {

        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
        // cy.wait(10000)
        cy.frameLoaded("#iframeResult")
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").should('be.visible').trigger('dblclick')
        cy.iframe("#iframeResult").find('#field2').should('have.value', 'Hello World!')

    });

    it('Right Click', () => {

        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        // cy.xpath("//span[text()='right click me']").trigger('contextmenu')
        cy.get('span.context-menu-one').rightclick()

    });

    it('Drag and Drop', () => {

        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get("#box3").should('be.visible')
        cy.get('#box103').should('be.visible')
        cy.get("#box3").drag('#box103', { force: true })


    });

    it.only('Scrolling', () => {

        cy.visit("https://scroll.in/tag/Swiggy")
        cy.get('.search-next').scrollIntoView({duration:5000})
        cy.get('.search-next').should('be.visible').click()

    });

});