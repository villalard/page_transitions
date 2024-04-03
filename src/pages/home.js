import { motion } from 'framer-motion';

const home = ({data}) => {

  return (
    <>
      <motion.div 
      initial={{y:"100%"}} 
      animate={{y:"0%"}} 
      transition={{duration: 1, ease: "easeInOut"}} 
      exit={{y:"-25%"}} 
      className='h-screen w-screen absolute top-0 left-0 bg-green-100'>
        <main className='my-96 mx-10'>
          <div>
            <h1 className='text-6xl text-left'>Home</h1>
          </div>
         
             <p>{(data && data.length > 0) && data[0].text}</p>
            
          
        </main>
      </motion.div>
    </>
  )
}

export default home