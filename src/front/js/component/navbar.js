import React from "react";
import { Link } from "react-router-dom";

//Mis Imagenes
import logoStarWars from "../../img/logo.png";

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
        <div className="dropdown ml-auto">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Favorites
          </button>
          <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
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
