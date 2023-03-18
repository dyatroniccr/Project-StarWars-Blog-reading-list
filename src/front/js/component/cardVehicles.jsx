import React from "react";

const CardVehicles = (props) => {
  //<></> se conocen como React Fragment

  return (
    <>
      <div className="card">
        <img src={props.imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.titulo}</h5>
          <p className="card-text">{props.descripcion}</p>
          <a href={props.link} className="btn btn-primary">
            {" "}
            {props.habraboton}{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default CardVehicles;
