import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';



function AddModal({show,handleClose}) {
    
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
        <Form.Control type="text" placeholder="Enter Your Name" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Day & Time</Form.Label>
        <Form.Control type="date" placeholder="Password" />
      </Form.Group>
      
      <div className='text-center'>
      <Button variant="primary" type="submit" className='me-2'>
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