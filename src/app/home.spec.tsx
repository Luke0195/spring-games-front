import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './page'

describe('App Component', () => {
  it('Ensure App Component be render correctly', () => {
    render(<Home />)
  })

  it('Ensure that navigation button to be enabled', () => {
    render(<Home />)
    const button = screen.getByRole('button', {
      name: /entrar/i,
    }) as HTMLButtonElement
    expect(button.disabled).toBe(false)
  })
})
