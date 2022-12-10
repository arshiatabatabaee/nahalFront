import React from "react";
import Footer from "../component/footer/Footer";
import Header from "../component/Heder/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
