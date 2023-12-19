"use client"

import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

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
      className={`fixed top-0 w-full ${
        isNavOpen ? "bg-background/75 backdrop-blur-sm" : "backdrop-blur-sm"
      } `}
    >
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-primary to-accent">
            boyzwhocried
          </span>
        </a>
        <div className="hidden sm:flex space-x-6">
          {navigation.map((nav, index) => (
            <a
              key={index}
              href={nav.link}
              className="group transition duration-300 hover:italic"
            >
              {nav.navigationName}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-text"></span>
            </a>
          ))}
        </div>
        <div className="sm:hidden flex items-center text-xl cursor-pointer">
          {isNavOpen ? (
            <MdClose onClick={toggleNav} />
          ) : (
            <MdMenu onClick={toggleNav} />
          )}
        </div>
      </div>
      {isNavOpen && (
        <div className="sm:hidden p-4 flex flex-col items-end gap-3">
          {navigation.map((nav, index) => (
            <a
              key={index}
              href={nav.link}
              className="group transition duration-300 hover:italic"
            >
              {nav.navigationName}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-text"></span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
