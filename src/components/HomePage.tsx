"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import { motion } from "framer-motion";

const HomePage = () => {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,

      transition: {
        staggerChildren: 0.5,
        delay: 1,
        duration: 1,
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
    <main className="flex h-full items-center justify-center ">
      <motion.div
        variants={variants}
        animate="animate"
        initial="initial"
        className=" max-w-3xl max-lg:mb-10 "
      >
        <motion.div
          variants={items}
          className="mb-6 flex flex-col space-y-4  whitespace-nowrap text-center leading-normal "
        >
          <small className="text-sm font-medium leading-none text-primary-100">
            Hi, my name is
          </small>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Tobi Fon.
          </h1>
          <h2 className="scroll-m-20  text-3xl font-semibold tracking-tight first:mt-0">
            <span className="text-primary-100">Full-Stack</span> developer.
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            I love building cool things for the internet.
          </p>
        </motion.div>
        <motion.div
          variants={items}
          className="flex flex-col lg:flex-row justify-between gap-5"
        >
          <Button size={"lg"}>
            Download My Cv <DownloadIcon className="ml-2" />
          </Button>
          <Button
            size={"lg"}
            variant={"secondary"}
            className=" bg-bg-300 text-text-100"
          >
            Get in Touch
          </Button>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default HomePage;
