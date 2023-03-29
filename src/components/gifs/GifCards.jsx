import React, { useState } from "react";
import Button from "../button/Button";
import LoadingSkeleton from "../LoadingSkeleton";

const GifCards = ({ item }) => {
  // destruct object
  const { images, id } = item;
  const [text, setText] = useState("Copy Link");
  const [isLoading, setIsLoading] = useState(false);

  /* HanldeCopy gif links */
  const handleCopy = (id) => {
    let copiedImage = `https://media4.giphy.COM/media/${id}/giphy.mp4`;
    navigator.clipboard.writeText(copiedImage);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setText("Copied");
      setTimeout(() => {
        setText("Copy Link");
      }, 700);
    }, 200);
  };

  /* GifCards component */
  return (
    <div className="bg-slate-800 btn-shinny-1 p-3 rounded-md flex flex-col gap-7 h-full">
      {/* Gif image */}
      <div>
        <img
          src={images.original.url}
          alt=""
          className="w-full h-[150px] md:h-[200px] lg:h-[300px] object-cover rounded-lg"
        />
      </div>

      {/* Button copy link */}
      <Button bgColor="primary" onClick={() => handleCopy(id)}>
        {isLoading ? (
          <div className="border-2 w-5 h-5 md:w-6 md:h-6 mx-auto border-t-transparent border-white border-t-2 rounded-full animate-spin"></div>
        ) : (
          text
        )}
      </Button>
    </div>
  );
};

/* Create GifCardsLoading to use LoadingSkeleton */
export const GifCardsLoading = () => {
  return (
    <div className="bg-slate-800 btn-shinny-1 p-3 rounded-md flex flex-col gap-7 h-full">
      <div>
        <LoadingSkeleton></LoadingSkeleton>
      </div>
      <LoadingSkeleton height="40px"></LoadingSkeleton>
    </div>
  );
};

export default GifCards;
