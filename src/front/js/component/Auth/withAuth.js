import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Navigate } from "react-router-dom"; //v.6.3.0, para versiones viejas sería <Redirect/>

const WithAuth = (Component) => {
  //HOC Componentes de alto orden
  // Crear otro componente en el Front de alto orden que tenga cosas distintas para saber si eres Administrador
  // En el backend hacer otras rutas protegidas preguntando ciertas cosas, ej: si el modelo usuario tiene perfil,  
  // podrias tener perfil de administrador, cliente o visitando, el usuario que logueado en Base de Datos tiene permisos
  // Podria crear un componente que si el usuario no esta logueado haga logout automaticamente.
  //Minuto 120 del Video

  const AuthRoute = () => {
    const { store, actions } = useContext(Context);

    const isAuth = store.userLogin;
    if (isAuth) {
      return <Component />;
    } else {
      return <Navigate to="/login" />;
    }
  };

  return AuthRoute;
};
export default WithAuth;
