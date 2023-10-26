import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles/Home.module.css";
import layoutStyles from "@/styles/Layout.module.css";
import LanguageSelector from "./LanguageSelector";
import { useSelector } from "react-redux";
import { divExit, divStart } from "@/animations/introScreen";
import { useRouter } from "next/router";
import Head from "next/head";
import { useTranslation } from "next-i18next";

const Layout = ({ title = 'Nicolas Valdez', children }: { title: string, children: React.ReactNode }) => {
  const { t: translate } = useTranslation('common');
  const { startExitAnimation } = useSelector((state: any) => state.animations);
  const divMotion = startExitAnimation ? divExit : divStart;
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
        <LanguageSelector />
        <motion.div 
          className={layoutStyles.sideBarDiv}
          {...divMotion}
        >
          <div className={layoutStyles.nameDiv}></div>
          <ul className={layoutStyles.sectionDiv}>
            {
              ["About me", "Skills", "Projects", "Contact"].map((item, index) => 
                <motion.li 
                  key={index} 
                  className={layoutStyles.sectionElements}
                  whileHover={{
                    scale: 1.1,
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
        {children}
      </motion.div>
    </>
  );
};

export default Layout;
