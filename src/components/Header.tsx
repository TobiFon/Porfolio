import React from "react";
import { Logo } from "../../public";
import { Linkedin, Github, Mail } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className=" container flex items-center justify-between e
    py-4 "
    >
      <Link href="/">
        <div className=" h-10 w-24">{<Logo className=" h-full w-full " />}</div>
      </Link>
      <div className="flex gap-3 h-full align-bottom">
        <Link href={"#"} className="h-full">
          <Github className="socials" />
        </Link>
        <Link href={"#"} className="h-full">
          <Linkedin className="socials" />
        </Link>
        <Link href={"#"} className="h-full">
          <Mail className="socials" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
