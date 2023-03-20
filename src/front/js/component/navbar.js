import React from "react";
import { Link } from "react-router-dom";

//Mis Imagenes
import logoStarWars from "../../img/logo.png";

//Components
import DropButton from "./dropdown/dropButton.jsx";


export const Navbar = () => {
  //<a href="./demo.html">
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            logoStarWars
          </span>
        </Link>
        < DropButton />
      </div>
    </nav>
  );
};

/*

<Link to="/demo">
            <button className="btn btn-primary">Favorites</button>
</Link>
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
