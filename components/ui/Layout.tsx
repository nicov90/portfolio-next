import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/Layout.module.css";
import LanguageSelector from "./LanguageSelector";
import { useRouter } from "next/router";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { divExitConOpacity, divStartConOpacity } from "@/animations/general";
import CirclesBackground from "./CirclesBackground";

const Layout = ({ title = 'Nicolas Valdez', children }: { title: string, children: React.ReactNode }) => {
  const { t: translate } = useTranslation('common');
  const [startExitAnimation, setStartExitAnimation] = useState(false);

  const divMotion = startExitAnimation ? divExitConOpacity : divStartConOpacity;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title ? title + ' | Nicolas Valdez' : title}</title>
      </Head>
      <CirclesBackground />
        <motion.div 
          className={styles.mainDiv}
          {...divMotion}
        >
          <motion.div 
            className={styles.sideBarDiv}
          >
            <div className={styles.nameDiv}></div>
            <ul className={styles.sectionDiv}>
              {
                ["About me", "Experience", "Skills", "Projects", "Contact"].map((item, index) => 
                  <motion.li 
                    key={index} 
                    className={styles.sectionElements}
                    whileHover={{
                      color: "rgba(0, 150, 220, 1)",
                      transition: {
                        duration: 0.2,
                      },
                    }}
                    style={{
                      color: item === title ? "rgba(0, 150, 220, 1)" : "inherit",
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
            <div className={styles.linksDiv}></div>
          </motion.div>
          <motion.div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              width: "100%", 
              maxHeight: "100vh", 
              overflow: "auto",
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              padding: 25,
            }}>
            <LanguageSelector />
            {children}
          </motion.div>
        </motion.div>
    </>
  );
};

export default Layout;
