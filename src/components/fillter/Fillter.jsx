import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/filterSlice';

export const Fillter = () => {
  const dispatch = useDispatch();

  const handlChange = ({ target: { value } }) => {
    dispatch(filterContact(value));
  };
  return (
    <div>
      <Form.Label>Find contacts by name</Form.Label>
      <Form.Control
        onChange={handlChange}
        type="text"
        placeholder="find contact"
      />
    </div>
  );
};