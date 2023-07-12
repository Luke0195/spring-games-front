import React from 'react'
import { render } from '@testing-library/react'
import Home from './page'

describe('App Component', () => {
  it('Ensure App Component be render correctly', () => {
    render(<Home />)
  })
})
