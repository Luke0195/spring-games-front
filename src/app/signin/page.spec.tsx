import React from 'react'
import { render } from '@testing-library/react'
import SignIn from './page'

describe('SignIn Page', () => {
  it('Should render component correctly', () => {
    render(<SignIn />)
  })
})
