import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="nav_row">
        <div className="nav_col">
          <div className="hedder_name">
            <h1>Subhojeet Bhattacharya</h1>
          </div>
        </div>
        <div className="nav_col">
          <div className="nav_options">
            <ul className="list">
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#Features">Features</a>
              </li>
              <li>
                <a href="#Resume">Resume</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="fixing_space"></div>
    </>
  );
};
export default Navbar;
