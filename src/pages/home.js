import React from 'react'
import { motion } from 'framer-motion';
import '../output.css'

const home = () => {
  return (
    <>
    
      <motion.div 
      initial={{y:"100%"}} 
      animate={{y:"0%"}} 
      transition={{duration: 1, ease: "easeInOut"}} 
      exit={{y:"-25%"}} 
      style={{ backgroundColor: 'blue', height: '100vh', width: '100vw', position:'absolute', top:0, left:0}}>
      {/* Your home page content */}
      <div className='text-white'><h1>Home</h1></div>
      </motion.div>
    
    </>
  )
}

export default home