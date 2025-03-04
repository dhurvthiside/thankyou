import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NamePage from "./Pages/NamePage";
import ScrollToTop from "./Pages/ScrollToTop"; // Import the component

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<NamePage />} />
      </Routes>
    </>
  );
};

export default App;
