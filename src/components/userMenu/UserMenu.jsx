


import { useSelector } from "react-redux";
import LogOut from "../logOut/LogOut"
import { selectUserData } from "../redux/auth/selector";
import css from "./UserMenu.module.css"

const UserMenu = () => {
  const userData = useSelector(selectUserData);
  return (
    <div className={css.userMenu}>
      <span>Welcome, {userData.name}</span>
      <LogOut />
    </div>
  )
}

export default UserMenu