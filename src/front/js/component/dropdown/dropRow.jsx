import React from "react";

const DropRow = () => {
  const listaMenu = ["Action", "Another action", "Something else here", "Luck"];

  return (
    <>
      {listaMenu.map((item, index) => (
        <li key={index} className="d-flex justify-content-between">
          <a className="dropdown-item" href="#">
            {" "}
            {item}{" "}
          </a>
          <button>X</button>
        </li>
      ))}
    </>
  );
};

export default DropRow;
