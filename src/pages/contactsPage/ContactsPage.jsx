import { useSelector } from "react-redux"
import AddContactForm from "../../components/addContactForm/AddContactForm"
import Contacts from "../../components/contacts/Contacts"
import ErrorMessage from "../../components/errorMessage/ErrorMessage"
import Loader from "../../components/loader/Loader"
import { selectPhonebookIsError, selectPhonebookIsLoading } from "../../components/redux/contacts/selector"
import SearchBox from "../../components/searchBox/SearchBox"

import css from "./ContactsPage.module.css"

const ContactsPage = () => {
  const isLoading = useSelector(selectPhonebookIsLoading)
  const isError = useSelector(selectPhonebookIsError)
  return (
    <div>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <AddContactForm />
      <SearchBox />
      <div className={css.contacts}><Contacts /></div>
      
    </div>
  )
}

export default ContactsPage