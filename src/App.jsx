import React, { lazy, Suspense } from "react";
import { Routes, Route, Router } from "react-router-dom";
import "./App.scss";
import "swiper/css";
import Layout from "./components/layout/Layout";
/* Lazy load */
const HomePage = lazy(() => import("./pages/HomePage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const StickerPage = lazy(() => import("./pages/StickerPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center">
            <span className="loadingCircle"></span>
          </div>
        }
      >
        <Routes basename="Giphy-app">
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="sticker" element={<StickerPage />} />
            <Route path="contact" element={<ContactPage />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
