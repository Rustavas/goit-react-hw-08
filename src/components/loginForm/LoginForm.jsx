import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from "yup";
import { login } from '../redux/auth/operations';


import css from "./LoginForm.module.css"

const loginUserSchema = Yup.object({
  email: Yup.string().required("Email address is required")
  .email("You must enter valid email adress!"),
  password: Yup.string().required("User password is required")
  })
  const FORM_INITIAL_VALUES = {
    email: "",
    password: ""
  }

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };
 
  return (
    <div>
      <Formik 
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={loginUserSchema} 
        onSubmit={handleSubmit}>
        <Form className={css.form} >
          <h2>Login user</h2>
          <br />
          <label>
            <span>Email</span>
            <br />
            <Field
              className={css.input}
              type="email"
              name="email"
            />
            {/* <ErrorMessage component="p" name="number" render={msg => 
            <p className={css.error}>{msg}</p>}/> */}
          </label>
          <br />
          <label>
            <span>Password</span>
            <br />
            <Field
              className={css.input}
              type="password"
              name="password"
            />
            {/* <ErrorMessage component="p" name="number" render={msg => <p className={css.error}>{msg}</p>}/> */}
          </label>
          <br />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  )
}

export default LoginForm