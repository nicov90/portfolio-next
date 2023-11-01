import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import { Divider, Select } from "antd";
import { useRouter } from "next/router";
import Image from "next/image";
import { divExit, divStart } from "@/animations/introScreen";

const LanguageSelector = () => {
  const { push, locale, pathname } = useRouter();
  const { startExitAnimation } = useSelector((state: any) => state.animations);
  const divMotion = startExitAnimation ? divExit : divStart;

  return (
    <motion.div {...divMotion} className="languageSelectorDiv">
      <motion.div>
        <Select
          value={locale || "en"}
          onChange={(locale) => push(pathname, undefined, { locale })}
          style={{ 
            backgroundColor: pathname !== "/" ? "rgba(255, 255, 255, 0.5)" : "transparent" ,
            boxShadow: "0 0 8px 0px rgba(25, 25, 25, 0.15)",
            borderRadius: 5,
          }}
        >
          <Select.Option value="en">
            <Image
              src="/assets/ENG.png"
              alt="English"
              {...selectOptionStyles}
            />
            <p style={{ color: pathname !== "/" ? "black" : "white", fontWeight: "600" }}>English</p>
          </Select.Option>
          <Select.Option value="es">
            <Image
              src="/assets/SPA.png"
              alt="Español"
              {...selectOptionStyles}
            />
            <p style={{ color: pathname !== "/" ? "black" : "white", fontWeight: "600" }}>Español</p>
          </Select.Option>
        </Select>
      </motion.div>
    </motion.div>
  );
};

const selectOptionStyles = {
  width: 32,
  height: 32,
  style: { marginRight: 6 },
}

export default LanguageSelector;
