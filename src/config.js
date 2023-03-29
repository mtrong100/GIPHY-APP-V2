// GET DATA FROM API
export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const API_KEY = "9J1iUmuQFKbyZqsXNkaKnoiQvK7V6wLR";

const GIPHY_ENDPOINT = "https://api.giphy.com/v1/gifs";
const STICKERS_ENDPOINT = "https://api.giphy.com/v1/stickers";

const GIFPHY_SEARCH_ENDPOINT = "https://api.giphy.com/v1/gifs/search";
const STICKERS_SEARCH_ENDPOINT = "https://api.giphy.com/v1/stickers/search";

export const GIPHY_API = {
  getGifs: (page = 0) =>
    `${GIPHY_ENDPOINT}/trending?api_key=${API_KEY}&limit=25&offset=${page}&rating=g`,
  getStickers: (page = 0) =>
    `${STICKERS_ENDPOINT}/trending?api_key=${API_KEY}&limit=25&offset=${page}&rating=g`,

  getSearchGif: (query, page = 0) =>
    `${GIFPHY_SEARCH_ENDPOINT}?api_key=${API_KEY}&q=${query}&limit=25&offset=${page}&rating=g&lang=en`,
  getSearchSticker: (query, page = 0) =>
    `${STICKERS_SEARCH_ENDPOINT}?api_key=${API_KEY}&q=${query}&limit=25&offset=${page}&rating=g&lang=en`,
};
