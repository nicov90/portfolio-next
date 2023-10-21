import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles/Home.module.css";
import LanguageSelector from "./LanguageSelector";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <motion.div
        className={styles.mainDiv}
        animate={{
          background:
            "radial-gradient(circle,rgba(2, 0, 28, 0) 0%,rgba(74, 134, 186, 0.1) 100%,rgba(3, 51, 73, 0.5) 100%)",
        }}
      >
        {children}
      </motion.div>
      <LanguageSelector />
    </>
  );
};

export default Layout;
