'use client'

import React from 'react'
import { Form } from './components'

export default function SignIn() {
  return (
    <div className="w-full h-screen flex items-center justify-center align-middle">
      <div className="w-3/12  py-2 items-center  justify-center align-middle ">
        <h1 className="text-gray-400 font-semibold text-2xl w-full text-center py-2">
          Entre com o seu Login
        </h1>
        <Form />
      </div>
    </div>
  )
}
