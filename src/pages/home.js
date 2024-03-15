import React from 'react'
import { motion } from 'framer-motion';
import { margin } from '@mui/system';

const home = () => {
  return (
    <>
    
      <motion.div 
      initial={{y:"100%"}} 
      animate={{y:"0%"}} 
      transition={{duration: 1, ease: "easeInOut"}} 
      exit={{y:"-100%"}} 
      style={{ backgroundColor: 'blue', height: '100vh', width: '100vw', position:'absolute', top:0, left:0}}>
      {/* Your home page content */}
      <div style={{margin:'30% 50%'}}><h1>Home</h1></div>
      </motion.div>
    
    </>
  )
}

export default home