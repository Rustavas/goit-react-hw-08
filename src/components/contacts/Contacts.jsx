import { useSelector } from "react-redux"

import ErrorMessage from "../errorMessage/ErrorMessage";
import Contact from "../contact/Contact";
import Loader from "../loader/Loader";
import { selectFilteredContacts } from "../redux/filters/slice";
import { selectPhonebookIsError, selectPhonebookIsLoading } from "../redux/contacts/selector";

import css from "./Contacts.module.css"

const Contacts = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectPhonebookIsLoading)
  const isError = useSelector(selectPhonebookIsError)

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
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