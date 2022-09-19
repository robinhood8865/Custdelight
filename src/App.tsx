import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Author from "./Pages/Author";
import Dashboard from "./Pages/Dashboard/Dashboard";
import SignIn from "./Components/Author/SignIn";
import SignUp from "./Components/Author/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/" element={<Author />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   {/* <Author /> */}
    //   <Dashboard />
    // </div>
  );
}

export default App;
