import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  //<a href="./demo.html">
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Star Wars</span>
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary">
              Check the Context in action
            </button>
          </Link>
          <Link to="/demo">
            <button className="btn btn-primary">Favorites</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};


/*
[{},{},{
	label:"",
	done:false
}]

[{},{},{
	name:"",
	uid:1,
	category:"people"
}]

*/