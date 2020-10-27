import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <Link to={"/"}>List</Link>
            <Link to={"/streams/new"}>New</Link>
            <Link to={"/streams/edit"}>Edit</Link>
            <Link to={"/streams/delete"}>Delete</Link>
            <Link to={"/streams/show"}>Show</Link>
        </div>
    );
};

export default Navigation;