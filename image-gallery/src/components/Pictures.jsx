import React from "react";
import data from "../helper/data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Pictures = () => {
  return (
    <Container className="" >
      
      

      <Row className="justify-content-center" >
        {data.map((item,index) => (
          <Col key={index} xs={12} sm={6} md={4}  lg={2}>
            <img
              src={item.src.large}
              
              className="img-thumbnail w-75 h-75 shadow p-2 mb-3 bg-body-tertiary rounded"
              
              
            />
            
            <h4 className="m-1">Photographer: {item.photographer}</h4>
            
          </Col>
        ))}
      </Row>

      

      
    </Container>
  );
};

export default Pictures;

