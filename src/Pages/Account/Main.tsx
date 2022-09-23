import React from "react";
import Sidebar from "../../Components/Account/Sidebar";
import NavBar from "../../Components/Nav/NavBar";

const Main = () => {
  return (
    <div className="w-full h-screen">
      <NavBar />
      <Sidebar />
    </div>
  );
};

export default Main;
