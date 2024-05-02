import { useDispatch } from "react-redux"
import { logout } from "../../redux/auth/operations";

import css from "./LogOut.module.css"

const LogOut = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout())
  }
  return (
    <div className={css.logOut}>
      <button onClick={handleLogOut} type="button">LogOut</button>
    </div>
  )
}

export default LogOut