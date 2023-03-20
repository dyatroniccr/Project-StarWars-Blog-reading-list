import React from "react";

//Components
import DropRow from "./dropRow.jsx";

const DropButton = () => {
  return (
    <div className="dropdown ml-auto">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Favorites
      </button>
      <ul className="dropdown-menu">
        <DropRow />
      </ul>
    </div>
  );
};

export default DropButton;
