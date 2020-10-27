import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={"ui secondary pointing menu"}>
      <div className="item">
        <Link to={"/"}>STREAMY</Link>
      </div>
      <div className="right menu">
        <Link to={"/"} className={"item"}>
          All Streams
        </Link>
      </div>
    </div>
  );
};

export default Header;
