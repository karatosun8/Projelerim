import {arrowdown} from "../helper/icons"
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


const InterviewAccord =({id,question,answer})=>{

    console.log(arrowdown);

    return(

    //     <Container>
    //   <Row>
    //     <Col>1 of 2</Col>
    //     <Col>2 of 2</Col>
    //   </Row>
    //   <Row>
    //     <Col>1 of 3</Col>
    //     <Col>2 of 3</Col>
    //     <Col>3 of 3</Col>
    //   </Row>
    // </Container>

        <div className="cards">
        <div className="date">
          <h2>{id}-{question}</h2>
        </div>
        <div className="card-over">
          <p>{answer}</p>
        </div>
      </div>  

    )
}
export default InterviewAccord;