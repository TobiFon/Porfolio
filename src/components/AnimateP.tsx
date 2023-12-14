"use client";
import { AnimatePresence, motion } from "framer-motion";
import Transitions from "./Transitions";
import { usePathname } from "next/navigation";

const AnimateP = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div className="h-full" key={pathname}>
        <Transitions />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimateP;
