describe('File Upload Download', () => {
    it.skip('Upload', () => {

        cy.visit("https://the-internet.herokuapp.com/upload")

        cy.get("input[id='file-upload']")
            .attachFile('adhar.jpg');
        cy.get('#file-submit').click()

        cy.get('h3').contains("Uploaded")

    });
    it('Download', () => {

         cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')

    });
});