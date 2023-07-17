import logo from "../assets/nba-logo.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header =()=>{
    return(

        <Container>
      <Row className="justify-content-center">
        <Col><img src={logo} width={"200px"}/></Col>
        
      </Row>
      <Row>
      <Col className="my-3"><h2>NBA LEGEND</h2> </Col>
      </Row>
      
    </Container>
        

    )
}

export default Header;