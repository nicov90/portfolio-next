import React, { useState } from "react";
import styles from "@/styles/IntroScreen.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { backgroundExit, backgroundStart, divExit, divStart, textMotion } from "@/animations/introScreen";
import AnimatedTextWord from "./utils/AnimatedTextWord";
import { Select } from "antd";
import Image from "next/image";

const IntroScreen = () => {
  const router = useRouter();
  const [startExitAnimation, setStartExitAnimation] = useState(false);
  const [startAnimationEnded, setStartAnimationEnded] = useState(false);

  const backgroundMotion = startExitAnimation ? backgroundExit : backgroundStart;
  const divMotion = startExitAnimation ? divExit : divStart;

  const goToHome = () => {
    if(startAnimationEnded){
      setStartExitAnimation(true);
      setTimeout(() => {
        router.push("/home");
      },750);
    }
  }

  return (
    <>
      <motion.div {...divMotion} className="languageSelectorDiv">
        <motion.div>
          <Select defaultValue="English">
            <Select.Option value="English">
              <Image src="/assets/ENG.png" width={32} height={32} alt="English" style={{ marginRight: 6 }}/>
              English
            </Select.Option>
            <Select.Option value="Español">
              <Image src="/assets/SPA.png" width={32} height={32} alt="Español" style={{ marginRight: 6 }}/>
              Español
            </Select.Option>
          </Select>
        </motion.div>
      </motion.div>
      <motion.div 
        className={styles.mainDiv} 
        {...backgroundMotion}
        transition={startExitAnimation ? { duration: 0.75 } : { duration: 1, ease: "easeInOut" }}
        onClick={goToHome}
        onAnimationComplete={() => setStartAnimationEnded(true)}
      >
        <motion.div
          style={{
            position: "relative",
            flexDirection: "column",
            gap: 6,
          }}
          {...divMotion}
        >
          <div>
            <motion.h5
              className={styles.hiImTxt}
              {...textMotion}
            >
              Hi, I&#39;m&#160;
            </motion.h5>
            <motion.h5
              className={styles.myName}
              {...textMotion}
            >
              Nicolas Valdez
            </motion.h5>
          </div>
          <motion.p
            style={{ fontSize: 24, fontWeight: 200, userSelect: "none" }}
            {...textMotion}
          >
            Web Developer
          </motion.p>
          <motion.div {...divMotion} className={styles.clickDiv}>
            <AnimatedTextWord
              text="Click anywhere"
              delay={25}
              speed={0.75}
              styles={{ fontSize: "1.1rem", fontWeight: 700, userSelect: "none" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default IntroScreen;
