import React, { useContext, useEffect } from "react";
import { Context } from "./store/appContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import SinglePeople from "./component/singlePeople.jsx";
import SinglePlanets from "./component/singlePlanets.jsx";
import SingleVehicles from "./component/singleVehicles.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import AddPeople from "./pages/addPeople.jsx";
import AddPlanet from "./pages/addPlanet.jsx";
import AddVehicle from "./pages/addVehicle.jsx";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Info from "./pages/informacion.jsx"

//create your first component
const Layout = () => {
  const { store, actions } = useContext(Context);
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  useEffect(() => {
    actions.initialFetchSwapi();
  }, []);

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Info />} path="/info" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<AddPeople />} path="/add-people" />
            <Route element={<AddPlanet />} path="/add-planet" />
            <Route element={<AddVehicle />} path="/add-vehicle" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<SinglePeople />} path="/people/:uid" />
            <Route element={<SinglePlanets />} path="/planets/:uid" />
            <Route element={<SingleVehicles />} path="/vehicles/:uid" />
            <Route element={<h1>Not found! 404</h1>} path="*" />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
