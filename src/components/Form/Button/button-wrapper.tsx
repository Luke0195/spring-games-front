import { type ButtonHTMLAttributes } from 'react'

interface ButtonWrapperProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ButtonWrapper(props: ButtonWrapperProps) {
  return <button className={props.className} {...props}></button>
}
