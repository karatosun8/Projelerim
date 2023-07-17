import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContainerCard = () => {
  return (
    <>
      <Form.Control type="search" placeholder="Search Player..." />
      <Container className="card-container my-3 rounded-2">
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </>
  );
};

export default ContainerCard;
