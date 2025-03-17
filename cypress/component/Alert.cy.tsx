import React from 'react'
import Alert from '../../src/components/Alert'

describe('<Alert />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Alert />)
    cy.contains('Login Credential')
  })
})