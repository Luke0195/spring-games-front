import Image from 'next/image'
import Link from 'next/link'
import * as BsIcons from 'react-icons/bs'

export default function Home(): React.ReactNode {
  return (
    <>
      <div className=" bg-gradient-to-bl from-white to-purple-400 h-screen flex flex-col  justify-center relative">
        <div className="w-3/5 m-auto bg-red p-2 flex align-middle justify-between">
          <div className="  flex flex-col items-start justify-center px-10 ">
            <h2 className="text-4xl text-purple-500  font-bold uppercase  align-middle py-0 flex items-center">
              GameSpot <BsIcons.BsController size={45} className="pl-2" />
            </h2>
            <strong className="py-2 text-lg text-neutral-100">
              Hello Stranger!
            </strong>
            <p className="text-sm text-neutral-50">
              Utilize os recursos e tenha a melhor experiência com os seus jogos
              favoritos.
            </p>
            <Link href="/signin">
              <button className="p-3 bg-purple-600 text-center text-base w-52 h-12 rounded-md text-white font-semibold my-3 hover:bg-purple-700">
                Entrar
              </button>
            </Link>
          </div>

          <Image
            src={'/img/cybersport_02.jpg'}
            width={400}
            height={600}
            alt="imagem de uma um usuário"
            className=" mix-blend-multiply"
          />
        </div>
      </div>
    </>
  )
}
