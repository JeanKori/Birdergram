import React from "react";
import ReactDomClient from "react-dom/client";

// ReactDom.render('Iniciamos configuracion', document.getElementById("app"));

const container =  document.getElementById("app");

const root = ReactDomClient.createRoot(container);

root.render(<h1>Iniciamos configuracion</h1>);
