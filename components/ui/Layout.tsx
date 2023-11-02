import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/Layout.module.css";
import LanguageSelector from "./LanguageSelector";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { divExitConOpacity, divStartConOpacity } from "@/animations/general";
import CirclesBackground from "./CirclesBackground";

const Layout = ({ title = 'Nicolas Valdez', children }: { title: string, children: React.ReactNode }) => {
  const { t: translate } = useTranslation('common');
  const { startExitAnimation } = useSelector((state: any) => state.animations);

  const divMotion = startExitAnimation ? divExitConOpacity : divStartConOpacity;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title ? title + ' | Nicolas Valdez' : title}</title>
      </Head>
      <CirclesBackground />
      {/* <motion.div
        className={styles.mainDiv}
        animate={{
          background:
            "radial-gradient(circle,rgba(2, 0, 28, 0) 0%,rgba(74, 134, 186, 0.1) 100%,rgba(3, 51, 73, 0.5) 100%)",
        }}
      > */}
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
                      color: "rgba(0, 100, 180, 1)",
                      transition: {
                        duration: 0.2,
                      },
                    }}
                    onClick={() => router.push(`/${item.toLowerCase()}`)}
                  >
                    {translate(item)}
                  </motion.li>
                )
              }
            </ul>
            <div className={styles.linksDiv}></div>
          </motion.div>
          <motion.div 
            className={styles.contentDiv}
            style={{
              position: "relative",
              width: "100%", 
              maxHeight: "100vh", 
              overflow: "auto", 
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            }}>
            <LanguageSelector />
            {children}
          </motion.div>
        </motion.div>
      {/* </motion.div> */}
    </>
  );
};

export default Layout;
