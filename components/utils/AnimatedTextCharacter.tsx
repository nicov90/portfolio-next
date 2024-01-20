import React from "react";
import { TargetAndTransition, VariantLabels, motion } from "framer-motion";

interface Props{
  text: string,
  delay?: number,
  speed?: number,
  stylesDiv?: React.CSSProperties,
  stylesWord?: React.CSSProperties,
  whileHoverStyles?: VariantLabels | TargetAndTransition,
}

const AnimatedTextCharacter = ({ text, delay = 1, speed = 1, stylesDiv, stylesWord, whileHoverStyles }: Props) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: () => ({
      opacity: 1,
      transition: { staggerChildren: 0.03 / speed, delayChildren: 0.04 * delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem", ...stylesDiv }}
      variants={container}
      initial="hidden"
      animate="visible"
      whileHover={whileHoverStyles}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} style={{ ...stylesWord }}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter;