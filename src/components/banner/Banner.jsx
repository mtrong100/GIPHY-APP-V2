import React from "react";
import { banner } from "../../data";

const Banner = () => {
  // destruct object
  const { smallTitle, Title, desc, btn1, img } = banner;

  return (
    <section className="pt-24 md:pt-28">
      <div className="page-container">
        <div className="grid lg:grid-cols-2 place-items-center gap-5">
          {/* Banner Content */}
          <div className="flex flex-col gap-2 items-start">
            <span className="gradient-1 font-semibold uppercase">
              {smallTitle}
            </span>
            <h1 className="gradient-2 font-bold text-3xl md:text-5xl uppercase">
              {Title}
            </h1>
            <p className="gradient-3 text-sm fomt-medium">{desc}</p>
            <button className="btnStyles hover:bg-reverseGradientColor_4">
              {btn1}
            </button>
          </div>

          {/* Banner Image */}
          <div className="bg-gradientColor_4 rounded-md p-1">
            <img src={img} alt="" className="img-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
