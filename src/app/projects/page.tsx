"use client";
import ProjectsPage from "@/components/ProjectsPage";
import React from "react";
import Lenis from "@studio-freight/lenis";
const Projects = () => {
  const lenis = new Lenis();
  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <div>
      <ProjectsPage />
    </div>
  );
};

export default Projects;
