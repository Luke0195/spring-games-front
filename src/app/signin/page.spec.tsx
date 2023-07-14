import React from 'react'
import { render, screen, type RenderResult } from '@testing-library/react'
import SignIn from './page'

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
    expect(heading.innerHTML).toBe(' Entre com o seu NickName')
  })
})
