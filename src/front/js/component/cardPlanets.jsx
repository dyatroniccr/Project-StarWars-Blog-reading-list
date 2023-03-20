import React from "react";

const CardPlanets = (props) => {
  //<></> se conocen como React Fragment

  return (
    <>
      <div className="card">
        <div className="border bg bg-secondary bg-opacity-25 pt-5 pb-5">
          <img src={props.imagen} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title mb-3 fw-bold">{props.titulo}</h5>
          <h6 className="card-population fs-6"> Population: {props.population}</h6>
          <h6 className="card-terrain fs-6"> Terrain: {props.terrain}</h6>          
          <a href={props.link} className="btn btn-primary">
            {" "}
            {props.habraboton}{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default CardPlanets;
