// GET DATA FROM API
export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const API_KEY = "9J1iUmuQFKbyZqsXNkaKnoiQvK7V6wLR";

const GIPHY_ENDPOINT = "https://api.giphy.com/v1/gifs";
const STICKERS_ENDPOINT = "https://api.giphy.com/v1/stickers";

const GIFPHY_SEARCH_ENDPOINT = "https://api.giphy.com/v1/gifs/search";
const STICKERS_SEARCH_ENDPOINT = "https://api.giphy.com/v1/stickers/search";

export const GIPHY_API = {
  getGifs: (type, limit = "25") =>
    `${GIPHY_ENDPOINT}/${type}?api_key=${API_KEY}&limit=${limit}&rating=g`,
  getStickers: (type, limit = "25") =>
    `${STICKERS_ENDPOINT}/${type}?api_key=${API_KEY}&limit=${limit}&rating=g`,

  getSearchGif: (query, limit = "50") =>
    `${GIFPHY_SEARCH_ENDPOINT}?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=0&rating=g&lang=en`,
  getSearchSticker: (query, limit = "50") =>
    `${STICKERS_SEARCH_ENDPOINT}?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=0&rating=g&lang=en`,
};
