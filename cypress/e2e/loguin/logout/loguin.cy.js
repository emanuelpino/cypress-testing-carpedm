describe('Loguin flow', () => {

    it('Loguin OK', () =>{
      cy.login(Cypress.env('emailOk'), Cypress.env('passwordOk'))
    })

    it('Loguin NOK (email fail)', () =>{
      cy.login(Cypress.env('emailNok'), Cypress.env('passwordOk'))
    })

    it('Loguin NOK (password fail)', () => {
      cy.login(Cypress.env('emailOk'), Cypress.env('passwordNok'))
    })

  })