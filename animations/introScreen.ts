export const backgroundStart = {
  initial: {
    background:
      "radial-gradient(circle,rgba(2, 0, 28, 0) 0%,rgba(74, 134, 186, 0.1) 15%,rgb(3, 51, 73) 80%)",
  },
  animate: {
    background:
      "radial-gradient(circle,rgba(2, 0, 28, 0) 0%,rgba(74, 134, 186, 0.1) 45%,rgb(3, 51, 73) 90%)",
  }
};
export const backgroundExit = {
  initial: { background: "radial-gradient(circle,rgba(2, 0, 28, 0) 0%,rgba(74, 134, 186, 0.1) 45%,rgba(3, 51, 73, 1) 90%)" },
  animate: {
    background: "radial-gradient(circle,rgba(2, 0, 28, 0) 0%,rgba(74, 134, 186, 0.1) 100%,rgba(3, 51, 73, 0.5) 100%)"
  }
}

export const textMotion = {
  initial: { y: -50, opacity: 0.5 },
  transition: {
    type: "spring",
    bounce: 0.65,
    duration: 2,
  },
  animate: { y: 0, opacity: 1 },
};

export const divStart = {
  initial: { scale: 0.5 },
  animate: { scale: 1 },
  transition: {
    duration: 0.6,
    ease: "easeInOut",
    delay: 0.25,
  },
};

export const divExit = {
  initial: { scale: 1, opacity: 1 },
  animate: { scale: 0.5, opacity: 0 },
  transition: {
    duration: 1,
    ease: "backInOut",
  },
}