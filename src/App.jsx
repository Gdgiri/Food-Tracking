import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import FoodList from "./Pages/FoodList";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foodlist" element={<FoodList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
