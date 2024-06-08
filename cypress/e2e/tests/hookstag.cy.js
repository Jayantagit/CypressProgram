
describe('Test suite', () => {

    before(() => {

        cy.log("before all")

    })
    
    beforeEach(() => {
        cy.log("beforeEach")

    })
   
    it('Test1', () => {
        cy.log("test1")
    });
    it('Test2', () => {
        cy.log("test2")
    });

    afterEach(() => {
        cy.log("afterEach")

    })

    after(() => {
        cy.log("after all")

    })

});