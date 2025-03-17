import React from 'react'
import Alert from './Alert'

describe('<Alert />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Alert />)
  })
})