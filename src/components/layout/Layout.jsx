import { NavLink } from "react-router-dom"

import css from "./Layout.module.css"
import AppBar from "../appBar/AppBar";

const Layout = ({children}) => {
  
  return (
    <div>
      <header className={css.header}>
        <AppBar />
        {/* <nav className={css.nav}>
          <NavLink className={addActiveClass} to="/">Home</NavLink>
          <div className={css.auth}>
            <NavLink className={addActiveClass} to="/register">Register</NavLink>
            <NavLink className={addActiveClass} to="/login">Login</NavLink>
          </div>
          <NavLink to="/contacts">Contacts</NavLink>
        </nav> */}
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout