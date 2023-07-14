import React, { type InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputContent(props: InputProps) {
  return (
    <input
      {...props}
      className="outline-none h-full bottom-0 flex-1 ml-2 text-gray-500 text-base"
    />
  )
}
