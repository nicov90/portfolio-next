import React, { useState } from "react";
import styles from "@/styles/IntroScreen.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { backgroundExit, backgroundStart, divExit, divStart, textMotion } from "@/animations/introScreen";
import AnimatedTextWord from "./utils/AnimatedTextWord";
import LanguageSelector from "./ui/LanguageSelector";
import { useTranslation } from "next-i18next";
import CirclesBackground from "./ui/CirclesBackground";
import ThemeToggle from "./ui/ThemeToggle";

const IntroScreen = () => {
  const { t: translate } = useTranslation('intro');
  const { push, locale } = useRouter();
  const [startExitAnimation, setStartExitAnimation] = useState(false);
  const [startAnimationEnded, setStartAnimationEnded] = useState(false);

  const backgroundMotion = startExitAnimation ? backgroundExit : backgroundStart;
  const divMotion = startExitAnimation ? divExit : divStart;

  const goToHome = () => {
    if(startAnimationEnded){
      setStartExitAnimation(true);
      setTimeout(() => {
        push("/home", undefined, { locale });
      },750);
    }
  }

  return (
    <>
      {/* <ThemeToggle /> */}
      <LanguageSelector />
      <CirclesBackground />
      <motion.div 
        className={styles.mainDiv} 
        {...backgroundMotion}
        transition={startExitAnimation ? { duration: 0.75 } : { duration: 1, ease: "easeInOut" }}
        onClick={goToHome}
        onAnimationComplete={() => setStartAnimationEnded(true)}
      >
        <motion.div
          style={{
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
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
              {translate("hi im")}&#160;
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
            {translate("jobName")}
          </motion.p>
          <motion.div {...divMotion} className={styles.clickDiv}>
            <AnimatedTextWord
              text={translate("clickTxt")}
              delay={25}
              speed={0.75}
              stylesWord={{ fontSize: "1.1rem", fontWeight: 700, userSelect: "none" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default IntroScreen;
