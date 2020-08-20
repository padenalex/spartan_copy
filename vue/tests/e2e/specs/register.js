describe('The Register Page', () => {
  it('it registers user on form submission', () => {
    const { name, email, password } = {
      name: 'E2E',
      email: 'e2e@example.org',
      password: 'secret'
    }

    cy.visit('/auth/register')
    cy.get('input[name=name]').type(name)
    cy.get('input[name=email]').type(email)
    cy.get('input[name=password]').type(`${ password }{enter}`)
    cy.url().should('include', '/login')
    cy.get('h1').should('contain', 'Sign in to Swish')
    // @TODO: Delete user from database through endpoint or use separate testing db.
  })
})
