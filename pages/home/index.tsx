import styles from '@/styles/Home.module.css'
import React from 'react'
import { motion } from 'framer-motion'

const HomeScreen = () => {
  return (
    <motion.div 
      className={styles.mainDiv}
      initial={{ background: "radial-gradient(circle,rgba(2, 0, 28, 0) 0%,rgba(74, 134, 186, 0.1) 45%,rgba(3, 51, 73, 1) 90%)" }}
      animate={{
        background: "radial-gradient(circle,rgba(2, 0, 28, 0) 0%,rgba(74, 134, 186, 0.1) 100%,rgba(3, 51, 73, 0.5) 100%)"
      }}
      transition={{ duration: 0.75 }}
    >
      
    </motion.div>
  )
}

export default HomeScreen