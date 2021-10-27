import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const Navbar = () => {
  return (
    <>
      <div className="cont">
        <ul>
          <li className="arr">
            <AiOutlineArrowLeft />
          </li>
          <li>
            <NavLink activeClassName="link-active" to="/welcome">
              project 1
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="link-active" to="/">
              project 2
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="link-active" to="/">
              project 3
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="link-active" to="/">
              project 3
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="link-active" to="/">
              project 4
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="link-active" to="/">
              project 5
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="link-active" to="/">
              project 6
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="link-active" to="/">
              project 7
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
