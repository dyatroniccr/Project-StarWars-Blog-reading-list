import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

//Import other components
import CardPeople from "../component/cardSW.jsx";

import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {}, [store.usuario]);

  return (
    <>
      <div className="container">
        <div className="row text-center mt-5">
          Star Wars
          <p className="text-danger text-start fw-bold fs-4"> Characters</p>
          <div className="col">
            <CardPeople titulo="Yoda" />
          </div>
          <p className="text-danger text-start fw-bold fs-4"> Planets</p>
          <CardPeople titulo="Endor" 
              habraboton="Learn More!"/>
          <p className="text-danger text-start fw-bold fs-4"> Starships</p>
        </div>
      </div>
    </>
  );
};
