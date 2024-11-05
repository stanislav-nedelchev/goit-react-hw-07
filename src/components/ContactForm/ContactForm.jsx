import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  const phoneNumberRegex = /^\d{3}-\d{2}-\d{2}$/;

  const dispatch = useDispatch();

  const onAddContact = formData => {
    const finalContact = {
      ...formData,
      id: nanoid(),
    };
    const action = addContact(finalContact);
    dispatch(action);
  };

  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be less than 50 characters')
      .required('Name is required'),
    number: Yup.string()
      .min(3, 'Phone must be at least 3 characters')
      .max(50, 'Phone must be less than 50 characters')
      .required('Phone is required')
      .matches(phoneNumberRegex, 'Phone number must be in format xxx-xx-xx'),
  });

  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span>Name</span>
          <Field type="text" name="name" className={css.input} />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />
        </label>
        <label className={css.label}>
          <span>Number</span>
          <Field className={css.input} type="text" name="number" />
          <ErrorMessage
            className={css.errorMessage}
            name="number"
            component="span"
          />
        </label>
        <button className={css.addContactBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
