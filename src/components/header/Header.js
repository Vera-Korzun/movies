import React from "react";
import { NavLink } from "react-router-dom";
import { mainRoutes } from "../../routes/MainRoutes";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="header">
        <ul className="header__list">
          {mainRoutes.map(({ path, name, exact }) => (
            <li className="header__list-item" key={path}>
              <NavLink
                to={path}
                exact={exact}
                className="header__list-item-link"
                activeClassName="active-link"
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </HeaderStyled>
  );
};

export default Header;
