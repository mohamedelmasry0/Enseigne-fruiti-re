import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
// import { BiFilm } from "react-icons/bi";
// import "./Navigation.css";
const Navigation = () => {
  return (
    <div className="navi">
      <NavLink exact to="/" activeClassName="navActive">
        {/* <BiFilm /> */}
        <span className="sideLinks">Acueil</span>
        <br />
        <br />
      </NavLink>

      <NavLink exact to="/paris" activeClassName="navActive">
        {/* <BiFilm /> */}
        <span className="sideLinks">Paris</span>
        <br />
        <br />
      </NavLink>

      <NavLink exact to="/marseille" activeClassName="navActive">
        {/* <i className= "BiFilm"></i> */}
        {/* <BiFilm /> */}
        <span className="sideLinks">Marseille</span>
        <br />
        <br />
      </NavLink>

      <NavLink exact to="/dijon" activeClassName="navActive">
        {/* <i className= "BiFilm"></i> */}
        {/* <BiFilm /> */}
        <span className="sideLinks">Dijon</span>
        <br />
        <br />
      </NavLink>

      <NavLink exact to="/lille" activeClassName="navActive">
        {/* <i className= "BiFilm"></i> */}
        {/* <BiFilm /> */}
        <span className="sideLinks">Lille</span>
        <br />
        <br />
      </NavLink>

      <NavLink exact to="/nice" activeClassName="navActive">
        {/* <i className= "BiFilm"></i> */}
        {/* <BiFilm /> */}
        <span className="sideLinks">Nice</span>
        <br />
        <br />
      </NavLink>

      <NavLink exact to="/all" activeClassName="navActive">
        {/* <i className= "BiFilm"></i> */}
        {/* <BiFilm /> */}
        <span className="sideLinks">Tous les magasins</span>
        <br />
        <br />
      </NavLink>

      <NavLink exact to="/modifier" activeClassName="navActive">
        {/* <i className= "BiFilm"></i> */}
        {/* <BiFilm /> */}
        <span className="sideLinks">Modifier</span>
        <br />
        <br />
      </NavLink>
    </div>
  );
};

export default Navigation;
