"use client";
import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

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
  };
  const pathname = usePathname();

  return (
    <>
      <motion.div
        variants={transitionVariants}
        key={pathname}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        className="w-screen h-screen right-full top-0 bottom-0 bg-primary-100 z-[999999] fixed"
      ></motion.div>

      <motion.div
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        key={pathname}
        transition={{ delay: 0, duration: 1, ease: "easeOut" }}
        className="w-screen h-screen right-full top-0 bottom-0 bg-bg- z-[999999] fixed"
      ></motion.div>
    </>
  );
};

export default Transitions;
