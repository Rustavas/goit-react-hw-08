import AuthNav from "../authNav/AuthNav"
import Navigation from "../navigation/Navigation"

import css from "./AppBar.module.css"
const AppBar = () => {
  return (
    <nav>
      <Navigation />
      <AuthNav />
    </nav>
  )
}

export default AppBar