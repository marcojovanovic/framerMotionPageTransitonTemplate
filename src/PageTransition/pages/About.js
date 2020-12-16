import React from 'react';

import { motion } from 'framer-motion';
import { animationTwo } from '../animations';

function About() {
  return (
    <motion.div
      className="about-body"
      initial="out"
      animate="in"
      exit="out"
      variants={animationTwo}
    ></motion.div>
  );
}

export default About;
