"use client";
import Image from "next/image";
import React from "react";
import AboutTabs from "./AboutTabs";
import { motion } from "framer-motion";

const AboutPage = () => {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delay: 0.5,
        duration: 0.7,
      },
    },
  };
  const items = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };
  return (
    <motion.section
      variants={variants}
      animate="animate"
      initial="initial"
      className=" col mt-5 flex min-h-5/6 xl:h-[85vh] max-lg:pb-20 w-full flex-col items-center align-middle justify-center gap-20 xl:flex-row-reverse"
    >
      <motion.div variants={items} className="">
        <AboutTabs />
      </motion.div>

      <motion.div variants={items} className="flex gap-10">
        <div className="img-container relative max-md:h-60 max-md:w-44 h-80 w-60 rounded-lg border-8 border-primary-100 duration-500 2xl:w-80 2xl:h-96">
          <div className="absolute h-full w-full overflow-hidden transition-all duration-500">
            <Image src={"/me.jpeg"} alt="my image" width={400} height={400} />
          </div>
          <div className="absolute h-full w-full rounded-xl transition-all duration-500">
            <Image src={"/me.jpeg"} alt="my image" width={400} height={400} />
          </div>
          <div className="absolute h-full w-full rounded-xl transition-all duration-500">
            <Image src={"/me.jpeg"} alt="my image" width={400} height={400} />
          </div>
          <div className="absolute h-full w-full rounded-xl transition-all duration-500">
            <Image src={"/me.jpeg"} alt="my image" width={400} height={400} />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutPage;
