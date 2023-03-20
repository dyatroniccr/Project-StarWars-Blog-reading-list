import React from "react";

const CardPeople = (props) => {
  //<></> se conocen como React Fragment

  return (
    <>
      <div className="card">
        <div className="border bg bg-secondary bg-opacity-25 pt-5 pb-5">
            <img src={props.imagen} className="card-img-top" alt="..." />
        </div>        
        <div className="card-body">
          <h5 className="card-title mb-3 fw-bold">{props.titulo}</h5>
          <h6 className="card-gender fs-6"> Gender: {props.gender}</h6>
          <h6 className="card-hair fs-6"> Hair Color: {props.hair}</h6>
          <h6 className="card-eye fs-6"> Eye-Color: {props.eye}</h6>
          <a href={props.link} className="btn btn-primary">
            {" "}
            {props.habraboton}{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default CardPeople;
