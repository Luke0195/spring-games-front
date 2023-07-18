describe('Home ', () => {
  it('Ensure user visit baseurl ', () => {
    cy.visit('http://localhost:3000')
  })

  it('Ensure navigate button to be enabled', () => {
    cy.visit('http://localhost:3000')
    cy.get('button').should('not.have.attr', 'disabled')
  })
})
