import React from 'react';
import { motion } from 'framer-motion';
import { animationThree } from '../animations';

function Services() {
  return (
    <motion.div
      className="services-body"
      initial="out"
      animate="end"
      exit="out"
      variants={animationThree}
      transition="spring"
    ></motion.div>
  );
}

export default Services;
