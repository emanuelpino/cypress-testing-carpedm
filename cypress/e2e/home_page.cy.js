describe('Loguin Flow', () => {

    it('comando de cypress OK', () =>{
      cy.login(Cypress.env('emailOk'), Cypress.env('passwordOk'))
    })

    it('comando de cypress NOK', () =>{
      cy.login(Cypress.env('emailNok'), Cypress.env('passwordOk'))
    })

    it('comando cypress NOK', () => {
      cy.login(Cypress.env('emailOk'), Cypress.env('passwordNok'))
    })

  })