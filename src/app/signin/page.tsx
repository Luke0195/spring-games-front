'use client'
import { InputRoot, ButtonRoot } from '@/components'
import { FiMail, FiLogIn } from 'react-icons/fi'
import React from 'react'
import Link from 'next/link'

export default function SignIn() {
  return (
    <div className="w-full h-screen flex items-center justify-center align-middle">
      <div className="w-3/12  py-2 items-center  justify-center align-middle ">
        <h1 className="text-gray-400 font-semibold text-2xl w-full text-center py-2">
          Entre com o seu Login
        </h1>
        <form className="flex flex-col justify-center items-center py-3">
          <InputRoot.InputWrapper>
            <InputRoot.InputIcon icon={FiMail} color="#ccc" size={20} />
            <InputRoot.InputContent placeholder="Entre com o seu Nick Name" />
          </InputRoot.InputWrapper>
          <ButtonRoot.ButtonWrapper className="w-96 h-11 bg-purple-600 rounded text-white my-6">
            <ButtonRoot.ButtonContent> Salvar </ButtonRoot.ButtonContent>
          </ButtonRoot.ButtonWrapper>
          <Link
            href={'Não possui conta'}
            className="flex items-center hover:text-gray-700">
            <span className="px-2 text-gray-400 "> Não possui conta</span>
            <FiLogIn className="text-gray-400" />
          </Link>
        </form>
      </div>
    </div>
  )
}
