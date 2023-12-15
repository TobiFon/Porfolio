"use client";
import Link from "next/link";
import React from "react";
import { Home, User, Columns, PhoneCall } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type navItemsProps = {
  id: number;
  name: string;
  icon: React.JSX.Element;
  path: string;
};
const navItems: navItemsProps[] = [
  {
    id: 1,
    name: "Home",
    icon: <Home />,
    path: "/",
  },
  {
    id: 2,
    name: "Projects",
    icon: <Columns />,
    path: "/projects",
  },
  {
    id: 3,
    name: "About",
    icon: <User />,
    path: "/about",
  },

  {
    id: 4,
    name: "Contact",
    icon: <PhoneCall />,
    path: "/contact",
  },
];

const NavBar = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-0 right-0 mt-auto flex w-full flex-col items-center xl:left-[2%] xl:top-0 xl:w-24 xl:justify-center z-50"
    >
      <div className="flex h-16 w-full items-center justify-around gap-5 bg-bg-300/50  p-6 xl:h-96 xl:w-16 xl:flex-col xl:justify-around xl:rounded-full xl:p-4">
        {navItems.map((item) => {
          return (
            <Link href={item.path} key={item.id}>
              <div
                className={`${
                  pathname == item.path ? "text-primary-100" : "text-text-100"
                }  flex flex-col justify-center gap-2 hover:text-primary-100 xl:gap-3`}
              >
                <div className="flex justify-center text-9xl">{item.icon}</div>
                <div className=" xl:text-xxs text-xxs uppercase md:text-xs">
                  {item.name}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default NavBar;
