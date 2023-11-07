const URL_PORTAL_ADMIN_LOGIN = "https://admin-qa.carpedmdating.com/login"
const API = "https://api-qa.carpedmdating.com/api"
const SYSTEM_GUID = "d1e54e71-e486-4d85-96ad-fc2c2f07ca29"

const endpoints = {
  'get-tempcode': '/Auth/get-tempcode',
  'code': '/User/code/' //{email}/{systemGuid}
}

const email = "cuentatest123321cuentates.t@gmail.com"
const password = 'Test123#'
const emailError = 'email_error@gmail.com'
const passwordError = 'password error'

let codeVerification 

describe('Loguin Flow', () => {

  // beforeEach( ()=> {
  //   cy.visit(URL_PORTAL_ADMIN_LOGIN)
  // })


  //   it('Loguin email OK' , () => {
  //     cy.get('[placeholder="Email"]').click().type(email)
  //     cy.get('[placeholder="Password"]').click().type(password)

  //     //Declaro la intercepcion a realizar y creo un alias
  //     cy.intercept('POST', API + endpoints["get-tempcode"]).as('getTempCode')

  //     //Accion que dispara la solicitud
  //     cy.get('.login-submit-button').click()
      
  //     //Espero que se complete la solicitud interceptada y hago uso del objecto -> interception
  //     cy.wait('@getTempCode').then((interception) => {
  //       expect(interception.response.body.authType).to.equal('Success')
  //     })

  //     //Solicitud GET para obtener el code-verification
  //     cy.request('GET', API + endpoints.code + email + '/' + SYSTEM_GUID).then((response) => {
  //       expect(response.body)
  //       codeVerification = response.body
  //       console.log(codeVerification)

  //       //Ingreso el codigo de verificacion para validar el login
  //       cy.get('[placeholder="Enter Code"]').type(codeVerification)
  //       //Boton de Login
  //       cy.get('.login-screen-enter-code').click()
  //     })
  //   })

    it('comando de cypress OK', () =>{
      cy.login(email, password)
    })

    it('comando de cypress NOK', () =>{
      cy.login(emailError, password)
    })

    it('comando cypress NOK', () => {
      cy.login(email, passwordError)
    })

  
    
    // it('Loguin email NOK' , () => {
    //   cy.get('[placeholder="Email"]').click().type(emailError)
    //   cy.get('[placeholder="Password"]').click().type(passwordError)

    //   cy.intercept('POST', API + endpoints["get-tempcode"]).as('getTempCode')

    //   cy.get('.login-submit-button').click()

    //   cy.wait('@getTempCode').then((interception) => {
    //     expect(interception.response.body.authType).to.equal('Failed')
    //   })
    // })

    // it('Loguin password NOK' , () => {
    //   cy.get('[placeholder="Email"]').click().type(emailError)
    //   cy.get('[placeholder="Password"]').click().type(passwordError)

    //   cy.intercept('POST', API + endpoints["get-tempcode"]).as('getTempCode')

    //   cy.get('.login-submit-button').click()

    //   cy.wait('@getTempCode').then((interception) => {
    //     expect(interception.response.body.authType).to.equal('Failed')
    //   })
    // })
    

  })