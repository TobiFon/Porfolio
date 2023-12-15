"use client";
import React from "react";
import { Logo } from "../../public";
import { Linkedin, Github, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  const variants = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <motion.header
      variants={variants}
      animate="animate"
      initial="initial"
      className=" container flex items-center justify-between e
    py-4 "
    >
      <Link href="/">
        <motion.div className=" h-10 w-24">
          {<Logo className=" h-full w-full " />}
        </motion.div>
      </Link>
      <motion.div
        variants={variants}
        className="flex gap-3 h-full align-bottom"
      >
        <Link href={"#"} className="h-full">
          <Github className="socials" />
        </Link>
        <Link href={"#"} className="h-full">
          <Linkedin className="socials" />
        </Link>
        <Link href={"#"} className="h-full">
          <Mail className="socials" />
        </Link>
      </motion.div>
    </motion.header>
  );
};

export default Header;
