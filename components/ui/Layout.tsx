import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles/Home.module.css";
import layoutStyles from "@/styles/Layout.module.css";
import LanguageSelector from "./LanguageSelector";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { divExitConOpacity, divStartConOpacity } from "@/animations/general";

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
      <motion.div
        className={styles.mainDiv}
        animate={{
          background:
            "radial-gradient(circle,rgba(2, 0, 28, 0) 0%,rgba(74, 134, 186, 0.1) 100%,rgba(3, 51, 73, 0.5) 100%)",
        }}
      >
        <motion.div 
          style={{ 
            width: "88vw", 
            maxWidth: 1720, 
            margin: "0 auto", 
            boxShadow: "0 0 20px 0px rgba(25, 25, 25, 0.1)",
          }}
          {...divMotion}
        >
          <motion.div 
            className={layoutStyles.sideBarDiv}
          >
            <div className={layoutStyles.nameDiv}></div>
            <ul className={layoutStyles.sectionDiv}>
              {
                ["About me", "Experience", "Skills", "Projects", "Contact"].map((item, index) => 
                  <motion.li 
                    key={index} 
                    className={layoutStyles.sectionElements}
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
            <div className={layoutStyles.linksDiv}></div>
          </motion.div>
          <motion.div 
            className={layoutStyles.contentDiv}
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
      </motion.div>
    </>
  );
};

export default Layout;
