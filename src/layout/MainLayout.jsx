import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../conponents/Navbar";
import Footer from "../conponents/Footer";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
