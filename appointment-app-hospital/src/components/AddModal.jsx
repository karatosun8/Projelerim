import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function AddModal({ show, handleClose }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0,10));  // tarihin otomatik olarak gelmesi için
 
  console.log(name,date);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Day & Time</Form.Label>
              <Form.Control type="date" placeholder="Password"
              onChange={(e)=>setDate(e.target.value)} 
              value={date}/>
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit" className="me-2">
                Save
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;
