import React from "react";
import data from "../helper/data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Pictures = () => {
  return (
    <Container >
      
      

      <Row className="justify-content-center">
        {data.map((item,index) => (
          <Col key={index} xs={6} sm={4} md={3} >
            <img
              src={item.src.large}
              
              className="img-thumbnail doctor-img"
              
            />
            <h5>Photographer: {item.photographer}</h5>
            
          </Col>
        ))}
      </Row>

      

      
    </Container>
  );
};

export default Pictures;

