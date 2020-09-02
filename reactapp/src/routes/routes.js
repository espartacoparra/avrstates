import React from "react";
//import Home from "../containers/home";
//import About from "../containers/about";

const routes = [
  {
    path: "/home",
    component: React.lazy(() => import("../containers/home")),
  },
  {
    path: "/about",
    component: React.lazy(() => import("../containers/about")),
    // routes: [
    //   {
    //     path: "/tacos/bus",
    //     component: Bus,
    //   },
    //   {
    //     path: "/tacos/cart",
    //     component: Cart,
    //   },
    // ],
  },
];

export default routes;
