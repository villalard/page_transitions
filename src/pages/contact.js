import React from 'react'
import { motion } from 'framer-motion';

const contact = () => {
  return (
    <motion.div 
    initial={{y:"100%"}} 
      animate={{y:"0%"}} 
      transition={{duration: 1, ease: "easeInOut"}}
      exit={{y:"-25%"}} 
    style={{ backgroundColor: 'green', height: '100vh', width: '100vw', position:'absolute', top:0, left:0}}>
      <div style={{margin:'30% 50%'}}><h1>Contact</h1></div>
      </motion.div>
  )
}

export default contact