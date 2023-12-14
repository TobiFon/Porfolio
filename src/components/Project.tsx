import Image from "next/image";
import React, { useRef } from "react";
import { Button } from "./ui/button";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  img: string;
  index: number;
}
[];
function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Project = ({ title, img, description, index }: ProjectProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  return (
    <section className="h-[100vh] flex justify-center items-center snap-center perspective">
      <div
        className={`${
          index % 2 == 0 ? "flex-row" : "flex-row-reverse"
        } gap-10 items-center relative flex xl:p-24 `}
      >
        <div className=" aspect-auto pr-5 ">
          <Image
            src={img}
            alt="project image"
            height={500}
            width={500}
            quality={50}
            ref={ref}
          />
        </div>
        <motion.div
          className="lg:w-[30rem] space-y-3 w-1/2 max-md:absolute max-md:bg-bg-200 max-md:bg-opacity-70 max-md:-right-1 max-md:text-center max-md:w-2/3"
          style={{ y }}
          initial={{ y: 0 }}
        >
          <h3 className=" text-lg lg:text-2xl">{title}</h3>
          <p className=" text-xxs md:text-base">{description}</p>
          <Button className=" lg:px-6 lg:py-4 lg:text-base rounded-md">
            Go to site
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
