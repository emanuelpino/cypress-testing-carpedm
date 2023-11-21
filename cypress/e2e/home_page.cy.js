const email = "cuentatest123321cuentates.t@gmail.com"
const password = 'Test123#'
const emailError = 'email_error@gmail.com'
const passwordError = 'password error'

let codeVerification 

describe('Loguin Flow', () => {

    it.only('comando de cypress OK', () =>{
      cy.login(email, password)
    })

    it('comando de cypress NOK', () =>{
      cy.login(emailError, password)
    })

    it('comando cypress NOK', () => {
      cy.login(email, passwordError)
    })

  })