"use client";
import React from "react";
import { motion } from "framer-motion";

const Transitions = () => {
  const transitionVariants = {
    initial: {
      x: "100%",
      width: "100%",
    },
    animate: {
      x: "0%",
      width: "0%",
    },
    exit: {
      x: ["0%", "100%"],
      width: ["0%", "100%"],
    },
  };

  return (
    <>
      <motion.div
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="w-screen h-screen right-full top-0 bottom-0 bg-bg- z-[999999] fixed"
      ></motion.div>
      <motion.div
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        className="w-screen h-screen right-full top-0 bottom-0 bg-primary-100 z-[999999] fixed"
      ></motion.div>
    </>
  );
};

export default Transitions;
