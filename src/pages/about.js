import React from 'react'
import { motion } from 'framer-motion';

const about = () => {
return (
    <motion.div 
    initial={{y:"100%"}} 
      animate={{y:"0%"}} 
      transition={{duration: 1, ease: "easeInOut"}} 
      exit={{y:"-25%"}} 
    style={{ backgroundColor: 'red', height: '100vh', width: '100vw', position:'absolute', top:0, left:0}}>
        <div style={{margin:'30% 50%'}}><h1>About</h1></div>
        </motion.div>
)
}

export default about