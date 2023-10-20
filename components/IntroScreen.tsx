import React from "react";
import styles from "@/styles/IntroScreen.module.css";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRouter } from "next/router";

const IntroScreen = () => {
  const router = useRouter();

  return (
    <motion.div
      className={styles.mainDiv}
      initial={{ background: "radial-gradient(circle,rgba(2, 0, 28, 0) 0%,rgba(74, 134, 186, 0.1) 30%,rgb(3, 51, 73) 80%)" }}
      animate={{
        background: "radial-gradient(circle,rgba(2, 0, 28, 0) 0%,rgba(74, 134, 186, 0.1) 45%,rgb(3, 51, 73) 90%)"
      }}
      transition={{ duration: 0.75 }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 6,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.h5 
            style={{ fontWeight: 200, userSelect: "none" }} 
            initial={{ y: -50 }}
            exit={{
              y: 50,
            }}
            transition={{
              type: "spring",
              bounce: 0.7,
              duration: 1.75,
            }}
            animate={{
              y: 0,
            }}
          >
            Hi, I&#39;m&#160;
          </motion.h5>
          <motion.h5 
            className={styles.myName}
            initial={{ y: -50 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              bounce: 0.7,
              duration: 1.75,
            }}
            animate={{
              y: 0,
            }}
          >
            Nicolas Valdez
          </motion.h5>
        </div>
        <motion.p 
          style={{ fontSize: 24, fontWeight: 200, userSelect: "none" }}
          initial={{ y: -50 }}
          transition={{
            type: "spring",
            bounce: 0.7,
            duration: 1.75,
          }}
          animate={{
            y: 0,
          }}
        >
          Web Developer
        </motion.p>
      </div>
      <div>
        <button onClick={() => router.push("/home")}>Entrar al Aura</button>
      </div>
    </motion.div>
  );
};

export default IntroScreen;
