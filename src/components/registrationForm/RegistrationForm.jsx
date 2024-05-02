import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from "yup";

import { register } from '../../redux/auth/operations';

import css from "./RegistrationForm.module.css"

const registerUserSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email address is required")
  .email("You must enter valid email adress!"),
  password: Yup.string().required("User password is required")
  })
  const FORM_INITIAL_VALUES = {
    name: "",
    email: "",
    password: ""
  }

const RegistrationForm= () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik 
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={registerUserSchema} 
        onSubmit={handleSubmit}>
        <Form className={css.form} >
          <h2>Register user</h2>
          <label>
            <span>Name</span>
            <br />
            <Field
              className={css.input}
              type="text"
              name="name"
            />
          </label>
          <br />
          <label>
            <span>Email</span>
            <br />
            <Field
              className={css.input}
              type="email"
              name="email"
            />
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
          </label>
          <br />
          <button type="submit">Add new user</button>
        </Form>
      </Formik>
    </div>
  )
}

export default RegistrationForm