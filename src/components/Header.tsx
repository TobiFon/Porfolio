import React from "react";
import { Logo } from "../../public";
import { Linkedin, Github, Mail } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" flex items-center justify-between  align-baseline py-4 ">
      <Link href="/">
        <div className=" h-10 w-24">{<Logo className=" h-full w-full " />}</div>
      </Link>
      <div className="flex gap-3">
        <Link href={"#"}>
          <Linkedin className="socials" />
        </Link>
        <Link href={"#"}>
          <Github className="socials" />
        </Link>
        <Link href={"#"}>
          <Mail className="socials" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
