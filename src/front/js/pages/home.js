import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

//Import other components
import CardPeople from "../component/cardPeople.jsx";
import CardPlanets from "../component/cardPlanets.jsx";

import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {}, [store.usuario]);

  return (
    <>
      <div className="container">
        <div className="row text-center mt-5">
          
          <p className="text-danger text-start fw-bold fs-4"> Characters</p>
          <div className="col">
            <CardPeople titulo="Yoda" 
                habraboton="Learn More!"/>
          </div>
          <p className="text-danger text-start fw-bold fs-4"> Planets</p>
          <div className="col">
            <CardPlanets titulo="Endor"
                population = "30000000"
                terrain = "forests, mountains, lakes"
                habraboton="Learn More!"/>
          </div>    
          <p className="text-danger text-start fw-bold fs-4"> Starships</p>
        </div>
      </div>
    </>
  );
};

/*Overflow*/
