import React, { useEffect, useState } from "react";
import useSWR from "swr";
import GifCards, { GifCardsLoading } from "../components/gifs/GifCards";
import { fetcher, GIPHY_API } from "../config";
import useDebounce from "../hooks/useDebounce";
import { v4 } from "uuid";
import ReactPaginate from "react-paginate";

const itemsPerPage = 25;
const SearchPage = () => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [nextPage, setNextPage] = useState(0);

  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(GIPHY_API.getGifs(nextPage));
  const filterDebounce = useDebounce(filter, 500);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  /* Check params to switch API fetching */
  useEffect(() => {
    if (filterDebounce) {
      setUrl(GIPHY_API.getSearchGif(filterDebounce, nextPage));
    } else {
      setUrl(GIPHY_API.getGifs(nextPage));
    }
  }, [filterDebounce, nextPage]);

  const { data, error } = useSWR(url, fetcher);
  /* Set loading when there are no data or error */
  const loading = !data && !error;
  const gifs = data?.data || [];

  /* react-pagination */
  const pagination = data?.pagination || [];
  useEffect(() => {
    if (!pagination || !pagination.total_count) return;
    setPageCount(Math.ceil(pagination.total_count / itemsPerPage));
  }, [pagination, itemOffset]);
  console.log(pagination);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % pagination.total_count;
    setItemOffset(newOffset);
    setNextPage(event.selected + 25);
  };

  return (
    <section className="pt-24">
      <div className="page-container">
        {/* Input-search */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            onChange={handleFilterChange}
            className="w-full bg-gradientColor_6 p-4 rounded-md placeholder-white"
            type="text"
            placeholder="Search your gif..."
          />
          <span className="bg-gradientColor_4 btn-shinny-1 w-full md:w-fit flex items-center justify-center font-medium  p-4 cursor-pointer rounded-md">
            Search
          </span>
        </div>

        {/* data results */}
        <div className="mt-10 mb-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* skeleton loading */}
          {loading && (
            <>
              {new Array(itemsPerPage).fill(0).map(() => (
                <GifCardsLoading key={v4()}></GifCardsLoading>
              ))}
            </>
          )}

          {/* show data */}
          {!loading &&
            gifs.length > 0 &&
            gifs.map((item) => <GifCards key={item.id} item={item}></GifCards>)}
        </div>

        {/* react-pagination */}
        <div className="my-10">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next>"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<prev"
            renderOnZeroPageCount={null}
            className="pagination"
          />
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
