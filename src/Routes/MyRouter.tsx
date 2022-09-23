import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRouter;
