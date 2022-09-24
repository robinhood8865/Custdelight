import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Author from "./Pages/Author";
import Dashboard from "./Pages/Dashboard/Dashboard";

import SignIn from "./Components/Author/SignIn";
import SignUp from "./Components/Author/SignUp";

import Subscription from "./Pages/Subscription";
import Main from "./Pages/Account/Main";

// Redux
import { Provider } from "react-redux";
import store from ".//App";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/" element={<Author />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
