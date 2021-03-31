import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

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
        <Link to={"/streams/new"} className={"item"}>
          Create
        </Link>
        <Link to={"/streams/edit"} className={"item"}>
          Edit
        </Link>
        <Link to={"/streams/delete"} className={"item"}>
          Delete
        </Link>
        <Link to={"/streams/show"} className={"item"}>
          Show
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
