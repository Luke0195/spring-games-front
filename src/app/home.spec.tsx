import Home from './page'
import { render, screen, type RenderResult } from '@testing-library/react'
import React from 'react'

interface SutTypes {
  sut: RenderResult
}

const makeSut = (): SutTypes => ({
  sut: render(<Home />),
})

describe('App Component', () => {
  it('Ensure App Component be render correctly', () => {
    makeSut()
  })

  it('Ensure that navigation button to be enabled', () => {
    makeSut()
    const button = screen.getByRole('button', {
      name: /entrar/i,
    }) as HTMLButtonElement
    expect(button.disabled).toBe(false)
  })
})
