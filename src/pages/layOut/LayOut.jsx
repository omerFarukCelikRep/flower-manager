import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/shared/header/Header";
import Footer from "../../components/shared/footer/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
