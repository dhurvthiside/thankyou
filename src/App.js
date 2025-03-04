import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NamePage from "./Pages/NamePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:name" element={<NamePage />} /> {/* Single dynamic route */}
    </Routes>
  );
};

export default App;
