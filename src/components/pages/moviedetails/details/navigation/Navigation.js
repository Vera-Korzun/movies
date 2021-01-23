import React from "react";
import { NavLink } from "react-router-dom";
import moviesDetailsRoutes from "../../../../../routes/MoviesDetailsRouters";

const Navigation = () => {
  return (
    <ul>
      {moviesDetailsRoutes.map(({ name, path, exact }) => (
        <li key={path}>
          <NavLink to={path} exact={exact}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
