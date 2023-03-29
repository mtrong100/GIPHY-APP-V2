import React from "react";
import logo from "../../assets/giphy-icon.png";
import { NavLink } from "react-router-dom";
import { footer } from "../../data";

const Footer = () => {
  // destruct
  const { details, social } = footer;

  return (
    <section className="bg-gradientColor_8">
      <div className="page-container py-10">
        {/* footer-top */}
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center pb-5 border-b border-blueColor">
          <NavLink
            className="flex uppercase items-center select-none gap-3"
            to="/"
          >
            <img src={logo} alt="logo" className="w-8" />
            <span className="gradient-1 text-2xl font-semibold">Giphy app</span>
          </NavLink>
          <div className="flex items-center gap-5">
            {social.map((item, index) => (
              <span
                key={index}
                className="text-3xl hover:text-blueColor cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* footer-links */}
        <div className="flex text-center md:text-start flex-wrap gap-10 mt-10 md:gap-5">
          {details.map(({ title, links, id }) => {
            return (
              <div className="flex flex-col flex-1" key={id}>
                <h2 className="uppercase gradient-1 font-bold text-lg mb-5">
                  {title}
                </h2>
                <ul className="flex flex-col gap-2">
                  {links.map((item, index) => {
                    return (
                      <li key={index}>
                        <a className="links text-sm font-medium" href="#">
                          {item}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* footer-Copyright */}
        <p className="text-base text-center font-semibold mt-20 gradient-3">
          @Copyright 2023. All Right Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
