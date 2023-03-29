import React from "react";
import Banner from "../components/banner/Banner";
import GifSlider from "../components/gifs/GifSlider";
import StickersSlider from "../components/gifs/StickersSlider";

const HomePage = () => {
  return (
    <>
      <Banner></Banner>
      {/* TRENDING GIFS */}
      <section className="my-10 md:my-20 page-container">
        <h1 className="text-2xl md:text-4xl gradient-2 uppercase font-semibold border-b-4 border-orangeColor w-fit">
          trending gifs
        </h1>
        <GifSlider></GifSlider>
      </section>

      {/* STICKER GIFS */}
      <section className="page-container">
        <h1 className="text-2xl md:text-4xl gradient-3 uppercase font-semibold border-b-4 border-greenColor w-fit">
          sticker gifs
        </h1>
        <StickersSlider></StickersSlider>
      </section>

      {/* MEMES GIFS */}
      <section className="my-10 md:my-20 page-container">
        <h1 className="text-2xl md:text-4xl gradient-1 uppercase font-semibold border-b-4 border-blueColor w-fit">
          MEMES gifs
        </h1>
        <GifSlider query="memes"></GifSlider>
        <GifSlider query="cheems"></GifSlider>
      </section>

      {/* ANIME GIFS */}
      <section className="mb-10 md:mb-20 page-container">
        <h1 className="text-2xl md:text-4xl gradient-9 uppercase font-semibold border-b-4 border-pinkColor w-fit">
          ANIME gifs
        </h1>
        <GifSlider query="anime girls"></GifSlider>
      </section>
    </>
  );
};

export default HomePage;
