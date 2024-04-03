import React from 'react'
import { motion } from 'framer-motion';

const about = ({data}) => {
return (
   <motion.div 
      initial={{y:"100%"}} 
      animate={{y:"0%"}} 
      transition={{duration: 1, ease: "easeInOut"}} 
      exit={{y:"-25%"}} 
      className='h-screen w-screen absolute top-0 left-0 bg-blue-100'>
        <main>
          <div className='my-96 mx-10'>
            <h1 className='text-6xl text-left'>About</h1>
            <p>{data && data.length > 0 && data[1].text}</p>
          </div>
        </main>
      </motion.div>
)
}

export default about