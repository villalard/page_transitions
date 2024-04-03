import React from 'react'
import { motion } from 'framer-motion';

const contact = ({data}) => {
  return (
    <motion.div 
      initial={{y:"100%"}} 
      animate={{y:"0%"}} 
      transition={{duration: 1, ease: "easeInOut"}} 
      exit={{y:"-25%"}} 
      className='h-screen w-screen absolute top-0 left-0 bg-red-100'>
        <main>
          <div className='my-96 mx-10'>
            <h1 className='text-6xl text-left'>Contact</h1>
            <p>{data && data.length > 0 && data[2].text}</p>
          </div>
        </main>
      </motion.div>
  )
}

export default contact