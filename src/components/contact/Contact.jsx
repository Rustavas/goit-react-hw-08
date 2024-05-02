// import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

import css from "./Contact.module.css";

const Contact = ({ name, number, id}) => {
  const dispatch = useDispatch();
  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.item}>
      <div className={css.contactData}>
        <p>👤 {name}</p>
        <p>📞 {number}</p>
      </div>
      <button
        className={css.deleteContactBtn}
        type="button"
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;