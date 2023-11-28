// TODO: ver como enviar 1 solo parametro
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login')
  cy.get('[placeholder="Email"]').click().type(email)
  cy.get('[placeholder="Password"]').click().type(password)

  cy.intercept('POST', `${Cypress.env('api')}${Cypress.env('endpoints').getTempcode}`).as('getTempCode')
  
  cy.get('.login-submit-button').click()

  cy.wait('@getTempCode').then((interceptedRequest) => {
    if (interceptedRequest.response.body.authType === 'Success') {
      cy.request('GET', `${Cypress.env('api')}${Cypress.env('endpoints').code}${Cypress.env('emailOk')}${Cypress.env('systemGuid')}`).then((response) => {
        const codeVerification = response.body // TODO: REVER, mejorar sintaxis

        cy.get('[placeholder="Enter Code"]').type(codeVerification)
        cy.get('.login-screen-enter-code').click()
        cy.log('Login ✅ OK')
      })
    }
    else {
      cy.log('Login NOK ❌')
    }
  })
})

Cypress.Commands.add('filterProfileStatus', (status) => {

  cy.intercept('POST', "https://api-qa.carpedmdating.com/api/User/search-paginated-users").as('paginatedUsers');

  // No hace falta desplegar el el select de Profile Status ya que por defecto se encuentra desplegado

  cy.contains(`${status}`).click();

  cy.wait('@paginatedUsers').then((interceptedRequest) => {
    const response = interceptedRequest.response.body.result;

    if (response) {
      const result = response.every((user) => user.profileStatus.key === `${status}`)
      cy.log(result)
    } else {
      cy.log("¡¡ NO DATA !!")
    }

  });
})

Cypress.Commands.add('filterMembershipStatus', (status) => {
  

  // Cierro el filtro de Profile Status
  cy.contains('Status').click()
  
  // Despliego el filtro de Membership Status
  cy.contains("Membership Status").click()

  cy.intercept('POST', "https://api-qa.carpedmdating.com/api/User/search-paginated-users").as('paginatedUsers');

  cy.contains(`${status}`).should('be.visible').click()
  cy.wait('@paginatedUsers').then( interception => {
    const response = interception.response.body.result
    if(response) {
      // const result = response.every( user => user.membership.status === `${status}`)
      response.forEach(user => {
        cy.log(user.membership.status)
      })
      // cy.log(result)
      // expect(result).to.be.true
    } else {
      cy.log("¡¡ NO DATA !!")
    }
  })
})