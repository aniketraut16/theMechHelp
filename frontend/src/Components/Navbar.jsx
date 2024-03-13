import React from "react";

function Navbar() {
  return (
    <div id="Navbar">
      <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="" />
      <div className="city-search">
        <i
          className="fa-solid fa-location-dot"
          style={{ color: "#FF820E" }}
        ></i>
        <select name="city" id="city">
          <option value="nagpur" selected>
            Nagpur
          </option>
        </select>
        <i
          className="fa-solid fa-magnifying-glass"
          style={{ color: "#000000" }}
        ></i>
        <input type="text" placeholder="Find a Garage" />
      </div>
      <a href="#"> Services </a>
      <a href="#"> About Us </a>
      <a href="#"> Blogs </a>
      <a href="#"> More </a>
    </div>
  );
}

export default Navbar;
