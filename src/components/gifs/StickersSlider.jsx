import React, { useEffect, useState } from "react";
import GifCards, { GifCardsLoading } from "./GifCards";
import { v4 } from "uuid";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
// import required modules
import { Autoplay } from "swiper";

// import SWR
import useSWR from "swr";
import { fetcher, GIPHY_API } from "../../config";

/* Set the amount of items when loading */
const itemLoading = 8;

const StickersSlider = () => {
  const { data, error } = useSWR(GIPHY_API.getStickers("trending"), fetcher);
  /* Set loading when there are no data or error */
  const loading = !data && !error;
  const stickers = data?.data || [];
  console.log(stickers);

  /* Gif Slider component */
  return (
    <div className="mt-5 md:mt-10">
      {/* Loading Skeleton for gif cards */}
      {loading && (
        <Swiper slidesPerView={4} spaceBetween={10}>
          {new Array(itemLoading).fill(0).map(() => (
            <SwiperSlide key={v4()}>
              <GifCardsLoading></GifCardsLoading>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Slider gif cards */}
      {!loading && (
        <Swiper
          grabCursor={true}
          slidesPerView={4}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            600: {
              slidesPerView: 3,
            },
            400: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 2,
            },
          }}
          modules={[Autoplay]}
        >
          {stickers.length > 0 &&
            stickers.map((item) => (
              <SwiperSlide key={item.id}>
                <GifCards item={item}></GifCards>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};

export default StickersSlider;
