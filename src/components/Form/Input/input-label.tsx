export interface InputLabelProps {
  label: string
}

export function InputLabel({ label }: InputLabelProps) {
  return <label htmlFor={label}>{label}</label>
}
