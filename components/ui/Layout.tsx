import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/Layout.module.css";
import LanguageSelector from "./LanguageSelector";
import { useRouter } from "next/router";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { divExitConOpacity, divStartConOpacity } from "@/animations/general";
import CirclesBackground from "./CirclesBackground";
import { Box, Typography } from "@mui/material";
import AnimatedTextCharacter from "../utils/AnimatedTextCharacter";
import AnimatedTextWord from "../utils/AnimatedTextWord";

const Layout = ({ title = 'Nicolas Valdez', children }: { title: string, children: React.ReactNode }) => {
  const { t: translate } = useTranslation('common');
  const [startExitAnimation, setStartExitAnimation] = useState(false);

  const divMotion = startExitAnimation ? divExitConOpacity : divStartConOpacity;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title ? title + ' | Nicolas Valdez' : title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='use-credentials'/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;900&display=swap" rel="stylesheet"></link>
      </Head>
      <CirclesBackground />
      <motion.div 
        className={styles.mainDiv}
        {...divMotion}
      >
        <Box className={styles.topBarDiv}>
          {/* <Typography 
            variant="h4" 
            fontSize="1.7rem" 
            fontWeight={700} 
            fontFamily="Poppins" 
            ml={4} 
            style={{ 
              cursor: "pointer" 
            }}
          >
            Nicolás Valdez
          </Typography> */}
          <AnimatedTextWord 
            text="Nicolás Valdez" 
            delay={16}
            speed={0.4}
            stylesDiv={{
              marginLeft: 32,
              cursor: "pointer",
            }}
            stylesWord={{ 
              fontSize: "1.7rem", 
              fontWeight: 700, 
              fontFamily: "Poppins",
            }}
            whileHoverStyles={{ color: "#0099ca", transition: { duration: 0.4 }}}
          />
          <Box>
            <ul className={styles.navDiv}>
              {
                ["About Me", "Experience", "Skills", "Projects", "Contact"].map((item, index) => 
                  <motion.li 
                    key={index} 
                    className={styles.navElements}
                    whileHover={{
                      backgroundColor: "white",
                    }}
                    style={{
                      color: item === title ? "rgba(0, 150, 220, 1)" : "inherit",
                      transition: "background-color 500ms ease",
                    }}
                    onClick={() => {
                      if(item !== title){
                        let url = item === "About me" ? "/home/about" : `/home/${item.toLowerCase()}`;
                        router.push(url);
                      }
                    }}
                  >
                    {translate(item)}
                  </motion.li>
                )
              }
            </ul>
            <LanguageSelector homePage/>
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

export default Layout;
