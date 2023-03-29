import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/giphy-icon.png";
import { nav } from "../../data";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [top, setTop] = useState(false);

  /* Change background header when scroll */
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setTop(window.scrollY > 40);
    });
  }, []);

  return (
    <header
      className={`${
        top ? "bg-gradientColor_8" : ""
      } py-3 md:py-5 fixed top-0 left-0 right-0 z-50`}
    >
      <div className="page-container flex items-center justify-between">
        {/* Logo */}
        <NavLink
          className="flex uppercase items-center select-none gap-3"
          to="/"
        >
          <img src={logo} alt="logo" className="w-5" />
          <span className="gradient-1 md:text-xl font-semibold">Giphy app</span>
        </NavLink>

        {/* Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {nav.map(({ name, id, path }) => (
            <li key={id}>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "gradient-1" : ""} links uppercase`
                }
                to={path}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/*Toggle icon */}
        <span onClick={() => setToggle(!toggle)} className="text-3xl md:hidden">
          {toggle ? <HiX></HiX> : <HiMenuAlt3></HiMenuAlt3>}
        </span>

        {/* Menu on mobile */}
        <ul
          className={`${
            toggle ? "visible opacity-100" : "invisible opacity-0"
          } fixed transition-all duration-300 left-0 top-[54px] right-0 justify-center flex items-stretch  flex-col gap-4 z-50 border-solid border-blueColor border-t-2 ${
            top ? "bg-gradientColor_8" : "bg-primary"
          } py-5 shadow-md `}
        >
          {nav.map(({ name, id, path }) => (
            <li className="px-5" key={id}>
              <NavLink
                onClick={() => setToggle(!toggle)}
                className={({ isActive }) =>
                  `${isActive ? "gradient-1" : "gradient-3"} links uppercase `
                }
                to={path}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
