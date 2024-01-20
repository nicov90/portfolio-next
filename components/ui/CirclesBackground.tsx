import React from 'react'
import { motion } from "framer-motion";
import styles from "@/styles/Layout.module.css";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const CirclesBackground = () => {
  const { pathname } = useRouter();
  const { startExitAnimation } = useSelector((state: any) => state.animations);

  return (
    <>
      <motion.div
        className={`${styles.coloredCircles} ${styles.first}`}
        initial={{ transform: 'translateX(0) rotate(0)', opacity: pathname === "/" ? 1 : 0 }}
        animate={{
          transform: 'translateY(50px) scale(0.75) rotate(-15deg)',
          opacity: startExitAnimation ? 0 : 1,
        }}
        transition={{ 
          ease: [0.47, 0, 0.745, 0.715], 
          transform: {
            duration: startExitAnimation ? 0.75 : 4.25, 
            repeat: Infinity, 
            repeatType: "reverse",
          },
          opacity: {
            duration: startExitAnimation ? 2 : 0.8,
            delay: 0.25,
          }
        }}
      />
      <motion.div
        className={`${styles.coloredCircles} ${styles.second}`} 
        initial={{ transform: 'translateX(0) rotate(0)', opacity: pathname === "/" ? 1 : 0 }}
        animate={{
          transform: 'translateX(-225px) scale(1.1) scaleX(1.2) rotate(-15deg)',
          opacity: startExitAnimation ? 0 : 1,
        }}
        transition={{ 
          ease: [0.47, 0, 0.745, 0.715], 
          transform: {
            duration: startExitAnimation ? 0.75 : 4.25, 
            repeat: Infinity, 
            repeatType: "reverse",
          },
          opacity: {
            duration: startExitAnimation ? 2 : 0.8,
            delay: 0.25,
          }
        }}
      />
    </>
  )
}

export default CirclesBackground