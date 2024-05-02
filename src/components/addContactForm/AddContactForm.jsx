import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from "yup";

import { addContact } from '../../redux/contacts/operations';

import css from "./AddContactForm.module.css"

const addContactSchema = Yup.object({
  name: Yup.string().required("Required").min(3, "Too Short!").max(50, "Too Long!").trim(),
  number: Yup.string().required("Required").trim()
})

const FORM_INITIAL_VALUES = {
  name: "",
  number: ""
}

const AddContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };
 
  return (
    <div>
      <Formik 
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={addContactSchema} 
        onSubmit={handleSubmit}>
        <Form className={css.form} >
          <h2>Add new contact</h2>
          <br />
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
            <span>Number</span>
            <br />
            <Field
              className={css.input}
              type="text"
              name="number"
            />
          </label>
          <br />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  )
}

export default AddContactForm