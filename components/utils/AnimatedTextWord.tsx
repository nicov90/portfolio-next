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
const AnimatedTextWord = ({ text, delay = 1, speed = 1, stylesDiv, stylesWord, whileHoverStyles }: Props) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: () => ({
      opacity: 1,
      transition: { staggerChildren: 0.12 / speed, delayChildren: 0.04 * delay},
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
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
      {words.map((word, index) => (
        <motion.span 
          key={index} 
          style={{ marginRight: "5px", ...stylesWord }}
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;
