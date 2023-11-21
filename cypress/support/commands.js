Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login')
  cy.get('[placeholder="Email"]').click().type(email)
  cy.get('[placeholder="Password"]').click().type(password)

  // cy.intercept('POST', API + endpoints["get-tempcode"]).as('getTempCode')
  cy.log(Cypress.env('endpoints.getTempcode'))
  cy.log(Cypress.env('api'))
  cy.intercept('POST', `${Cypress.env('api')}${Cypress.env('endpoints.getTempcode')}`).as('getTempCode')
  
  cy.get('.login-submit-button').click()

  cy.wait('@getTempCode').then((interceptedRequest) => {
    if (interceptedRequest.response.body.authType === 'Success') {
      cy.request('GET', API + endpoints.code + email + '/' + SYSTEM_GUID).then((response) => {
        const codeVerification = response.body

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

Cypress.Commands.add('filterStatus', (status) => {

  cy.visit("/Pool").wait(5000);

  cy.intercept('POST', "https://api-qa.carpedmdating.com/api/User/search-paginated-users").as('paginatedUsers');

  cy.get(`[name=${status}]`).click();

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