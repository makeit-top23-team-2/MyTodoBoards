/* eslint-disable */
describe('Login Page', () => {
  it('should creates a board', () => {
    cy.visit('http://localhost:3000/manage-board/khriztianmoreno')

    // cy.get('.login__email').type('khriztianmoreno@gmail.com')
    // cy.get('.login__password').type('123456')

    // cy.get('.login__button').click()


    // your code here
    cy.get('.container__article__a').click()
  })
})
