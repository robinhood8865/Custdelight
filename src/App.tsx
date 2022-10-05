import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Author from "./Pages/Author";
import Dashboard from "./Pages/Dashboard/Dashboard";

import SignIn from "./Components/Author/SignIn";
import SignUp from "./Components/Author/SignUp";

import Subscription from "./Pages/Subscription";
import Builder from "./Pages/Builder/Builder";

// Redux
import { Provider } from "react-redux";

import { Toaster } from "react-hot-toast";
import AuthorLayout from "./Layouts/AuthorLayout";
import BuilderLayout from "./Layouts/BuilderLayout";
import Modules from "./Pages/Builder/Modules";
import Theme from "./Pages/Builder/Theme";
import Settings from "./Pages/Builder/Settings";
import Users from "./Pages/Builder/Users";
import store from "./App/store";

// import ToastProvider from "./Components/Toast/ToastProvider";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/" element={<AuthorLayout />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
          <Route path="/subscription" element={<Subscription />} />

          <Route path="/builder" element={<BuilderLayout />}>
            <Route path="/builder/modules" element={<Modules />} />
            <Route path="/builder/theme" element={<Theme />} />
            <Route path="/builder/users" element={<Users />} />
            <Route path="/builder/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" containerStyle={{ fontSize: 12 }} />
    </Provider>
  );
}

export default App;
