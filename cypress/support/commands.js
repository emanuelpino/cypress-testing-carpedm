Cypress.Commands.add('login', (email, password) => { // TODO: ver como enviar 1 solo parametro y disminuir codigo
  cy.visit('/login')
  cy.get('[name="email"]').click().type(email)
  cy.get('[name="password"]').click().type(password)

  cy.intercept('POST', `${Cypress.env('api')}${Cypress.env('endpoints').getTempcode}`).as('getTempCode')

  cy.get('.login-submit-button').click()

  cy.wait('@getTempCode').then((interception) => {
    if (interception.response.body.authType === 'Success') {
      cy.request('GET', `${Cypress.env('api')}${Cypress.env('endpoints').code}${Cypress.env('emailOk')}${Cypress.env('systemGuid')}`).then( response => {
        
        const codeVerification = response.body // TODO: rever, mejorar sintaxis

        cy.get('[name="tempCode"]').type(codeVerification)
        cy.get('.login-screen-enter-code').click()
        cy.url().should('include', '/home')
      })
    }
    else {
      cy.contains('Cannot find any member by the Username and/or Password.')
    }
  })
})

Cypress.Commands.add('logout', () => {
  //TODO: mejorar selector
  cy.get('#collasible-nav-dropdown').click()
  cy.contains('Sign out').click()
  cy.url().should('include', '/login')
})

Cypress.Commands.add('filterProfileStatus', (status) => {

  
  // No hace falta desplegar el el select de Profile Status ya que por defecto se encuentra desplegado
  cy.contains('Status').should('be.visible')

  // TODO: rever multi-requests, evitar tantos .wait()
  // Necesario para evitar interceptar la primer request a search-paginated-users
  cy.wait(5000)

  cy.intercept("POST", "https://api-qa.carpedmdating.com/api/User/search-paginated-users").as('paginatedUsers');

  cy.get(`[name="${status}"]`).click();

  cy.wait('@paginatedUsers').then((interceptedRequest) => {

    const response = interceptedRequest.response.body.result;

    if (response) {
      const result = response.every(user => user.profileStatus.key === `${status}`)
      expect(result).to.equal(true);
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

  cy.contains('Membership Status').should('be.visible')

  cy.intercept('POST', "https://api-qa.carpedmdating.com/api/User/search-paginated-users").as('paginatedUsers');

  // TODO: eliminar if y else if
  if(status === 'DepositPayed'){
    cy.contains('Deposit Payed').click()
  } else if (status === 'ScheduledToCancel') {
    cy.contains('Scheduled to Cancel').click()
  } else {
    cy.contains(`${status}`).click()
  }

  cy.wait('@paginatedUsers').then(interception => {
    const response = interception.response.body.result
    if (response) {
      const result = response.every( user => user.membership.status === `${status}`)
      expect(result).to.be.true
    } else {
      cy.log("¡¡ NO DATA !!")
    }
  })
})

Cypress.Commands.add('filterPrimaryFiltersAge', () => {
  const minNumber = Math.floor(Math.random() * (99 - 0 + 1)) + 0
  const maxNumber = Math.floor(Math.random() * (99 - minNumber + 1)) + minNumber

  cy.contains('Primary Filters').click({force: true})

  cy.get('[placeholder="min"]').click({force: true}).type(minNumber)
  cy.get('[placeholder="max"]').click({force: true}).type(maxNumber)
})

Cypress.Commands.add('filterPrimaryFilterSexualPreference', (sexualPreference) => {
  cy.contains('Primary Filters').click({force: true})
  cy.contains(sexualPreference).click({force: true})
})

Cypress.Commands.add('filterPrimaryFiltersGender', (gender) => {

  cy.contains('Primary Filters').click({force: true})

  // cy.intercept('POST', "https://api-qa.carpedmdating.com/api/User/search-paginated-users").as('paginatedUsers');

  cy.contains(gender).click({force: true})

  // cy.wait('@paginatedUsers').then( interception => {
  //   const response = interception.response.body.result
  //   if (response) {
  //     const result = response.every( user => user.gender === `${gender}`)
  //     expect(result).to.be.true
  //   } else {
  //     cy.log("¡¡ NO DATA !!")
  //   }
  // })
})

Cypress.Commands.add('filterPrimaryFiltersEthnicity', (ethinicity) => {
  cy.contains('Primary Filters').click({force: true})
  cy.contains(ethinicity).click({force: true})
})

Cypress.Commands.add('filterPrimaryFiltersSeeking', (seeking) => {
  cy.contains('Primary Filters').click({force: true})
  cy.contains(seeking).click({force: true})
})