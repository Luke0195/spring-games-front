'use client'
import React from 'react'
import { FiMail } from 'react-icons/fi'
import { InputRoot } from '@/components/Form/Input'
import Link from 'next/link'

export default function SignIn() {
  const [disabled, setDisabled] = React.useState<boolean>(true)

  return (
    <div className="w-full h-screen flex items-center justify-center align-middle">
      <div className="w-3/12  py-2 items-center justify-center align-middle bg-red-300">
        <h1> Entre com o seu NickName</h1>
        <form>
          <InputRoot.InputWrapper>
            <InputRoot.InputIcon icon={FiMail} color="#ccc" size={20} />
            <InputRoot.InputContent placeholder="Entre com o seu Nick Name" />
          </InputRoot.InputWrapper>
          <input type="text" placeholder="entre com o seu nickname" />
          <button
            disabled={disabled}
            onClick={() => {
              setDisabled((prev) => !prev)
            }}>
            Entrar
          </button>
        </form>
        <Link href={'Não possui conta'}>
          <span> Não possui conta</span>
        </Link>
      </div>
    </div>
  )
}
