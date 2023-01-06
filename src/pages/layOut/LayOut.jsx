import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/shared/header/Header";
import Footer from "../../components/shared/footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="app">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Layout;
