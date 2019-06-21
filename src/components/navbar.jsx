import React, { Component } from "react";

const NavBar = () => {
  const bgcolor = { backgroundColor: "#4EBBDF" };
  return (
    <nav className="navbar-nav navbar-text container-fluid" style={bgcolor}>
      <span className="text-light ml-3"> Navigation bar</span>
    </nav>
  );
};

export default NavBar;
