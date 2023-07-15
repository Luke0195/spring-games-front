import { InputRoot, ButtonRoot } from '@/components/Form'
import { FiMail, FiLogIn } from 'react-icons/fi'
import Link from 'next/link'

export function Form() {
  return (
    <form className="flex flex-col justify-center items-center py-3">
      <InputRoot.InputWrapper>
        <InputRoot.InputIcon icon={FiMail} color="#ccc" size={20} />
        <InputRoot.InputContent placeholder="Entre com o seu Nick Name" />
      </InputRoot.InputWrapper>
      <ButtonRoot.ButtonWrapper
        className="w-96 h-11 bg-purple-600 rounded text-white my-6 disabled:bg-gray-300 cursor-not-allowed"
        disabled={true}>
        <ButtonRoot.ButtonContent> Salvar </ButtonRoot.ButtonContent>
      </ButtonRoot.ButtonWrapper>
      <Link
        href={'Não possui conta'}
        className="flex items-center hover:text-gray-700">
        <span className="px-2 text-gray-400 "> Não possui conta</span>
        <FiLogIn className="text-gray-400" />
      </Link>
    </form>
  )
}
