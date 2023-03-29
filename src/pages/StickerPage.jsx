import React, { useEffect, useState } from "react";
import useSWR from "swr";
import GifCards, { GifCardsLoading } from "../components/gifs/GifCards";
import { fetcher, GIPHY_API } from "../config";
import useDebounce from "../hooks/useDebounce";
import { v4 } from "uuid";

const itemPerPage = 50;

const StickerPage = () => {
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(GIPHY_API.getStickers("trending"));
  const filterDebounce = useDebounce(filter, 500);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  /* Check params to switch API fetching */
  useEffect(() => {
    if (filterDebounce) {
      setUrl(GIPHY_API.getSearchSticker(filterDebounce));
    } else {
      setUrl(GIPHY_API.getStickers("trending"));
    }
  }, [filterDebounce]);

  const { data, error } = useSWR(url, fetcher);
  /* Set loading when there are no data or error */
  const loading = !data && !error;
  const stickers = data?.data || [];
  console.log(stickers);

  return (
    <section className="pt-24">
      <div className="page-container">
        {/* Input-search */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            onChange={handleFilterChange}
            className="w-full bg-gradientColor_9 p-4 rounded-md placeholder-white"
            type="text"
            placeholder="Search your sickers..."
          />
          <span className="bg-gradientColor_4 btn-shinny-1 w-full md:w-fit flex items-center justify-center font-medium  p-4 cursor-pointer rounded-md">
            Search
          </span>
        </div>

        <div className="mt-10 mb-32 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* skeleton loading */}
          {loading && (
            <>
              {new Array(itemPerPage).fill(0).map(() => (
                <GifCardsLoading key={v4()}></GifCardsLoading>
              ))}
            </>
          )}

          {/* show data */}
          {!loading &&
            stickers.length > 0 &&
            stickers.map((item) => (
              <GifCards key={item.id} item={item}></GifCards>
            ))}
        </div>
      </div>
    </section>
  );
};

export default StickerPage;
