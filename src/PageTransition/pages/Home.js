import React from 'react'
import { motion } from 'framer-motion';

import { animationOne, transition } from '../animations';

function Home() {
  return (
    <motion.div 
    className='home-body'
    initial='out'
    animate='in'
    exit='out'
    variants={animationOne}
    transition={transition}
    
    
    >
      
    </motion.div>
  )
}

export default Home
