import React from "react";
import { Route, Routes as ReactDomRoutes } from "react-router-dom";
import Home from "../pages/Home/Home";
import ToDo from "../pages/ToDo/ToDo";
import BuscadorPoke from "../pages/BuscaPoke/BuscaPoke";
import Layout from "../components/Layout/Layout";
import LogIn from "../pages/LogIn/LogIn";

const Routes = () => {
  return (
    <Layout>
      <ReactDomRoutes>
        <Route path="/" element={<Home />} />
        <Route path="todo" element={<ToDo />} />
        <Route path="buscadorpoke" element={<BuscadorPoke />} />
        <Route path="login" element={<LogIn />} />
      </ReactDomRoutes>
    </Layout>
  );
};

export default Routes;
