import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.name);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim()),
  );

  const onDeleteBtn = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.contactBox}>
          <Contact contact={contact} onDeleteBtn={onDeleteBtn} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
