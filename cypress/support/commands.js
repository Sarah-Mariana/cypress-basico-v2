
Cypress.Commands.add('fillMandatoryFieldsAndSubmit' , function () {
    cy.get('#firstName').type('Sarah')
    cy.get('#lastName').type('Mariana')
    cy.get('#email').type('sarahhmariana@gmail.com')
    cy.get('#open-text-area').type('Teste')

    cy.contains('button' , 'Enviar').click()

})


