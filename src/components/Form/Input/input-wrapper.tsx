import React from 'react'

interface InputWrapperProps {
  children: React.ReactNode
}

export function InputWrapper({ children }: InputWrapperProps) {
  return (
    <div className="flex  items-center   w-96 h-11 border  border-gray-200 px-2 rounded bg-white colo">
      {children}
    </div>
  )
}
