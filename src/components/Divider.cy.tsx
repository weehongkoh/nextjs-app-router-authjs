import React from 'react'
import Divider from './Divider'

describe('<Divider />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Divider />)
  })
})