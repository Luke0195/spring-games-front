'use client'
import { Logo } from '@/components/Logo'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home(): React.ReactNode {
  return (
    <>
      <div className=" bg-gradient-to-bl from-white to-purple-400 h-screen flex flex-col  justify-center relative">
        <div className="w-3/5 m-auto bg-red p-2 flex align-middle justify-between">
          <motion.div
            className="h-100 flex flex-col align-middle justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: 'easeIn',
              duration: 2,
            }}>
            <div className="  flex flex-col items-start justify-center px-10 ">
              <Logo />
              <strong className="py-2 text-lg text-neutral-100">
                Hello Stranger!
              </strong>
              <p className="text-sm text-neutral-50">
                Utilize os recursos e tenha a melhor experiência com os seus
                jogos favoritos.
              </p>
              <Link href="/signin">
                <button className="p-3 bg-purple-600 text-center text-base w-52 h-12 rounded-md text-white font-semibold my-3 hover:bg-purple-700">
                  Entrar
                </button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className=" mix-blend-multiply"
            initial={{ x: 0, opacity: 0.1 }}
            animate={{ x: -80, opacity: 1 }}
            transition={{
              ease: 'easeOut',
              duration: 1,
            }}>
            <Image
              src={'/img/cybersport_02.jpg'}
              width={400}
              height={600}
              alt="imagem de uma um usuário"
              className=" mix-blend-multiply"
            />
          </motion.div>
        </div>
      </div>
    </>
  )
}
