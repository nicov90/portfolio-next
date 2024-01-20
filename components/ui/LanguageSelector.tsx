import React from "react";
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import { MenuItem, Select } from '@mui/material';
import { useRouter } from "next/router";
import Image from "next/image";
import { divExit, divStart } from "@/animations/introScreen";

const LanguageSelector = ({ homePage }: { homePage?: boolean }) => {
  const { push, locale, pathname } = useRouter();
  const { startExitAnimation } = useSelector((state: any) => state.animations);
  const divMotion = startExitAnimation ? divExit : divStart;

  return (
    <motion.div {...divMotion} className="languageSelectorDiv" style={{ position: homePage ? "inherit" : "absolute" }}>
      <Select
          value={locale || "en"}
          onChange={(e) => push(pathname, undefined, { locale: e.target.value })}
          style={{
            backgroundColor: pathname !== "/" ? "rgba(255, 255, 255, 0.5)" : "rgba(180, 180, 180, 0.2)" ,
            boxShadow: "0 0 5px 0px rgba(35, 35, 35, 0.1)",
            borderRadius: 10,
          }}
        >
          <MenuItem value="en">
            <Image
              src="/assets/ENG.png"
              alt="English"
              {...selectOptionStyles}
            />
            <p style={{ color: pathname !== "/" ? "black" : "white", fontWeight: "600" }}>English</p>
          </MenuItem>
          <MenuItem value="es">
            <Image
              src="/assets/SPA.png"
              alt="Español"
              {...selectOptionStyles}
            />
            <p style={{ color: pathname !== "/" ? "black" : "white", fontWeight: "600" }}>Español</p>
          </MenuItem>
        </Select>
    </motion.div>
  );
};

const selectOptionStyles = {
  width: 32,
  height: 32,
  style: { marginRight: 6 },
}

export default LanguageSelector;
