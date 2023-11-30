import React, { useState } from 'react'
import './Iletisim.scss'
import {animate, motion} from 'framer-motion'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';



const variants = {
    initial:{
        y:500,
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



const Iletisim = () => {
    const ref = useRef();
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6czffew', 'template_1knymnb', formRef.current, 'J2mcZDWFKDHMjUulu')
          .then((result) => {
              setSuccess(true);
          }, (error) => {
              setError(true);
          });
      };
  return (
    <motion.div className='iletisim' variants={variants} initial='initial' whileInView='animate'>
        <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>Benimle İletişime Geçin</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>Mail</h2>
                <span>arrovain@gmail.com</span>
            </motion.div>
            <div className="item">
                <h2>Telefon</h2>
                <span>0551 945 94 60</span>
            </div>
        </motion.div>
        
        <motion.div className="formcontainer">
            <motion.form ref={formRef}
            onSubmit={sendEmail}>
                <input type="text" required placeholder='İsminiz' name='name'/>
                <input type="text" required placeholder='Emailiniz' name='email'/>
                <textarea rows={8} placeholder='Mesajınız' name='message'/>
                <button>Gönder</button>
                {error && 'Bir hata oldu'}
                {success && 'Başarılı bir şekilde iletildi'}
            </motion.form>
        </motion.div>
    </motion.div>
  )
}

export default Iletisim