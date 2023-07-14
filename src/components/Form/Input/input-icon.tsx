import React, { type ElementType } from 'react'

interface InputIconProps {
  size: number
  icon: ElementType
  color: string
}

export function InputIcon({ icon: Icon, ...rest }: InputIconProps) {
  return <Icon {...rest} />
}
