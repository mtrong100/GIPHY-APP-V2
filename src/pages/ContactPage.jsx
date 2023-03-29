import React from "react";
import dogImg from "../assets/dog.webp";

const ContactPage = () => {
  return (
    <section className="">
      <div className="bg-contactBg bg-center bg-cover bg-no-repeat h-[50vh] flex items-center justify-center">
        <h1 className="text-5xl md:text-8xl gradient-1 text-center font-bold">
          Contact us
        </h1>
      </div>

      {/* content */}
      <div className="page-container my-20 md:my-32">
        {/* booking section */}
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-5">
            <h2 className="gradient-2 text-4xl uppercase font-bold">
              Subscribe us now
            </h2>
            <input
              className="p-4 bg-gradientColor_5 rounded-md placeholder:text-white"
              type="text"
              placeholder="Enter your email..."
            />
            <input
              className="p-4 bg-gradientColor_5 rounded-md placeholder:text-white"
              type="text"
              placeholder="Enter your name..."
            />
            <textarea
              className="resize-none w-full p-3 placeholder:text-white bg-gradientColor_9 outline-none rounded-md h-full"
              placeholder="Write something..."
            ></textarea>
          </div>

          <div className="overflow-hidden relative group">
            <img
              src={dogImg}
              alt="dogimg"
              className="img-cover group-hover:scale-110 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
