import css from "./ErrorMessage.module.css"

const ErrorMessage = ({
  message="Oops, something went wrong, please reload the page!😢"
}) =>{
return <p className={css.error}>{message}</p>;
}

export default ErrorMessage;