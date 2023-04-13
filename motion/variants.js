export const navVariants = (delay) => {
  return {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", delay },
    },
  };
};
