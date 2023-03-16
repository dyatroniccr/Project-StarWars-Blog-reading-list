import React from "react";
import CardPeople from "../component/cardSW.jsx";

const
useEffect(() => {
    const cargaDatos = async () => {
        let { respuestaJson, response } = await actions.useFetch("/people")
        if (response.ok) {
            console.log(respuestaJson)
            setListPeople(respuestaJson.results)
        }
    }
    cargaDatos()

}