import css from "./Layout.module.css"
import AppBar from "../appBar/AppBar";

const Layout = ({children}) => {
  return (
    <div>
      <header className={css.header}>
        <AppBar />
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout