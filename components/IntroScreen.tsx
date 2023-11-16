import React, { useState } from "react";
import styles from "@/styles/IntroScreen.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { backgroundExit, backgroundStart, divExit, divStart, textMotion } from "@/animations/introScreen";
import AnimatedTextWord from "./utils/AnimatedTextWord";
import LanguageSelector from "./ui/LanguageSelector";
import { useDispatch, useSelector } from "react-redux";
import { setStartExitAnimation } from "@/redux/slices/animations";
import { useTranslation } from "next-i18next";
import CirclesBackground from "./ui/CirclesBackground";

const IntroScreen = () => {
  const { t: translate } = useTranslation('intro');
  const { push, locale } = useRouter();
  const dispatch = useDispatch();
  const { startExitAnimation } = useSelector((state: any) => state.animations);
  const [startAnimationEnded, setStartAnimationEnded] = useState(false);

  const backgroundMotion = startExitAnimation ? backgroundExit : backgroundStart;
  const divMotion = startExitAnimation ? divExit : divStart;

  const goToHome = () => {
    if(startAnimationEnded){
      dispatch(setStartExitAnimation(true));
      setTimeout(() => {
        push("/home/about", undefined, { locale });
        dispatch(setStartExitAnimation(false));
      },750);
    }
  }

  return (
    <>
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
              styles={{ fontSize: "1.1rem", fontWeight: 700, userSelect: "none" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default IntroScreen;
