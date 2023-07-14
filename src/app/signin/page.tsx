import React from 'react'
import Link from 'next/link'
export default function SignIn() {
  return (
    <div className="w-full h-screen flex items-center justify-center align-middle">
      <div className="w-3/12  py-2 items-center justify-center align-middle bg-red-300">
        <h1> Entre com o seu NickName</h1>
        <form>
          <input type="text" placeholder="entre com o seu nickname" />
          <button> Entrar </button>
        </form>
        <Link href={'Não possui conta'}>
          <span> Não possui conta</span>
        </Link>
      </div>
    </div>
  )
}
