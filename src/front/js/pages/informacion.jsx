import React, {useState, useContext, useEffect} from "react";
import { Context } from "../store/appContext";

const Informacion = () => {
    const { store, actions } = useContext(Context);
    const [infoUsuario, setInfoUsuario] = useState("ninguno");

    useEffect(()=>{
        const cargaDatos = async() => {
            let { respuestaJson, response } = await actions.useFetch('/protected')
            console.log(response.ok);
            console.log(respuestaJson);
            if(response.ok){
                setInfoUsuario(respuestaJson.name)
            }            
        }
        cargaDatos()
    },[])

    return(<>
       <div>
        Eres el Usuario: {infoUsuario}

       </div>

        </> );
};

export default Informacion;