import css from './Contact.module.css';

const Contact = ({ contact, onDeleteBtn }) => {
  return (
    <div className={css.contactCard}>
      <div className={css.contactInfo}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button
        type="button"
        className={css.deleteBtn}
        onClick={() => {
          onDeleteBtn(contact.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
