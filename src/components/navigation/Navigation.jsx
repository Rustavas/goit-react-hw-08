import { NavLink } from "react-router-dom"
import clsx from "clsx";
import { useSelector } from "react-redux";

import { selectIsSignedIn } from "../../redux/auth/selector";

import css from "./Navigation.module.css"

const Navigation = () => {
  const isSignedIn = useSelector(selectIsSignedIn);

  const addActiveClass = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

  return (
    <div className={css.navigation}>
      <NavLink className={addActiveClass} to="/">Home</NavLink>
      { isSignedIn && <NavLink className={addActiveClass} to="/contacts">Contacts</NavLink> }
    </div>
  )
}

export default Navigation