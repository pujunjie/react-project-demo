import React from "react";
import { RouteConfig } from "react-router-config";

const Home = React.lazy(() => import("../pages/home/Home"));
const About = React.lazy(() => import("../pages/about/About"));

const routes: RouteConfig[] = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/about",
    component: About,
    exact: true,
  },
];

export { routes };
