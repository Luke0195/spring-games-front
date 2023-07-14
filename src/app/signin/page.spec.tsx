import React from 'react'
import { render, screen } from '@testing-library/react'
import SignIn from './page'

describe('SignIn Page', () => {
  it('Should render component correctly', () => {
    render(<SignIn />)
  })

  it('Should render heading 1 with correct value', () => {
    render(<SignIn />)
    const heading = screen.getByRole('heading', {
      level: 1,
    })
    expect(heading.innerHTML).toBe(' Entre com o seu NickName')
  })
})
