// components/Layout.js
import React, { useState, useEffect } from "react";
import Head from "../Head/Head";
import NavBar from "../Navbar/NavBar";

import "./Layout.scss";

const Layout = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="layout">
      <Head title={props.title} />
      <NavBar isScrolled={isScrolled} />
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Layout;
