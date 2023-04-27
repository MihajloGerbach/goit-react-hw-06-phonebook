import { ListGroup, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const contactList = filter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <ListGroup className="mt-4" as="ol" numbered>
      {contactList.map(({ id, name, number }) => {
        return (
          <ListGroup.Item
            key={id}
            as="li"
            variant="primary"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{name}</div>
              {number}
            </div>
            <Button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              variant="outline-danger"
            >
              Delete
            </Button>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};
