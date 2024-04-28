import { NavLink } from "react-router-dom"
import clsx from "clsx";

import css from "./Navigation.module.css"

const Navigation = () => {
  const addActiveClass = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });
  return (
    <div>
      <NavLink className={addActiveClass} to="/">Home</NavLink>
    </div>
  )
}

export default Navigation