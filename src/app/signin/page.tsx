'use client'
import * as animations from '@/shared/animations'
import { Logo } from '@/components'
import { Form } from './components'
import { motion } from 'framer-motion'

import React from 'react'

export default function SignIn() {
  return (
    <div className="w-full h-screen flex items-center justify-center align-middle">
      <div className="w-3/12  py-2 flex-col align-middle items-center justify-center ">
        <motion.div {...animations.animationMovingDownWithOpactity}>
          <div className="w-full flex items-center justify-center">
            <Logo />
          </div>
        </motion.div>
        <motion.div {...animations.animationMovingRigthWithOpactity}>
          <h1 className="text-purple-300  font-semibold text-xl w-full text-center py-2 ">
            Entre com o seu Login
          </h1>
        </motion.div>
        <motion.div {...animations.showContentWithOpacity}>
          <Form />
        </motion.div>
      </div>
    </div>
  )
}
