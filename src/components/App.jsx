import { Container, Row, Col } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from './contactForm/ContactForm';
import { Fillter } from './fillter/Fillter';
import { ContactsList } from './contactsList/ContactsList';

export const App = () => {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '700px',
      }}
    >
      <Row className="mb-5">
        <Col sm>
          <h1 className="card-title mb-3 mt-3">Phonebook</h1>
          <ContactForm />
        </Col>
      </Row>
      <Row>
        <Col sm>
          <h2 className="card-title mb-3">Contacts</h2>
          <Fillter />
        </Col>
      </Row>
      <Row>
        <Col sm>
          <ContactsList />
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};