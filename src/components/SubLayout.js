import React from "react";
import AboutBanner from "../components/AboutBanner";

const SubLayout = ({ children }) => {
  return (
    <>
      <AboutBanner />
      {children}
    </>
  );
};

export default SubLayout;
