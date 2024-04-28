import { NavLink } from "react-router-dom"
import clsx from "clsx";

import css from "./AuthNav.module.css"
const AuthNav = () => {
  const addActiveClass = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });
  return (
    <div className={css.authNav}>
      <NavLink className={addActiveClass} to="/register">Register</NavLink>
      <NavLink className={addActiveClass} to="/login">Login</NavLink>
    </div>
  )
}

export default AuthNav