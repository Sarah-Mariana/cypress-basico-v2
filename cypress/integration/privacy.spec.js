it ('acessa a página da política de privacidade removendo o target e então clicanco no link' , function () {

cy.visit('./src/privacy.html')


cy.contains('Talking About Testing').should('be.visible')

})
