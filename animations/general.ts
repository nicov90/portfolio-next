export const divStartConOpacity = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: {
    duration: 0.6,
    ease: "easeInOut",
    delay: 0.25,
  },
};

export const divExitConOpacity = {
  initial: { scale: 1, opacity: 1 },
  animate: { scale: 0.5, opacity: 0 },
  transition: {
    duration: 1,
    ease: "backInOut",
  },
}