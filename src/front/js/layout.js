import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import injectContext from "./store/appContext";

//components
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import NotFound from "./component/notFound.jsx";
import ImportData from "./store/importData.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<ImportData />} path="/data" />
            <Route element={<NotFound />} path="*" />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
