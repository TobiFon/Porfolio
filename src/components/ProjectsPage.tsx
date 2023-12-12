"use client";
import { useRef } from "react";
import Project from "./Project";
import { motion, useScroll, useSpring } from "framer-motion";
import { Target } from "lucide-react";
const Projects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus velit saepe ipsam asperiores tempora molestias dignissimos reprehenderit consectetur ullam.",
    img: "/ProjectImgs/1.png",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus velit saepe ipsam asperiores tempora molestias dignissimos reprehenderit consectetur ullam.",
    img: "/ProjectImgs/2.png",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus velit saepe ipsam asperiores tempora molestias dignissimos reprehenderit consectetur ullam.",
    img: "/ProjectImgs/3.png",
  },
  {
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus velit saepe ipsam asperiores tempora molestias dignissimos reprehenderit consectetur ullam.",
    img: "/ProjectImgs/4.png",
  },
  {
    title: "Project 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus velit saepe ipsam asperiores tempora molestias dignissimos reprehenderit consectetur ullam.",
    img: "/ProjectImgs/5.png",
  },
  {
    title: "Project 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus velit saepe ipsam asperiores tempora molestias dignissimos reprehenderit consectetur ullam.",
    img: "/ProjectImgs/6.png",
  },
  {
    title: "Project 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus velit saepe ipsam asperiores tempora molestias dignissimos reprehenderit consectetur ullam.",
    img: "/ProjectImgs/7.png",
  },
  {
    title: "Project 8",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus velit saepe ipsam asperiores tempora molestias dignissimos reprehenderit consectetur ullam.",
    img: "/ProjectImgs/8.png",
  },
  {
    title: "Project 9",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus velit saepe ipsam asperiores tempora molestias dignissimos reprehenderit consectetur ullam.",
    img: "/ProjectImgs/9.png",
  },
  {
    title: "Project 10",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus velit saepe ipsam asperiores tempora molestias dignissimos reprehenderit consectetur ullam.",
    img: "/ProjectImgs/10.png",
  },
  {
    title: "Project 11",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus velit saepe ipsam asperiores tempora molestias dignissimos reprehenderit consectetur ullam.",
    img: "/ProjectImgs/11.jpg",
  },
  {
    title: "Project 12",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus velit saepe ipsam asperiores tempora molestias dignissimos reprehenderit consectetur ullam.",
    img: "/ProjectImgs/12.png",
  },
  {
    title: "Project 13",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus velit saepe ipsam asperiores tempora molestias dignissimos reprehenderit consectetur ullam.",
    img: "/ProjectImgs/13.png",
  },
  {
    title: "Project 14",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus velit saepe ipsam asperiores tempora molestias dignissimos reprehenderit consectetur ullam.",
    img: "/ProjectImgs/14.png",
  },
];
const ProjectsPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div ref={ref}>
      <div className="relative">
        <div className=" sticky text-center top-0 pt-14 bg-bg- bg-opacity-5 space-y-4">
          <h1 className=" text-3xl font-semibold text-primary-100 ">
            Some Of My Favourite Work
          </h1>
          <motion.div
            className=" h-2 bg-text-100"
            style={{ scaleX }}
          ></motion.div>
        </div>
        <div>
          {Projects.map((project, index) => (
            <Project
              key={index}
              index={index}
              title={project.title}
              img={project.img}
              description={project.description}
            />
          ))}
        </div>
      </div>
      <section className="h-screen snap-center"> </section>
    </motion.div>
  );
};

export default ProjectsPage;
