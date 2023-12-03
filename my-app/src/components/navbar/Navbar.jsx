import './navbar.scss'
import Sidebar from './sidebar/Sidebar'
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar />
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration: 0.5}}></motion.span>
        <div className="social">
          <a href="https://github.com/arrovain"> <img src='icons8-github.svg' alt=''/></a>
          <a href="mailto:arrovain@gmail.com"> <img src='icons8-mail.svg' alt=''/></a>
         
        </div>
      </div>
    </div>

  )
}

export default Navbar