import { useSelector } from "react-redux"
import AuthNav from "../authNav/AuthNav"
import Navigation from "../navigation/Navigation"
import { selectIsSignedIn } from "../redux/auth/selector"

import css from "./AppBar.module.css"
const AppBar = () => {
  const isSignedIn = useSelector(selectIsSignedIn)
  return (
    <nav>
      <Navigation />
      {isSignedIn ? <UserMenu /> : <AuthNav />}
    </nav>
  )
}

export default AppBar