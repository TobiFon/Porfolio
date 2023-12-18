"use client";
import React from "react";
import { ContactForm } from "./ContactForm";
import { motion } from "framer-motion";

const ContactPage = () => {
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
      className=" min-h-[75vh] flex flex-col justify-center w-full items-center space-y-8 max-lg:mb-20 p-5"
    >
      <motion.div variants={items} className=" w-full">
        <h2 className="scroll-m-20 text-primary pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
          Get in touch{" "}
        </h2>
      </motion.div>

      <ContactForm />
    </motion.section>
  );
};

export default ContactPage;
