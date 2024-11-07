import './App.css';

import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from './redux/contactsSlice';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';

function App() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="bodyWrapper">
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
      </div>
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p>Something went wrong. Please try again!</p>
      )}
    </div>
  );
}

export default App;
