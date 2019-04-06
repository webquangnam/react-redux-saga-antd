import React from "react";

import Home from "./components/ListNhanVien";
import About from "./components/About";


const routes = [
  { path: "/", exact: true, main: () => <Home /> },
  { path: "/about", exact: false, main: () => <About /> },
];

export default routes;
