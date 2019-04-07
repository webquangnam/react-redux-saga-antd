import React from "react";

import Home from "./components/ListNhanVien";
import About from "./components/About";
import Contact from "./components/Contact";


const routes = [
  { path: "/", exact: true, main: () => <Home /> },
  { path: "/about", exact: false, main: () => <About /> },
  { path: "/Contact", exact: false, main: () => <Contact /> },
];

export default routes;
