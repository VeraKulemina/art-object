import React from "react";
import { NavLink } from "react-router-dom";

function  NavBar() {
  return (
    <div className="navbar" >
      <br />
      <NavLink id="home1" to="/" >Home</NavLink>
      <NavLink id="home2" to="/art">Art</NavLink>
      <NavLink id="home3" to="/addnewart">Add New Art</NavLink>
      <br />
    </div>
  );
};

export default NavBar;