import { useSelector } from "react-redux"

import Contact from "../contact/Contact";
import { selectFilteredContacts } from "../../redux/filters/slice";

import css from "./Contacts.module.css"

const Contacts = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={css.contactsList}>
        {filteredContacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default Contacts