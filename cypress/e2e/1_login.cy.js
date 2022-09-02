/* eslint-disable */
describe('Login Page', () => {
  it('should login', () => {
    cy.visit('http://localhost:3000/login')

    cy.get('.login__email').type('khriztianmoreno@gmail.com')
    cy.get('.login__password').type('123456')

    cy.get('.login__button').click()
  })
})
