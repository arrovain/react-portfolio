import React from 'react'
import './anasayfa.scss'
import {motion} from 'framer-motion'


const variants = {
  initial:{
      y:300,
      opacity:0
  },
  animate:{
      y:0,
      opacity:1,
      transition:{
          duration:0.5,
          staggerChildren: 0.1,
      },
  },
};


const Anasayfa = () => {
  return (
   <motion.div className='anasayfa' variants={variants} initial='initial' whileInView='animate'>
    <motion.div className="wrapper" variants={variants}>
    <motion.div className="textContainer" variants={variants}>
      <h2>Mahmut İÇME</h2>
      <h1>Frontend Developer</h1>
      <p>
        Çoğunlukla React ve Tailwind kullanarak web siteleri ve uygulamaları geliştiren bir frontend developer.
      </p>
      <motion.div variants={variants} className="buttons">
        <motion.a className='button' href="https://github.com/arrovain" >Projelerime Ulaşın</motion.a>
        <motion.a href="mailto:arrovain@gmail.com" className='button'>İletişim</motion.a>
        <motion.img variants={variants} initial='initial' whileInView='animate' className='yazilimci-img' src='5969474.png' alt=''></motion.img>
      </motion.div>
      
    </motion.div>
    </motion.div>  

  
   
    </motion.div>
 

  )
}

export default Anasayfa