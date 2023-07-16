import React from 'react'

import SignIn from './page'
import { render, screen, type RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom'

const makeSut = (): RenderResult => {
  return render(<SignIn />)
}

describe('SignIn Page', () => {
  it('Should render component correctly', () => {
    makeSut()
  })

  it('Should render heading 1 with correct value', () => {
    makeSut()
    const heading = screen.getByRole('heading', {
      level: 1,
    })
    expect(heading.innerHTML).toBe('Entre com o seu Login')
  })

  it('Shoulder render logo be in signin page', () => {
    makeSut()
    const logoComponent = screen.getByText(/gamespot/i)
    expect(logoComponent).toBeInTheDocument()
  })

  it('Should  start signin form with initial values', () => {
    makeSut()
    const input = screen.getByPlaceholderText(
      /entre com o seu nick name/i
    ) as HTMLInputElement
    const button = screen.getByRole('button') as HTMLButtonElement
    expect(input.innerHTML).toBe('')
    expect(input.defaultValue).toBe('')
    expect(button.disabled).toBe(true)
  })
})
