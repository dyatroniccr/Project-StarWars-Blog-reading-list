import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import CardPeople from "../component/cardPeople.jsx";
import { todoActions } from "../store/todos";

const StarWars = () => {
  const { store, actions } = useContext(Context);
  const [listPeople, setListPeople] = useState({});

  //se ejecuta la primera vez que se reenderiza el componente
  useEffect(() => {
    const cargaDatos = async () => {

      /*let { respuestaJson, response } = await actions.useFetch("/people");
      if (response.ok) {
        console.log(respuestaJson);
        setListPeople(respuestaJson.results);
      }
    };
    let { respuestaJson, response } = await actions.useFetch("/planets");
    if (response.ok) {
      console.log(respuestaJson);
      setListPeople(respuestaJson.results);
    }

    let { respuestaJson, response } = await actions.useFetch("/vehicles");
    if (response.ok) {
      console.log(respuestaJson);
      setListPeople(respuestaJson.results);
    }

    cargaDatos();*/
    const cargaParalelo = () => {
        let promesaPlanetas = actions.useEffectParalelo("/planets")
        let promesaPlanetas = actions.useEffectParalelo("/people")
        let promesaPlanetas = actions.useEffectParalelo("/vehicles")

        //resuelvo las tres promesas al mismo tiempo
        let [a, b, c] = await Promise.all([promesaPlanetas, promesaPeople, promesaVehicles])

        a = await a.json()
        setListPlanets(a.results)

        b = await b.json()
        setListPeople(b.results)

        c = await c.json()
        setListVehicles(c.results)                                                                                                                         
    }
    cargaParalelo() 
  }, []);

  return (
    <>
      Soy el componente de Star wars
      <div>
        <ul>
          {listPeople && listPeople.length > 0 ? (
            <>
              {listPeople.map((item, index) => {
                return (
                  <li>
                    <CardPeople name={item.name} uid={item.uid} />
                  </li>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </>
  );
};

export default StarWars;
