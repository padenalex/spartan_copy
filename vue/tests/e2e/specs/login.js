describe('The Login Page', () => {
  it('it logs user in on form submission', () => {
    const { email, password } = {
      email: 'e2e@example.org',
      password: 'secret'
    }

    cy.visit('/auth/login')
    cy.get('input[name=email]').type(email)
    cy.get('input[name=password]').type(`${ password }{enter}`)
    cy.url().should('include', '/dashboard')
    cy.get('h1').should('contain', 'Overview')
    // @TODO: Ensure `access_token` is set.
  })
})
