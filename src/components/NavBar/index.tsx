"use client";

import { useState } from "react";
import { CgMenu, CgClose } from "react-icons/cg";
import { UnderlineLink } from "../Others/UnderlineLink";

const navigation = [
  {
    navigationName: "explore",
    link: "",
  },
  {
    navigationName: "about",
    link: "",
  },
];

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full backdrop-blur-sm ${
        isNavOpen ? "bg-background/75 " : ""
      }`}
    >
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="text-4xl sm:text-5xl font-bold bg-clip-text bg-gradient-to-r from-primary to-accent text-transparent">
            boyzwhocried
          </span>
        </a>
        <div className="hidden sm:flex space-x-6">
          {navigation.map((nav, index) => (
            <UnderlineLink
              key={index}
              href={nav.link}
              text={nav.navigationName}
              indexKey={index}
            />
          ))}
        </div>
        <div className="sm:hidden flex items-center text-2xl cursor-pointer">
          {isNavOpen ? (
            <CgClose onClick={toggleNav} />
          ) : (
            <CgMenu onClick={toggleNav} />
          )}
        </div>
      </div>
      {isNavOpen && (
        <div className="sm:hidden p-4 flex flex-col items-end gap-3">
          {navigation.map((nav, index) => (
            <UnderlineLink
              key={index}
              href={nav.link}
              text={nav.navigationName}
              indexKey={index}
            />
          ))}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
