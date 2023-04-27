import { Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

let userSchema = object({
  number: string().required(),
  name: string().required(),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handlSubmit = (values, actions) => {
    const isContact = contacts.some(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );
    if (isContact) {
      actions.resetForm();
      return toast.error(`${values.name} is already in your contacts`, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      onSubmit={handlSubmit}
      initialValues={{ name: '', number: '' }}
      validationSchema={userSchema}
    >
      <Form>
        <div className="mb-3">
          <label htmlFor="InputName" className="form-label">
            Name
          </label>
          <Field
            type="text"
            className="form-control"
            id="InputName"
            aria-describedby="namelHelp"
            name="name"
          />
          <ErrorMessage name="name">
            {msg => <div style={{ color: 'red' }}>{msg}</div>}
          </ErrorMessage>
        </div>
        <div className="mb-3">
          <label htmlFor="numberInput" className="form-label">
            Number
          </label>
          <Field
            type="tel"
            className="form-control"
            id="numberInput"
            name="number"
          />
          <ErrorMessage name="number">
            {msg => <div style={{ color: 'red' }}>{msg}</div>}
          </ErrorMessage>
        </div>

        <Button variant="outline-primary" type="submit">
          Add contact
        </Button>
      </Form>
    </Formik>
  );
};